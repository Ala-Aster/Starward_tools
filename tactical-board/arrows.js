// arrows.js - 自由描画管理
class Arrows {
    constructor(grid, canvas) {
        this.grid = grid;
        this.canvas = canvas;
        this.strokes = []; // 自由描画のストローク（各要素は {points: [], color, width}）
        this.strokeInProgress = null; // 描画中のストローク
        this.lineWidth = 3;
        this.lineColor = '#7f8c8d';
        this.eraserWidth = 15;
    }

    /**
     * 自由描画開始
     */
    startStroke(x, y) {
        const rect = this.canvas.getBoundingClientRect();
        const canvasX = x - rect.left;
        const canvasY = y - rect.top;
        this.strokeInProgress = {
            points: [{ x: canvasX, y: canvasY }],
            color: this.lineColor,
            width: this.lineWidth
        };
    }

    /**
     * 自由描画に点を追加
     */
    addPointToStroke(x, y) {
        if (!this.strokeInProgress) return;

        const rect = this.canvas.getBoundingClientRect();
        const canvasX = x - rect.left;
        const canvasY = y - rect.top;
        this.strokeInProgress.points.push({ x: canvasX, y: canvasY });
    }

    /**
     * 自由描画終了
     */
    endStroke() {
        if (!this.strokeInProgress || this.strokeInProgress.points.length < 2) {
            this.strokeInProgress = null;
            return;
        }

        this.strokes.push(this.strokeInProgress);
        this.strokeInProgress = null;
    }

    /**
     * 矢印の始点をキャンセル（互換性のため、実質的には何もしない）
     */
    cancelArrow() {
        // 直線矢印モードは削除されたため、このメソッドは不要
    }

    /**
     * すべての描画を消去
     */
    clear() {
        this.strokes = [];
        this.strokeInProgress = null;
    }

    /**
     * 最後の描画をUndoで削除
     */
    undo() {
        if (this.strokes.length > 0) {
            this.strokes.pop();
            return true;
        }
        return false;
    }

    /**
     * 指定領域を消しゴムで削除（線全体が消える）
     */
    erase(x, y, radius = this.eraserWidth) {
        const rect = this.canvas.getBoundingClientRect();
        const canvasX = x - rect.left;
        const canvasY = y - rect.top;

        // ストロークから消しゴム範囲内の線全体を削除
        this.strokes = this.strokes.filter(stroke => {
            for (const point of stroke.points) {
                const dist = Math.sqrt(
                    Math.pow(point.x - canvasX, 2) +
                    Math.pow(point.y - canvasY, 2)
                );
                if (dist <= radius) {
                    // この線に触れたので全体を削除する
                    return false;
                }
            }
            return true;
        });
    }

    /**
     * すべての描画を描画する
     */
    draw(ctx) {
        // ストロークを描画
        for (const stroke of this.strokes) {
            this.drawStroke(ctx, stroke);
        }

        // 描画中のストロークを描画
        if (this.strokeInProgress) {
            this.drawStroke(ctx, this.strokeInProgress);
        }
    }

    /**
     * ストロークを描画
     */
    drawStroke(ctx, stroke) {
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

    /**
     * 描画をJSON形式で取得
     */
    toJSON() {
        return JSON.stringify(this.strokes);
    }

    /**
     * JSONから復元
     */
    fromJSON(json) {
        try {
            this.strokes = JSON.parse(json);
        } catch (e) {
            console.error('Failed to parse strokes JSON:', e);
            this.strokes = [];
        }
    }
}
