// pieces.js - コマ管理
// コマの形式:
//   基本コマ        { kind:'basic', type, shape, x, y }   ※kind省略時も基本コマとして扱う
//   キャラクター    { kind:'char',  charKey, x, y }      ※charKey は "コスト_ID"（例: "3.0_c001"）
//   行動アイコン単体 { kind:'action', actionType, x, y }
//   どのコマにも、重ねた行動アイコン action:'attack' などを持たせられる（移動は本体と一緒）
const IMAGE_BASE_URL = "https://raw.githubusercontent.com/Ala-Aster/Starward_tools/main/image";

class Pieces {
    constructor(grid) {
        this.grid = grid;
        this.pieces = []; // { type, shape, x, y }
        this.colors = {
            'A': '#ff6b6b',
            'B': '#4ecdc4',
            'C': '#f9ca24',
            'D': '#6c5ce7'
        };
        this.textColors = {
            'A': '#ffffff',
            'B': '#ffffff',
            'C': '#333333',
            'D': '#ffffff'
        };
        this.draggedPiece = null;
        this.pieceRadius = 22;

        // キャラクター画像のキャッシュ（読み込み完了時に onImageLoad で再描画してもらう）
        this.imageCache = {};
        this.onImageLoad = null;
        this.charMap = {};
        if (typeof CHARACTER_DATA !== 'undefined') {
            for (const c of CHARACTER_DATA) this.charMap[`${c.cost}_${c.id}`] = c;
        }
    }

    // spec: { kind:'basic', type, shape } または { kind:'char', charKey }
    addPiece(x, y, spec) {
        const piece = { ...spec, x, y };
        this.pieces.push(piece);
        return piece;
    }

    // キャラクター画像を取得（未読込なら読み込み開始して null を返す）
    getImage(charKey) {
        let entry = this.imageCache[charKey];
        if (!entry) {
            const c = this.charMap[charKey];
            if (!c) return null;
            const img = new Image();
            // 画像保存（toDataURL）でキャンバスが汚染されないようにする
            img.crossOrigin = 'anonymous';
            entry = { img, loaded: false, failed: false };
            img.onload  = () => { entry.loaded = true; if (this.onImageLoad) this.onImageLoad(); };
            img.onerror = () => { entry.failed = true; };
            img.src = `${IMAGE_BASE_URL}/${c.cost}/${c.id}.png`;
            this.imageCache[charKey] = entry;
        }
        return entry.loaded ? entry.img : null;
    }

    // filter: 対象を絞る関数（省略可）
    getPieceAt(x, y, threshold = this.pieceRadius * 1.5, filter = null) {
        let closest = null;
        let closestDist = threshold;
        for (const piece of this.pieces) {
            if (filter && !filter(piece)) continue;
            const dist = Math.hypot(piece.x - x, piece.y - y);
            if (dist < closestDist) { closestDist = dist; closest = piece; }
        }
        return closest;
    }

    getPieceAtPixel(x, y) {
        const c = this.grid.toCanvas(x, y);
        return this.getPieceAt(c.x, c.y);
    }

    // 行動アイコンを重ねられるコマ（行動アイコン単体は除く）
    getAttachTarget(x, y) {
        return this.getPieceAt(x, y, this.pieceRadius * 1.5, p => p.kind !== 'action');
    }

    // 消しゴム用：行動アイコンが重なっていればそれだけ外し、なければコマを消す
    // 戻り値: 'action'（行動アイコンを外した） / 'piece'（コマを消した）
    removeStep(piece) {
        if (piece.kind !== 'action' && piece.action) {
            delete piece.action;
            return 'action';
        }
        this.removePiece(piece);
        return 'piece';
    }

    removePiece(piece) {
        const i = this.pieces.indexOf(piece);
        if (i > -1) this.pieces.splice(i, 1);
    }

    draw(ctx) {
        for (const piece of this.pieces) this._drawPiece(ctx, piece);
        // 重ねた行動アイコンは、他のコマに隠れないよう最後に描く
        const r = this.pieceRadius + 2;
        for (const piece of this.pieces) {
            if (piece.kind !== 'action' && piece.action) {
                ActionIcons.draw(ctx, piece.action, piece.x + r * 0.8, piece.y - r * 0.8, 0.6);
            }
        }
    }

    _drawPiece(ctx, piece) {
        if (piece.kind === 'char') { this._drawCharPiece(ctx, piece); return; }
        if (piece.kind === 'action') { ActionIcons.draw(ctx, piece.actionType, piece.x, piece.y, 0.9); return; }
        const { x, y, type, shape } = piece;
        const r = this.pieceRadius;
        const color = this.colors[type];
        const textColor = this.textColors[type];

        ctx.fillStyle = color;
        ctx.strokeStyle = 'rgba(255,255,255,0.85)';
        ctx.lineWidth = 3;

        ctx.beginPath();
        switch (shape) {
            case 'circle':
                ctx.arc(x, y, r, 0, Math.PI * 2);
                break;
            case 'square':
                ctx.roundRect(x - r, y - r, r * 2, r * 2, 4);
                break;
            case 'triangle':
                ctx.moveTo(x, y - r);
                ctx.lineTo(x + r * 0.87, y + r * 0.5);
                ctx.lineTo(x - r * 0.87, y + r * 0.5);
                ctx.closePath();
                break;
            case 'star':
                this._starPath(ctx, x, y, r, r * 0.45, 5);
                break;
        }
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = textColor;
        ctx.font = 'bold 15px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        // 三角は重心が少し下なので文字を少し下げる
        const textY = shape === 'triangle' ? y + r * 0.15 : y;
        ctx.fillText(type, x, textY);
    }

    _drawCharPiece(ctx, piece) {
        const { x, y } = piece;
        const r = this.pieceRadius + 2;
        const img = this.getImage(piece.charKey);

        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.closePath();
        if (img) {
            // 正方形に切り抜いて円形に表示
            ctx.clip();
            const s = Math.min(img.width, img.height);
            ctx.drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, x - r, y - r, r * 2, r * 2);
        } else {
            // 読み込み中／画像なし：名前の頭文字で代用
            ctx.fillStyle = '#888';
            ctx.fill();
            const c = this.charMap[piece.charKey];
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 14px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(c ? c.name.slice(0, 2) : '?', x, y);
        }
        ctx.restore();

        // 縁取り（明るい背景でも暗い背景でも見えるように二重）
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(0,0,0,0.45)';
        ctx.beginPath(); ctx.arc(x, y, r + 1.5, 0, Math.PI * 2); ctx.stroke();
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'rgba(255,255,255,0.9)';
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
    }

    _starPath(ctx, cx, cy, outerR, innerR, points) {
        const step = Math.PI / points;
        ctx.moveTo(cx, cy - outerR);
        for (let i = 1; i < points * 2; i++) {
            const r = i % 2 === 0 ? outerR : innerR;
            const angle = i * step - Math.PI / 2;
            ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
        }
        ctx.closePath();
    }

    startDrag(x, y) {
        const c = this.grid.toCanvas(x, y);
        this.draggedPiece = this.getPieceAt(c.x, c.y);
        return this.draggedPiece !== null;
    }

    dragPiece(x, y) {
        if (!this.draggedPiece) return;
        const { x: cx, y: cy } = this.grid.toCanvas(x, y);
        if (cx >= 0 && cx < this.grid.width && cy >= 0 && cy < this.grid.height) {
            this.draggedPiece.x = cx;
            this.draggedPiece.y = cy;
        }
    }

    endDrag() { this.draggedPiece = null; }

    clear() { this.pieces = []; }
}
