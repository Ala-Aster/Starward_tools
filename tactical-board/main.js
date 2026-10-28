// main.js
let canvas, grid, pieces, arrows;
let mode = 'freeDraw';
let selectedSpec = null; // { kind:'basic', type, shape } | { kind:'char', charKey }

// ---- テーマ（他ツールと共通のキー・3色） ----
const THEME_KEY = 'starward_theme';
const THEMES = ['dark', 'light', 'custom'];

function setTheme(name) {
    if (!THEMES.includes(name)) name = 'dark';
    if (name === 'dark') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', name);
    try { localStorage.setItem(THEME_KEY, name); } catch (e) {}
    document.querySelectorAll('.btn-theme').forEach(b => b.classList.toggle('active', b.dataset.theme === name));
}

function loadTheme() {
    let saved = 'dark';
    try { saved = localStorage.getItem(THEME_KEY) || 'dark'; } catch (e) {}
    setTheme(saved);
}

// ---- Undoスタック（描画＋コマを一緒に管理）----
const undoStack = [];
const MAX_UNDO = 50;

function saveSnapshot() {
    undoStack.push({
        strokes: arrows.getState(),
        pieces:  JSON.stringify(pieces.pieces)
    });
    if (undoStack.length > MAX_UNDO) undoStack.shift();
}

function doUndo() {
    if (undoStack.length === 0) { showStatus('これ以上戻せません'); return; }
    const snap = undoStack.pop();
    arrows.setState(snap.strokes);
    pieces.pieces = JSON.parse(snap.pieces);
    render();
    showStatus('元に戻しました');
}

// ---- 初期化 ----
function init() {
    canvas = document.getElementById('boardCanvas');
    grid   = new Grid(canvas, 60);
    pieces = new Pieces(grid);
    pieces.onImageLoad = render; // キャラ画像の読み込み完了で再描画
    arrows = new Arrows(grid, canvas);
    loadTheme();
    buildCharPalette();
    setupEventListeners();
    render();
}

function setupEventListeners() {
    document.getElementById('freeDrawBtn').addEventListener('click', () => setMode('freeDraw'));
    document.getElementById('eraserBtn').addEventListener('click',   () => setMode('eraser'));
    document.getElementById('moveBtn').addEventListener('click',     () => setMode('move'));

    document.querySelectorAll('.btn-color').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.btn-color').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            arrows.setColor(btn.dataset.color);
            if (mode !== 'freeDraw') setMode('freeDraw');
            showStatus('ペン色を変更しました');
        });
    });

    document.querySelectorAll('.btn-theme').forEach(btn => {
        btn.addEventListener('click', () => setTheme(btn.dataset.theme));
    });

    // 基本コマ
    document.querySelectorAll('.btn-piece-cell').forEach(btn => {
        btn.addEventListener('click', () => {
            onPaletteClick({ kind: 'basic', type: btn.dataset.type, shape: btn.dataset.shape }, btn);
        });
    });

    // アイコン種類の切り替え（プルダウン）
    document.getElementById('iconCategory').addEventListener('change', (e) => {
        document.getElementById('basicPieces').style.display = e.target.value === 'basic' ? '' : 'none';
        document.getElementById('charPalette').style.display = e.target.value === 'char' ? '' : 'none';
    });

    document.getElementById('undoBtn').addEventListener('click', doUndo);
    document.getElementById('resetBtn').addEventListener('click', () => {
        if (!confirm('ボードをすべてリセットしますか？')) return;
        saveSnapshot();
        arrows.clear();
        pieces.clear();
        render();
        showStatus('リセットしました');
    });
    document.getElementById('saveImgBtn').addEventListener('click', saveImage);

    // ---- 背景画像 ----
    document.getElementById('bgImageInput').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            const img = new Image();
            img.onload = () => {
                const fit = document.getElementById('bgFitSelect').value;
                grid.setBackgroundImage(img, fit);
                render();
                showStatus('背景画像を設定しました', 'success');
            };
            img.onerror = () => showStatus('画像を読み込めませんでした', 'danger');
            img.src = ev.target.result;
        };
        reader.readAsDataURL(file);
        e.target.value = ''; // 同じファイルを選び直せるようにリセット
    });

    document.getElementById('bgFitSelect').addEventListener('change', (e) => {
        if (grid.bgImage) {
            grid.bgFit = e.target.value;
            render();
        }
    });

    document.getElementById('bgClearBtn').addEventListener('click', () => {
        grid.clearBackgroundImage();
        render();
        showStatus('背景を方眼紙に戻しました');
    });

    document.getElementById('gridLineToggle').addEventListener('change', (e) => {
        grid.setShowGridLines(e.target.checked);
        render();
    });

    canvas.addEventListener('mousedown',   onMouseDown);
    canvas.addEventListener('mousemove',   onMouseMove);
    canvas.addEventListener('mouseup',     onMouseUp);
    canvas.addEventListener('mouseleave',  onMouseLeave);
    canvas.addEventListener('contextmenu', onContextMenu);

    document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'z') { e.preventDefault(); doUndo(); }
    });
}

// ---- モード・コマ選択 ----
function isSameSpec(a, b) {
    if (!a || !b || a.kind !== b.kind) return false;
    return a.kind === 'char' ? a.charKey === b.charKey : (a.type === b.type && a.shape === b.shape);
}

// パレットのアイコンをクリック：同じものをもう一度押すと選択解除（描画モードへ）
function onPaletteClick(spec, btn) {
    if (isSameSpec(selectedSpec, spec)) {
        clearPieceSelection();
        setMode('freeDraw');
        return;
    }
    selectPiece(spec, btn);
}

function selectPiece(spec, btn) {
    clearPieceSelection();
    selectedSpec = spec;
    mode = 'piece';
    document.querySelectorAll('.btn-mode').forEach(b => b.classList.remove('active'));
    btn.classList.add('active-piece');
    canvas.style.cursor = 'cell';
    if (spec.kind === 'char') {
        const c = pieces.charMap[spec.charKey];
        showStatus(`${c ? c.name : 'キャラ'}を配置（右クリックで削除）`);
    } else {
        const shapeNames = { circle:'丸', square:'四角', triangle:'三角', star:'星' };
        showStatus(`${spec.type}・${shapeNames[spec.shape]}を配置（右クリックで削除）`);
    }
}

function clearPieceSelection() {
    selectedSpec = null;
    document.querySelectorAll('.btn-piece-cell, .btn-char-cell').forEach(b => b.classList.remove('active-piece'));
}

// キャラクターアイコンのパレットを characters.js から生成（コスト別）
function buildCharPalette() {
    const wrap = document.getElementById('charPalette');
    if (typeof CHARACTER_DATA === 'undefined') {
        wrap.textContent = 'characters.js を読み込めませんでした';
        return;
    }
    ['3.0', '2.5', '2.0', '1.5'].forEach(cost => {
        const list = CHARACTER_DATA.filter(c => c.cost === cost);
        if (list.length === 0) return;

        const title = document.createElement('div');
        title.className = 'char-group-title';
        title.textContent = `コスト ${cost}`;
        wrap.appendChild(title);

        const gridEl = document.createElement('div');
        gridEl.className = 'char-grid';
        list.forEach(c => {
            const btn = document.createElement('button');
            btn.className = 'btn-char-cell';
            btn.title = c.name;
            const img = document.createElement('img');
            img.src = `${IMAGE_BASE_URL}/${c.cost}/${c.id}.png`;
            img.alt = c.name;
            img.loading = 'lazy';
            img.onerror = () => { img.remove(); btn.textContent = c.name.slice(0, 2); };
            btn.appendChild(img);
            btn.addEventListener('click', () => {
                onPaletteClick({ kind: 'char', charKey: `${c.cost}_${c.id}` }, btn);
            });
            gridEl.appendChild(btn);
        });
        wrap.appendChild(gridEl);
    });
}

function setMode(newMode) {
    mode = newMode;
    if (newMode !== 'piece') clearPieceSelection();
    document.querySelectorAll('.btn-mode').forEach(b => b.classList.remove('active'));
    if (newMode === 'freeDraw') {
        document.getElementById('freeDrawBtn').classList.add('active');
        canvas.style.cursor = 'crosshair';
        showStatus('自由描画モード');
    } else if (newMode === 'eraser') {
        document.getElementById('eraserBtn').classList.add('active');
        canvas.style.cursor = 'cell';
        showStatus('消しゴム — 左：触れた部分だけ消す／右：線ごと消す（コマも消える）');
    } else if (newMode === 'move') {
        document.getElementById('moveBtn').classList.add('active');
        canvas.style.cursor = 'grab';
        showStatus('コマ移動モード — コマをドラッグして移動');
    }
}

// ---- キャンバスイベント ----
// button: 0=左（部分消し・線のみ） / 2=右（線ごと消し＋コマ削除）
function applyEraser(clientX, clientY, button) {
    if (button === 2) {
        arrows.erase(clientX, clientY);
        const piece = pieces.getPieceAtPixel(clientX, clientY);
        if (piece) pieces.removePiece(piece);
    } else {
        arrows.erasePartial(clientX, clientY);
    }
}

// 前回位置から今回位置まで補間しながら消す（素早く動かしても取りこぼさない）
let lastEraserPos = null;
function eraseAlongPath(clientX, clientY, button) {
    const from = lastEraserPos || { x: clientX, y: clientY };
    const dist = Math.hypot(clientX - from.x, clientY - from.y);
    const n = Math.max(1, Math.ceil(dist / (arrows.eraserWidth / 2)));
    for (let k = 1; k <= n; k++) {
        applyEraser(from.x + (clientX - from.x) * k / n, from.y + (clientY - from.y) * k / n, button);
    }
    lastEraserPos = { x: clientX, y: clientY };
}

function onMouseDown(e) {
    if (!grid.isInsideGrid(e.clientX, e.clientY)) return;
    // 消しゴム以外は左ボタンのみ（右クリックで線が引かれないように）
    if (mode !== 'eraser' && e.button !== 0) return;
    if (mode === 'freeDraw') {
        saveSnapshot();
        arrows.startStroke(e.clientX, e.clientY);
    } else if (mode === 'eraser') {
        if (e.button !== 0 && e.button !== 2) return;
        saveSnapshot();
        eraseAlongPath(e.clientX, e.clientY, e.button);
    } else if (mode === 'piece' && selectedSpec) {
        saveSnapshot();
        const rect = canvas.getBoundingClientRect();
        pieces.addPiece(e.clientX - rect.left, e.clientY - rect.top, selectedSpec);
    } else if (mode === 'move') {
        if (pieces.startDrag(e.clientX, e.clientY)) {
            saveSnapshot();
            canvas.style.cursor = 'grabbing';
        }
    }
    render();
}

function onMouseMove(e) {
    if (!grid.isInsideGrid(e.clientX, e.clientY)) return;
    if (mode === 'freeDraw' && arrows.strokeInProgress) {
        arrows.addPointToStroke(e.clientX, e.clientY); render();
    } else if (mode === 'eraser' && (e.buttons === 1 || e.buttons === 2)) {
        eraseAlongPath(e.clientX, e.clientY, e.buttons === 2 ? 2 : 0); render();
    } else if (mode === 'move' && pieces.draggedPiece) {
        pieces.dragPiece(e.clientX, e.clientY); render();
    }
}

function onMouseUp(e) {
    lastEraserPos = null;
    if (mode === 'freeDraw') arrows.endStroke();
    if (mode === 'move' && pieces.draggedPiece) { pieces.endDrag(); canvas.style.cursor = 'grab'; }
    render();
}

function onMouseLeave(e) {
    lastEraserPos = null;
    if (mode === 'freeDraw' && arrows.strokeInProgress) arrows.endStroke();
    if (pieces.draggedPiece) { pieces.endDrag(); canvas.style.cursor = 'grab'; }
    render();
}

function onContextMenu(e) {
    e.preventDefault();
    // 描画モード中は描画に集中（右クリックでコマを消さない）
    if (mode === 'freeDraw') return;
    const piece = pieces.getPieceAtPixel(e.clientX, e.clientY);
    if (piece) {
        saveSnapshot();
        pieces.removePiece(piece);
        showStatus('コマを削除しました');
        render();
    }
}

// ---- 画像保存 ----
function saveImage() {
    const tmp = document.createElement('canvas');
    tmp.width = canvas.width; tmp.height = canvas.height;
    const ctx = tmp.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, tmp.width, tmp.height);
    ctx.drawImage(canvas, 0, 0);
    const a = document.createElement('a');
    a.href = tmp.toDataURL('image/png');
    a.download = 'tactical-board.png';
    a.click();
    showStatus('画像を保存しました', 'success');
}

// ---- ステータス ----
let _st = null;
function showStatus(msg, type = 'info') {
    const el = document.getElementById('statusMsg');
    el.textContent = msg;
    el.className = 'status-msg ' + type;
    clearTimeout(_st);
    _st = setTimeout(() => { el.textContent = ''; el.className = 'status-msg'; }, 2500);
}

// ---- 描画 ----
function render() {
    const ctx = grid.ctx;
    grid.draw();
    arrows.draw(ctx);
    pieces.draw(ctx);
}

document.addEventListener('DOMContentLoaded', init);
