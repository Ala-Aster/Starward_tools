// pieces.js - コマ管理
class Pieces {
    constructor(grid) {
        this.grid = grid;
        this.pieces = []; // { type: 'A'|'B'|'C'|'D', x, y }
        this.colors = {
            'A': '#ff6b6b',
            'B': '#4ecdc4',
            'C': '#f9ca24',
            'D': '#6c5ce7'
        };
        this.selectedType = null;
        this.draggedPiece = null;
        this.pieceRadius = 20;
    }

    /**
     * コマを配置（新規）- ピクセル座標で配置
     */
    addPiece(x, y, type) {
        const piece = { type, x, y };
        this.pieces.push(piece);
        return piece;
    }

    /**
     * 指定位置に最も近いコマを取得（距離判定）
     */
    getPieceAt(x, y, threshold = this.pieceRadius * 1.5) {
        let closest = null;
        let closestDist = threshold;

        for (const piece of this.pieces) {
            const dist = Math.sqrt(Math.pow(piece.x - x, 2) + Math.pow(piece.y - y, 2));
            if (dist < closestDist) {
                closestDist = dist;
                closest = piece;
            }
        }

        return closest;
    }

    /**
     * コマを削除
     */
    removePiece(piece) {
        const index = this.pieces.indexOf(piece);
        if (index > -1) {
            this.pieces.splice(index, 1);
        }
    }

    /**
     * マウス座標を実座標に変換して取得
     */
    getPieceAtPixel(x, y) {
        const rect = this.grid.canvas.getBoundingClientRect();
        const canvasX = x - rect.left;
        const canvasY = y - rect.top;
        return this.getPieceAt(canvasX, canvasY);
    }

    /**
     * コマを描画
     */
    draw(ctx) {
        for (const piece of this.pieces) {
            this.drawPiece(ctx, piece);
        }
    }

    /**
     * 単一のコマを描画
     */
    drawPiece(ctx, piece) {
        const radius = this.pieceRadius;

        // コマの円
        ctx.fillStyle = this.colors[piece.type];
        ctx.beginPath();
        ctx.arc(piece.x, piece.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // コマの枠線
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 3;
        ctx.stroke();

        // ラベル（コマの種類）
        ctx.fillStyle = 'white';
        ctx.font = 'bold 16px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(piece.type, piece.x, piece.y);
    }

    /**
     * ドラッグ開始
     */
    startDrag(x, y) {
        this.draggedPiece = this.getPieceAtPixel(x, y);
        return this.draggedPiece !== null;
    }

    /**
     * ドラッグ中のコマを移動
     */
    dragPiece(x, y) {
        if (!this.draggedPiece) return;

        const rect = this.grid.canvas.getBoundingClientRect();
        const canvasX = x - rect.left;
        const canvasY = y - rect.top;

        // グリッド範囲内のみ移動を許可
        if (canvasX >= 0 && canvasX < this.grid.width &&
            canvasY >= 0 && canvasY < this.grid.height) {
            this.draggedPiece.x = canvasX;
            this.draggedPiece.y = canvasY;
        }
    }

    /**
     * ドラッグ終了
     */
    endDrag() {
        this.draggedPiece = null;
    }

    /**
     * すべてのコマをクリア
     */
    clear() {
        this.pieces = [];
    }

    /**
     * コマをJSON形式で取得
     */
    toJSON() {
        return JSON.stringify(this.pieces);
    }

    /**
     * JSONからコマを復元
     */
    fromJSON(json) {
        try {
            this.pieces = JSON.parse(json);
        } catch (e) {
            console.error('Failed to parse pieces JSON:', e);
            this.pieces = [];
        }
    }
}
