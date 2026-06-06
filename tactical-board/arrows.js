// arrows.js - 自由描画管理
class Arrows {
    constructor(grid, canvas) {
        this.grid = grid;
        this.canvas = canvas;
        this.strokes = [];
        this.strokeInProgress = null;
        this.lineWidth = 3;
        this.lineColor = '#2c2c2c'; // デフォルト：黒
        this.eraserWidth = 15;
        this.undoStack = []; // Undo用スタック（strokes のスナップショット）
    }

    // 現在のstrokesをundoスタックに保存
    _snapshot() {
        this.undoStack.push(JSON.stringify(this.strokes));
        // スタックが深くなりすぎないよう50件で切る
        if (this.undoStack.length > 50) this.undoStack.shift();
    }

    // ペン色を変更
    setColor(color) {
        this.lineColor = color;
    }

    // 自由描画開始
    startStroke(x, y) {
        const rect = this.canvas.getBoundingClientRect();
        this.strokeInProgress = {
            points: [{ x: x - rect.left, y: y - rect.top }],
            color: this.lineColor,
            width: this.lineWidth
        };
    }

    // 自由描画に点を追加
    addPointToStroke(x, y) {
        if (!this.strokeInProgress) return;
        const rect = this.canvas.getBoundingClientRect();
        this.strokeInProgress.points.push({ x: x - rect.left, y: y - rect.top });
    }

    // 自由描画終了
    endStroke() {
        if (!this.strokeInProgress || this.strokeInProgress.points.length < 2) {
            this.strokeInProgress = null;
            return;
        }
        this._snapshot();
        this.strokes.push(this.strokeInProgress);
        this.strokeInProgress = null;
    }

    // Undo：直前のストロークを取り消す
    undo() {
        if (this.undoStack.length === 0) return false;
        this.strokes = JSON.parse(this.undoStack.pop());
        return true;
    }

    // 全消去（リセット用）
    clear() {
        this._snapshot();
        this.strokes = [];
        this.strokeInProgress = null;
    }

    // 消しゴム：触れた線全体を削除
    erase(x, y, radius = this.eraserWidth) {
        const rect = this.canvas.getBoundingClientRect();
        const cx = x - rect.left;
        const cy = y - rect.top;
        const before = this.strokes.length;
        this.strokes = this.strokes.filter(stroke => {
            for (const p of stroke.points) {
                if (Math.hypot(p.x - cx, p.y - cy) <= radius) return false;
            }
            return true;
        });
        if (this.strokes.length !== before) this._snapshot();
    }

    // 全描画
    draw(ctx) {
        for (const stroke of this.strokes) {
            this._drawStroke(ctx, stroke);
        }
        if (this.strokeInProgress) {
            this._drawStroke(ctx, this.strokeInProgress);
        }
    }

    _drawStroke(ctx, stroke) {
        if (stroke.points.length < 2) return;
        ctx.strokeStyle = stroke.color;
        ctx.lineWidth = stroke.width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
        for (let i = 1; i < stroke.points.length; i++) {
            ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
        }
        ctx.stroke();
    }
}
