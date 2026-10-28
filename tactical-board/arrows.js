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

    // 右クリック用：消しゴムが触れた線を丸ごと消す
    erase(x, y, radius = this.eraserWidth) {
        const rect = this.canvas.getBoundingClientRect();
        const cx = x - rect.left, cy = y - rect.top;
        this.strokes = this.strokes.filter(stroke => !this._hitsStroke(stroke, cx, cy, radius));
    }

    // 左クリック用：消しゴムが触れた部分だけを消す（線は途中で分割される）
    erasePartial(x, y, radius = this.eraserWidth) {
        const rect = this.canvas.getBoundingClientRect();
        const cx = x - rect.left, cy = y - rect.top;
        const result = [];

        for (const stroke of this.strokes) {
            if (!this._hitsStroke(stroke, cx, cy, radius)) {
                result.push(stroke);
                continue;
            }
            // 点の間隔が粗いと切れ目が広がるので、細かく補間してから分割する
            let seg = [];
            const flush = () => {
                if (seg.length >= 2) result.push({ color: stroke.color, width: stroke.width, points: seg });
                seg = [];
            };
            for (const p of this._densify(stroke.points)) {
                if (Math.hypot(p.x - cx, p.y - cy) <= radius) flush();
                else seg.push(p);
            }
            flush();
        }
        this.strokes = result;
    }

    // 点(px,py)と線分a-bの最短距離
    _distToSegment(px, py, a, b) {
        const dx = b.x - a.x, dy = b.y - a.y;
        const len2 = dx * dx + dy * dy;
        if (len2 === 0) return Math.hypot(px - a.x, py - a.y);
        const t = Math.max(0, Math.min(1, ((px - a.x) * dx + (py - a.y) * dy) / len2));
        return Math.hypot(px - (a.x + t * dx), py - (a.y + t * dy));
    }

    // 線のどこかが消しゴムの範囲に入っているか（点ではなく線分で判定）
    _hitsStroke(stroke, cx, cy, radius) {
        const pts = stroke.points;
        if (pts.length === 1) return Math.hypot(pts[0].x - cx, pts[0].y - cy) <= radius;
        for (let i = 1; i < pts.length; i++) {
            if (this._distToSegment(cx, cy, pts[i - 1], pts[i]) <= radius) return true;
        }
        return false;
    }

    // 点の間隔が step px 以下になるように補間
    _densify(points, step = 2) {
        const out = [points[0]];
        for (let i = 1; i < points.length; i++) {
            const a = points[i - 1], b = points[i];
            const n = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.y - a.y) / step));
            for (let k = 1; k <= n; k++) {
                out.push({ x: a.x + (b.x - a.x) * k / n, y: a.y + (b.y - a.y) * k / n });
            }
        }
        return out;
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

    // 状態をJSON文字列で返す
    getState() { return JSON.stringify(this.strokes); }

    // 状態を復元
    setState(state) { this.strokes = JSON.parse(state); }
}
