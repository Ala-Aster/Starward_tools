// arrows.js - 自由描画管理
class Arrows {
    constructor(grid, canvas) {
        this.grid = grid;
        this.canvas = canvas;
        this.strokes = [];
        this.strokeInProgress = null;
        this.lineWidth = 3;
        this.lineColor = '#2c2c2c';
        this.eraserWidth = 15;
    }

    setColor(color) { this.lineColor = color; }

    startStroke(x, y) {
        const rect = this.canvas.getBoundingClientRect();
        this.strokeInProgress = {
            points: [{ x: x - rect.left, y: y - rect.top }],
            color: this.lineColor,
            width: this.lineWidth
        };
    }

    addPointToStroke(x, y) {
        if (!this.strokeInProgress) return;
        const rect = this.canvas.getBoundingClientRect();
        this.strokeInProgress.points.push({ x: x - rect.left, y: y - rect.top });
    }

    endStroke() {
        if (!this.strokeInProgress || this.strokeInProgress.points.length < 2) {
            this.strokeInProgress = null;
            return;
        }
        this.strokes.push(this.strokeInProgress);
        this.strokeInProgress = null;
    }

    erase(x, y, radius = this.eraserWidth) {
        const rect = this.canvas.getBoundingClientRect();
        const cx = x - rect.left, cy = y - rect.top;
        this.strokes = this.strokes.filter(stroke =>
            !stroke.points.some(p => Math.hypot(p.x - cx, p.y - cy) <= radius)
        );
    }

    clear() { this.strokes = []; this.strokeInProgress = null; }

    draw(ctx) {
        for (const stroke of this.strokes) this._drawStroke(ctx, stroke);
        if (this.strokeInProgress) this._drawStroke(ctx, this.strokeInProgress);
    }

    _drawStroke(ctx, stroke) {
        if (stroke.points.length < 2) return;
        ctx.strokeStyle = stroke.color;
        ctx.lineWidth = stroke.width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
        for (let i = 1; i < stroke.points.length; i++) ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
        ctx.stroke();
    }

    // 状態をオブジェクトで返す
    getState() { return JSON.stringify(this.strokes); }

    // 状態を復元
    setState(state) { this.strokes = JSON.parse(state); }
}
