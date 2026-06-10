// pieces.js - コマ管理
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
    }

    addPiece(x, y, type, shape = 'circle') {
        const piece = { type, shape, x, y };
        this.pieces.push(piece);
        return piece;
    }

    getPieceAt(x, y, threshold = this.pieceRadius * 1.5) {
        let closest = null;
        let closestDist = threshold;
        for (const piece of this.pieces) {
            const dist = Math.hypot(piece.x - x, piece.y - y);
            if (dist < closestDist) { closestDist = dist; closest = piece; }
        }
        return closest;
    }

    getPieceAtPixel(x, y) {
        const rect = this.grid.canvas.getBoundingClientRect();
        return this.getPieceAt(x - rect.left, y - rect.top);
    }

    removePiece(piece) {
        const i = this.pieces.indexOf(piece);
        if (i > -1) this.pieces.splice(i, 1);
    }

    draw(ctx) {
        for (const piece of this.pieces) this._drawPiece(ctx, piece);
    }

    _drawPiece(ctx, piece) {
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
        const rect = this.grid.canvas.getBoundingClientRect();
        this.draggedPiece = this.getPieceAt(x - rect.left, y - rect.top);
        return this.draggedPiece !== null;
    }

    dragPiece(x, y) {
        if (!this.draggedPiece) return;
        const rect = this.grid.canvas.getBoundingClientRect();
        const cx = x - rect.left;
        const cy = y - rect.top;
        if (cx >= 0 && cx < this.grid.width && cy >= 0 && cy < this.grid.height) {
            this.draggedPiece.x = cx;
            this.draggedPiece.y = cy;
        }
    }

    endDrag() { this.draggedPiece = null; }

    clear() { this.pieces = []; }
}
