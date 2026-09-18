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
     * マウス座標をグリッドセルに変換
     */
    getCellFromPixel(x, y) {
        const rect = this.canvas.getBoundingClientRect();
        const canvasX = x - rect.left;
        const canvasY = y - rect.top;

        const col = Math.floor(canvasX / this.cellSize);
        const row = Math.floor(canvasY / this.cellSize);

        // グリッド範囲内かチェック
        if (col < 0 || col >= this.cols || row < 0 || row >= this.rows) {
            return null;
        }

        return { row, col };
    }

    /**
     * グリッドセルをピクセル座標に変換（セル中央）
     */
    getPixelFromCell(row, col) {
        const x = col * this.cellSize + this.cellSize / 2;
        const y = row * this.cellSize + this.cellSize / 2;
        return { x, y };
    }

    /**
     * キャンバス内の実座標を取得
     */
    getCanvasCoordinates(e) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }

    /**
     * グリッド内かチェック
     */
    isInsideGrid(x, y) {
        const rect = this.canvas.getBoundingClientRect();
        const canvasX = x - rect.left;
        const canvasY = y - rect.top;

        return canvasX >= 0 && canvasX < this.width &&
               canvasY >= 0 && canvasY < this.height;
    }
}
