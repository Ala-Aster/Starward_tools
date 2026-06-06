// main.js - メインアプリケーションロジック
let canvas;
let grid;
let pieces;
let arrows;

let mode = 'freeDraw'; // 'freeDraw', 'arrow', 'eraser'
let selectedPieceType = null;

/**
 * アプリケーション初期化
 */
function init() {
    canvas = document.getElementById('boardCanvas');
    grid = new Grid(canvas, 60);
    pieces = new Pieces(grid);
    arrows = new Arrows(grid, canvas);

    // イベントリスナー登録
    setupEventListeners();

    // 最初の描画
    render();
}

/**
 * イベントリスナーの登録
 */
function setupEventListeners() {
    // モードボタン
    document.getElementById('freeDrawBtn').addEventListener('click', () => setMode('freeDraw'));
    document.getElementById('eraserBtn').addEventListener('click', () => setMode('eraser'));

    // コマボタン
    document.getElementById('pieceA').addEventListener('click', () => setPieceType('A'));
    document.getElementById('pieceB').addEventListener('click', () => setPieceType('B'));
    document.getElementById('pieceC').addEventListener('click', () => setPieceType('C'));
    document.getElementById('pieceD').addEventListener('click', () => setPieceType('D'));

    // キャンバスイベント
    canvas.addEventListener('mousedown', onCanvasMouseDown);
    canvas.addEventListener('mousemove', onCanvasMouseMove);
    canvas.addEventListener('mouseup', onCanvasMouseUp);
    canvas.addEventListener('mouseleave', onCanvasMouseLeave);
    canvas.addEventListener('contextmenu', onCanvasContextMenu);
}

/**
 * モード変更
 */
function setMode(newMode) {
    mode = newMode;
    selectedPieceType = null;

    // ボタンのアクティブ状態を更新
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

/**
 * コマタイプ選択
 */
function setPieceType(type) {
    if (selectedPieceType === type) {
        selectedPieceType = null;
        showStatus('コマ配置モードをキャンセル');
    } else {
        selectedPieceType = type;
        mode = 'piece';
        document.querySelectorAll('.btn-mode').forEach(btn => btn.classList.remove('active'));
        canvas.style.cursor = 'cell';
        showStatus(`コマ「${type}」を配置します（グリッドをクリック）`);
    }
}

/**
 * キャンバスマウスダウン
 */
function onCanvasMouseDown(e) {
    if (!grid.isInsideGrid(e.clientX, e.clientY)) return;

    if (mode === 'freeDraw') {
        arrows.startStroke(e.clientX, e.clientY);
    } else if (mode === 'eraser') {
        arrows.erase(e.clientX, e.clientY);
    } else if (mode === 'piece') {
        if (selectedPieceType) {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            pieces.addPiece(x, y, selectedPieceType);
        }
    } else {
        // コマをドラッグ開始
        if (pieces.startDrag(e.clientX, e.clientY)) {
            // ドラッグ中
        }
    }

    render();
}

/**
 * キャンバスマウスムーブ
 */
function onCanvasMouseMove(e) {
    if (!grid.isInsideGrid(e.clientX, e.clientY)) return;

    if (mode === 'freeDraw' && arrows.strokeInProgress) {
        arrows.addPointToStroke(e.clientX, e.clientY);
        render();
    } else if (mode === 'eraser') {
        // 消しゴムは描画のみ必要（onCanvasMouseDownで処理）
        render();
    } else if (pieces.draggedPiece) {
        pieces.dragPiece(e.clientX, e.clientY);
        render();
    }
}

/**
 * キャンバスマウスアップ
 */
function onCanvasMouseUp(e) {
    if (mode === 'freeDraw') {
        arrows.endStroke();
    } else if (pieces.draggedPiece) {
        pieces.endDrag();
    }

    render();
}

/**
 * キャンバスマウスリーブ
 */
function onCanvasMouseLeave(e) {
    if (mode === 'freeDraw' && arrows.strokeInProgress) {
        arrows.endStroke();
    }

    if (pieces.draggedPiece) {
        pieces.endDrag();
    }

    render();
}

/**
 * キャンバス右クリック（コマ削除）
 */
function onCanvasContextMenu(e) {
    e.preventDefault();

    const piece = pieces.getPieceAtPixel(e.clientX, e.clientY);
    if (piece) {
        pieces.removePiece(piece);
        showStatus('コマを削除しました', 'info');
        render();
    }
}

/**
 * ステータスメッセージを表示
 */
function showStatus(message, type = 'info') {
    const statusEl = document.getElementById('statusMsg');
    statusEl.textContent = message;
    statusEl.className = 'status-msg';
    if (type === 'success') {
        statusEl.classList.add('success');
    } else if (type === 'info') {
        statusEl.classList.add('info');
    }

    // 3秒後にメッセージを消す
    setTimeout(() => {
        if (statusEl.textContent === message) {
            statusEl.textContent = '';
            statusEl.className = 'status-msg';
        }
    }, 3000);
}

/**
 * 画面を再描画
 */
function render() {
    const ctx = canvas.getContext('2d');

    // グリッドを描画
    grid.draw();

    // 矢印を描画
    arrows.draw(ctx);

    // コマを描画
    pieces.draw(ctx);
}

/**
 * アプリケーション開始
 */
document.addEventListener('DOMContentLoaded', init);
