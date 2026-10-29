// grid.js - グリッド管理
class Grid {
    constructor(canvas, cellSize = 40) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.cellSize = cellSize;
        this.rows = 15;
        this.cols = 15;
        this.width = this.cols * this.cellSize;
        this.height = this.rows * this.cellSize;

        // 背景画像関連
        this.bgImage = null;
        this.bgFit = 'cover'; // 'cover'（枠に合わせる） | 'none'（原寸のまま）
        this.showGridLines = true;

        // キャンバスサイズを設定
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    /**
     * 背景画像を設定
     */
    setBackgroundImage(img, fit = 'cover') {
        this.bgImage = img;
        this.bgFit = fit;
    }

    /**
     * 背景画像を解除（方眼紙に戻す）
     */
    clearBackgroundImage() {
        this.bgImage = null;
    }

    /**
     * グリッド線の表示切替
     */
    setShowGridLines(show) {
        this.showGridLines = show;
    }

    /**
     * 背景（画像 or 方眼紙の下地色）を描画
     */
    drawBackground() {
        const ctx = this.ctx;
        const cw = this.width, ch = this.height;

        ctx.fillStyle = '#fafaf8';
        ctx.fillRect(0, 0, cw, ch);

        if (!this.bgImage) return;

        const img = this.bgImage;
        if (this.bgFit === 'cover') {
            // キャンバス全体を覆うように拡大縮小（はみ出た部分はトリミング）
            const scale = Math.max(cw / img.width, ch / img.height);
            const dw = img.width * scale, dh = img.height * scale;
            const dx = (cw - dw) / 2, dy = (ch - dh) / 2;
            ctx.drawImage(img, dx, dy, dw, dh);
        } else {
            // 原寸のまま中央配置（キャンバスより大きい/小さい場合そのまま）
            const dx = (cw - img.width) / 2, dy = (ch - img.height) / 2;
            ctx.drawImage(img, dx, dy);
        }
    }

    /**
     * グリッド線を描画
     */
    draw() {
        const ctx = this.ctx;

        this.drawBackground();

        if (!this.showGridLines) return;

        // グリッド線（背景画像がある時は少し薄くして視認性を確保）
        ctx.strokeStyle = this.bgImage ? 'rgba(180,170,160,0.55)' : '#e5ddd5';
        ctx.lineWidth = 1;
        ctx.setLineDash([]);

        // 縦線
        for (let i = 0; i <= this.cols; i++) {
            const x = i * this.cellSize;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, this.height);
            ctx.stroke();
        }

        // 横線
        for (let i = 0; i <= this.rows; i++) {
            const y = i * this.cellSize;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(this.width, y);
            ctx.stroke();
        }
    }

    /**
     * 画面上の座標（clientX/clientY）を、キャンバス内の座標に変換する。
     * キャンバスは CSS で拡大縮小される（画面に収めるため）ので、表示サイズとの比率で換算する。
     */
    toCanvas(clientX, clientY) {
        const rect = this.canvas.getBoundingClientRect();
        const borderX = this.canvas.clientLeft || 0, borderY = this.canvas.clientTop || 0;
        const w = this.canvas.clientWidth || this.width;
        const h = this.canvas.clientHeight || this.height;
        return {
            x: (clientX - rect.left - borderX) * this.width / w,
            y: (clientY - rect.top - borderY) * this.height / h
        };
    }

    /** 表示倍率（画面上の1pxあたりキャンバスの何pxか、の逆数：1以下なら縮小表示） */
    get scale() {
        return (this.canvas.clientWidth || this.width) / this.width;
    }

    /**
     * グリッド内かチェック
     */
    isInsideGrid(x, y) {
        const p = this.toCanvas(x, y);
        return p.x >= 0 && p.x < this.width && p.y >= 0 && p.y < this.height;
    }
}
