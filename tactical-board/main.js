// main.js - メインアプリケーションロジック
let canvas, grid, pieces, arrows;
let mode = 'freeDraw';
let selectedPieceType = null;

function init() {
    canvas = document.getElementById('boardCanvas');
    grid   = new Grid(canvas, 60);
    pieces = new Pieces(grid);
    arrows = new Arrows(grid, canvas);

    setupEventListeners();
    render();
}

function setupEventListeners() {
    // モードボタン
    document.getElementById('freeDrawBtn').addEventListener('click', () => setMode('freeDraw'));
    document.getElementById('eraserBtn').addEventListener('click',   () => setMode('eraser'));

    // 色ボタン
    document.querySelectorAll('.btn-color').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.btn-color').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            arrows.setColor(btn.dataset.color);
            if (mode !== 'freeDraw') setMode('freeDraw');
            showStatus('ペン色を変更しました');
        });
    });

    // コマボタン
    document.getElementById('pieceA').addEventListener('click', () => setPieceType('A'));
    document.getElementById('pieceB').addEventListener('click', () => setPieceType('B'));
    document.getElementById('pieceC').addEventListener('click', () => setPieceType('C'));
    document.getElementById('pieceD').addEventListener('click', () => setPieceType('D'));

    // Undo ボタン
    document.getElementById('undoBtn').addEventListener('click', doUndo);

    // リセットボタン
    document.getElementById('resetBtn').addEventListener('click', () => {
        if (!confirm('ボードをすべてリセットしますか？')) return;
        arrows.clear();
        pieces.clear();
        render();
        showStatus('リセットしました');
    });

    // 画像保存ボタン
    document.getElementById('saveImgBtn').addEventListener('click', saveImage);

    // キャンバスイベント
    canvas.addEventListener('mousedown',   onCanvasMouseDown);
    canvas.addEventListener('mousemove',   onCanvasMouseMove);
    canvas.addEventListener('mouseup',     onCanvasMouseUp);
    canvas.addEventListener('mouseleave',  onCanvasMouseLeave);
    canvas.addEventListener('contextmenu', onCanvasContextMenu);

    // Ctrl+Z / Cmd+Z
    document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
            e.preventDefault();
            doUndo();
        }
    });
}

function doUndo() {
    if (arrows.undo()) {
        render();
        showStatus('元に戻しました');
    } else {
        showStatus('これ以上戻せません');
    }
}

function setMode(newMode) {
    mode = newMode;
    selectedPieceType = null;
    document.querySelectorAll('.btn-mode').forEach(btn => btn.classList.remove('active'));
    if (newMode === 'freeDraw') {
        document.getElementById('freeDrawBtn').classList.add('active');
        canvas.style.cursor = 'crosshair';
        showStatus('自由描画モード');
    } else if (newMode === 'eraser') {
        document.getElementById('eraserBtn').classList.add('active');
        canvas.style.cursor = 'cell';
        showStatus('消しゴムモード');
    }
}

function setPieceType(type) {
    if (selectedPieceType === type) {
        selectedPieceType = null;
        setMode('freeDraw');
        return;
    }
    selectedPieceType = type;
    mode = 'piece';
    document.querySelectorAll('.btn-mode').forEach(btn => btn.classList.remove('active'));
    canvas.style.cursor = 'cell';
    showStatus(`コマ「${type}」を配置します（クリックで配置、右クリックで削除）`);
}

// 消しゴムモード時の共通処理：線の消去＋コマの削除
function applyEraser(clientX, clientY) {
    arrows.erase(clientX, clientY);
    const piece = pieces.getPieceAtPixel(clientX, clientY);
    if (piece) pieces.removePiece(piece);
}

function onCanvasMouseDown(e) {
    if (!grid.isInsideGrid(e.clientX, e.clientY)) return;
    if (mode === 'freeDraw') {
        arrows.startStroke(e.clientX, e.clientY);
    } else if (mode === 'eraser') {
        applyEraser(e.clientX, e.clientY);
    } else if (mode === 'piece' && selectedPieceType) {
        const rect = canvas.getBoundingClientRect();
        pieces.addPiece(e.clientX - rect.left, e.clientY - rect.top, selectedPieceType);
    } else {
        pieces.startDrag(e.clientX, e.clientY);
    }
    render();
}

function onCanvasMouseMove(e) {
    if (!grid.isInsideGrid(e.clientX, e.clientY)) return;
    if (mode === 'freeDraw' && arrows.strokeInProgress) {
        arrows.addPointToStroke(e.clientX, e.clientY);
        render();
    } else if (mode === 'eraser' && e.buttons === 1) {
        applyEraser(e.clientX, e.clientY);
        render();
    } else if (pieces.draggedPiece) {
        pieces.dragPiece(e.clientX, e.clientY);
        render();
    }
}

function onCanvasMouseUp(e) {
    if (mode === 'freeDraw') arrows.endStroke();
    else if (pieces.draggedPiece) pieces.endDrag();
    render();
}

function onCanvasMouseLeave(e) {
    if (mode === 'freeDraw' && arrows.strokeInProgress) arrows.endStroke();
    if (pieces.draggedPiece) pieces.endDrag();
    render();
}

// 右クリック：通常モードでもコマ削除できるよう残す
function onCanvasContextMenu(e) {
    e.preventDefault();
    const piece = pieces.getPieceAtPixel(e.clientX, e.clientY);
    if (piece) {
        pieces.removePiece(piece);
        showStatus('コマを削除しました');
        render();
    }
}

// ---- 画像保存 ----
function saveImage() {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width  = canvas.width;
    tempCanvas.height = canvas.height;
    const ctx = tempCanvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctx.drawImage(canvas, 0, 0);
    const a = document.createElement('a');
    a.href     = tempCanvas.toDataURL('image/png');
    a.download = 'tactical-board.png';
    a.click();
    showStatus('画像を保存しました', 'success');
}

// ---- ステータス表示 ----
let _statusTimer = null;
function showStatus(message, type = 'info') {
    const el = document.getElementById('statusMsg');
    el.textContent = message;
    el.className = 'status-msg ' + type;
    clearTimeout(_statusTimer);
    _statusTimer = setTimeout(() => {
        el.textContent = '';
        el.className = 'status-msg';
    }, 2500);
}

// ---- 描画 ----
function render() {
    const ctx = canvas.getContext('2d');
    grid.draw();
    arrows.draw(ctx);
    pieces.draw(ctx);
}

document.addEventListener('DOMContentLoaded', init);