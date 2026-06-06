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
        
        // キャンバスサイズを設定
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    /**
     * グリッド線を描画
     */
    draw() {
        const ctx = this.ctx;
        
        // 背景色
        ctx.fillStyle = '#fafaf8';
        ctx.fillRect(0, 0, this.width, this.height);

        // グリッド線
        ctx.strokeStyle = '#e5ddd5';
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
