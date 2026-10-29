// main.js
let canvas, grid, pieces, arrows;
let mode = 'freeDraw';
let selectedSpec = null; // { kind:'basic', type, shape } | { kind:'char', charKey } | { kind:'action', actionType }
let selectedBtn = null;  // 選択中のパレットボタン（ショートカットから戻すときに使う）

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
    initPenUI();
    buildCharPalette();
    buildActionPalette();
    setupEventListeners();
    render();
}

function setupEventListeners() {
    document.getElementById('freeDrawBtn').addEventListener('click', () => setMode('freeDraw'));
    document.getElementById('eraserBtn').addEventListener('click',   () => setMode('eraser'));
    document.getElementById('moveBtn').addEventListener('click',     () => setMode('move'));

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
        document.getElementById('actionPalette').style.display = e.target.value === 'action' ? '' : 'none';
        e.target.blur();
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

    setupShortcuts();
    setupBoardFit();
}

// ---- ホイール1回でボードを画面に収める ----
// ボードは画面の高さに収まる大きさで表示される（CSS）。
// ページの先頭付近でホイールを回すと、ボードが画面にちょうど収まる位置までスクロールし、
// 逆向きに回すと先頭に戻る。ボードより下では通常のスクロール。
function setupBoardFit() {
    const panel = document.querySelector('.control-panel');
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let busyUntil = 0;

    // ボードがある段の先頭位置（ボードは固定表示になるので、動かないコントロールパネルを基準にする）
    const fitTop = () => Math.max(0, panel.getBoundingClientRect().top + window.scrollY - 10);

    window.addEventListener('wheel', (e) => {
        if (e.ctrlKey || window.innerWidth <= 900) return; // ズーム操作・1列レイアウトでは何もしない
        // 一覧など、内側でスクロールできる場所ではそちらを優先
        const scroller = e.target.closest && e.target.closest('.char-palette, .help-panel');
        if (scroller && scroller.scrollHeight > scroller.clientHeight + 1) return;

        const target = fitTop();
        if (target <= 0) return;
        const now = performance.now();
        if (now < busyUntil) { e.preventDefault(); return; } // アニメーション中は連続入力を無視
        const y = window.scrollY;

        let to = null;
        if (e.deltaY > 0 && y < target - 2) to = target;
        else if (e.deltaY < 0 && y > 0 && y <= target + 2) to = 0;
        if (to === null) return;

        e.preventDefault();
        busyUntil = now + 450;
        window.scrollTo({ top: to, behavior: reduceMotion ? 'auto' : 'smooth' });
    }, { passive: false });
}

// ---- ペンの色（左右2色＋カラーホイール＋パレット。次回も復元） ----
const PEN_KEY = 'tacticalBoard_penColors';
const PEN_DEFAULT = { primary: '#000000', secondary: '#e74c3c' };
const PEN_SWATCHES = [
    '#000000', '#404040', '#7f7f7f', '#c3c3c3', '#ffffff', '#b97a57',
    '#880015', '#ed1c24', '#ff7f27', '#ffc90e', '#fff200', '#b5e61d',
    '#22b14c', '#00a2e8', '#3f48cc', '#a349a4', '#ffaec9', '#99d9ea',
    '#c8bfe7', '#efe4b0', '#00e676', '#ff4081', '#7c4dff', '#8d6e63'
];
const WHEEL_SIZE = 150;
let penColors = { ...PEN_DEFAULT };
let penActive = 'primary';          // 編集中の枠（primary=左 / secondary=右）
let penHsv = { h: 0, s: 0, v: 0 };  // 編集中の枠の色（ホイール・明るさ用）

function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
}
function rgbToHsv(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
    let h = 0;
    if (d) {
        if (max === r) h = ((g - b) / d) % 6;
        else if (max === g) h = (b - r) / d + 2;
        else h = (r - g) / d + 4;
        h *= 60;
        if (h < 0) h += 360;
    }
    return { h, s: max ? d / max : 0, v: max };
}
function hsvToRgb(h, s, v) {
    const c = v * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = v - c;
    let r = 0, g = 0, b = 0;
    if (h < 60) { r = c; g = x; }
    else if (h < 120) { r = x; g = c; }
    else if (h < 180) { g = c; b = x; }
    else if (h < 240) { g = x; b = c; }
    else if (h < 300) { r = x; b = c; }
    else { r = c; b = x; }
    return { r: (r + m) * 255, g: (g + m) * 255, b: (b + m) * 255 };
}
// "#abc" / "aabbcc" / "#AABBCC" → "#aabbcc"（不正なら null）
function normalizeHex(str) {
    let s = String(str).trim().replace(/^#/, '');
    if (/^[0-9a-fA-F]{3}$/.test(s)) s = s.split('').map(ch => ch + ch).join('');
    return /^[0-9a-fA-F]{6}$/.test(s) ? '#' + s.toLowerCase() : null;
}

function loadPenColors() {
    try {
        const saved = JSON.parse(localStorage.getItem(PEN_KEY) || 'null');
        if (saved) {
            const p = normalizeHex(saved.primary), s = normalizeHex(saved.secondary);
            if (p) penColors.primary = p;
            if (s) penColors.secondary = s;
        }
    } catch (e) { /* 保存データが壊れていたら初期色のまま */ }
}
function savePenColors() {
    try { localStorage.setItem(PEN_KEY, JSON.stringify(penColors)); } catch (e) {}
}

// 編集中の枠の色から、ホイール用のHSVを更新（無彩色などで色相が飛ばないよう前の値を引き継ぐ）
function syncHsvFromActive() {
    const { r, g, b } = hexToRgb(penColors[penActive]);
    const hsv = rgbToHsv(r, g, b);
    if (hsv.s === 0 || hsv.v === 0) hsv.h = penHsv.h;
    if (hsv.v === 0) hsv.s = penHsv.s;
    penHsv = hsv;
}

function ensureDrawMode() {
    if (mode !== 'freeDraw') setMode('freeDraw');
}

// slot の色を変更（fromHsv: ホイール／明るさ操作由来のときは HSV を作り直さない）
function setPenColor(slot, hex, fromHsv = false) {
    penColors[slot] = hex;
    if (slot === penActive && !fromHsv) syncHsvFromActive();
    savePenColors();
    renderPenUI();
    ensureDrawMode();
}

function drawWheel() {
    const cv = document.getElementById('penWheel');
    const ctx = cv.getContext('2d');
    const size = WHEEL_SIZE, c = size / 2, R = c - 1;
    const img = ctx.createImageData(size, size);
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const dx = x + 0.5 - c, dy = y + 0.5 - c;
            const r = Math.hypot(dx, dy);
            const i = (y * size + x) * 4;
            if (r > R) continue; // 円の外は透明
            const h = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360;
            const rgb = hsvToRgb(h, r / R, 1); // ホイールは常に最大の明るさで表示
            img.data[i] = rgb.r; img.data[i + 1] = rgb.g; img.data[i + 2] = rgb.b; img.data[i + 3] = 255;
        }
    }
    ctx.putImageData(img, 0, 0);
    // 現在位置のマーカー
    const ang = penHsv.h * Math.PI / 180;
    const mx = c + Math.cos(ang) * penHsv.s * R, my = c + Math.sin(ang) * penHsv.s * R;
    ctx.beginPath(); ctx.arc(mx, my, 5, 0, Math.PI * 2);
    ctx.lineWidth = 3; ctx.strokeStyle = '#000'; ctx.stroke();
    ctx.lineWidth = 1.5; ctx.strokeStyle = '#fff'; ctx.stroke();
}

function renderPenUI() {
    document.getElementById('penPrimary').style.background = penColors.primary;
    document.getElementById('penSecondary').style.background = penColors.secondary;
    document.getElementById('penPrimary').classList.toggle('active', penActive === 'primary');
    document.getElementById('penSecondary').classList.toggle('active', penActive === 'secondary');
    document.getElementById('penValue').value = Math.round(penHsv.v * 100);
    const hex = document.getElementById('penHex');
    if (document.activeElement !== hex) hex.value = penColors[penActive];
    drawWheel();
}

function pickFromWheel(clientX, clientY) {
    const cv = document.getElementById('penWheel');
    const rect = cv.getBoundingClientRect();
    const c = WHEEL_SIZE / 2, R = c - 1;
    const dx = clientX - rect.left - c, dy = clientY - rect.top - c;
    penHsv.h = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360;
    penHsv.s = Math.min(Math.hypot(dx, dy), R) / R;
    if (penHsv.v < 0.05) penHsv.v = 1; // 真っ黒のままだとホイールを触っても黒になるため
    const rgb = hsvToRgb(penHsv.h, penHsv.s, penHsv.v);
    setPenColor(penActive, rgbToHex(rgb.r, rgb.g, rgb.b), true);
}

function initPenUI() {
    loadPenColors();
    syncHsvFromActive();

    // パレット：左クリック＝左の色／右クリック＝右の色
    const sw = document.getElementById('penSwatches');
    PEN_SWATCHES.forEach(hex => {
        const b = document.createElement('button');
        b.className = 'pen-swatch';
        b.style.background = hex;
        b.title = hex;
        b.addEventListener('click', () => setPenColor('primary', hex));
        b.addEventListener('contextmenu', (e) => { e.preventDefault(); setPenColor('secondary', hex); });
        sw.appendChild(b);
    });

    // 左右の枠：クリックで編集対象を切り替え
    ['primary', 'secondary'].forEach(slot => {
        document.getElementById(slot === 'primary' ? 'penPrimary' : 'penSecondary').addEventListener('click', () => {
            penActive = slot;
            syncHsvFromActive();
            renderPenUI();
            ensureDrawMode();
        });
    });

    document.getElementById('penSwap').addEventListener('click', () => {
        [penColors.primary, penColors.secondary] = [penColors.secondary, penColors.primary];
        syncHsvFromActive();
        savePenColors();
        renderPenUI();
        ensureDrawMode();
    });
    document.getElementById('penReset').addEventListener('click', () => {
        penColors = { ...PEN_DEFAULT };
        syncHsvFromActive();
        savePenColors();
        renderPenUI();
        ensureDrawMode();
    });

    // 拡張（ホイール・明るさ・色コード）の開閉
    const adv = document.getElementById('penAdvanced');
    const expandBtn = document.getElementById('penExpand');
    expandBtn.addEventListener('click', () => {
        const open = adv.style.display === 'none';
        adv.style.display = open ? '' : 'none';
        expandBtn.innerHTML = open ? '&lt;&lt; 閉じる' : '拡張 &gt;&gt;';
    });

    // カラーホイール（ドラッグで選択）
    const wheel = document.getElementById('penWheel');
    let wheelDragging = false;
    wheel.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        wheelDragging = true;
        e.preventDefault();
        pickFromWheel(e.clientX, e.clientY);
    });
    window.addEventListener('mousemove', (e) => { if (wheelDragging) pickFromWheel(e.clientX, e.clientY); });
    window.addEventListener('mouseup', () => { wheelDragging = false; });

    // 明るさ
    document.getElementById('penValue').addEventListener('input', (e) => {
        penHsv.v = Number(e.target.value) / 100;
        const rgb = hsvToRgb(penHsv.h, penHsv.s, penHsv.v);
        setPenColor(penActive, rgbToHex(rgb.r, rgb.g, rgb.b), true);
    });

    // 色コード
    const hexInput = document.getElementById('penHex');
    hexInput.addEventListener('input', () => {
        const n = normalizeHex(hexInput.value);
        if (n) setPenColor(penActive, n);
    });
    hexInput.addEventListener('change', () => { hexInput.value = penColors[penActive]; });

    renderPenUI();
}

// ---- ショートカット（押している間だけモード切替） ----
// Q=自由描画 / E=消しゴム / W=コマ移動。離すと元のモードに戻る。
// e.code を使うので、日本語入力オンでもキー位置で反応する。
const SHORTCUT_MODES = { KeyQ: 'freeDraw', KeyE: 'eraser', KeyW: 'move' };
let heldKeys = [];        // 押されているショートカットキー（押した順）
let baseState = null;     // 押す前の状態 { mode, spec, btn }
let pointerDown = false;  // マウス操作中はモードを切り替えない
let pendingApply = false; // 操作中にキーを離した場合、マウスを離した時点で反映する

function applyHeldMode() {
    if (heldKeys.length > 0) {
        setMode(SHORTCUT_MODES[heldKeys[heldKeys.length - 1]]);
    } else if (baseState) {
        const b = baseState;
        baseState = null;
        if (b.mode === 'piece' && b.spec && b.btn) selectPiece(b.spec, b.btn);
        else setMode(b.mode);
    }
}

function setupShortcuts() {
    canvas.addEventListener('mousedown', () => { pointerDown = true; });
    window.addEventListener('mouseup', () => {
        pointerDown = false;
        if (pendingApply) { pendingApply = false; applyHeldMode(); }
    });

    document.addEventListener('keydown', e => {
        const target = SHORTCUT_MODES[e.code];
        if (!target || e.repeat || e.isComposing) return;
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        // 色コード欄など、文字を入力しているときは通常入力を優先
        if (e.target && e.target.matches && e.target.matches('input[type="text"], textarea')) return;
        e.preventDefault(); // プルダウンなどにキー入力を吸われないように
        if (pointerDown) return; // 描画・消去・ドラッグ中は切り替えない
        if (heldKeys.includes(e.code)) return;
        if (heldKeys.length === 0) baseState = { mode, spec: selectedSpec, btn: selectedBtn };
        heldKeys.push(e.code);
        applyHeldMode();
    });

    document.addEventListener('keyup', e => {
        if (!heldKeys.includes(e.code)) return;
        heldKeys = heldKeys.filter(k => k !== e.code);
        if (pointerDown) pendingApply = true;
        else applyHeldMode();
    });

    // ウィンドウを離れたときにキーが押しっぱなし扱いにならないようにする
    window.addEventListener('blur', () => {
        heldKeys = [];
        pointerDown = false;
        pendingApply = false;
        applyHeldMode();
    });
}

// ---- モード・コマ選択 ----
function isSameSpec(a, b) {
    if (!a || !b || a.kind !== b.kind) return false;
    if (a.kind === 'char') return a.charKey === b.charKey;
    if (a.kind === 'action') return a.actionType === b.actionType;
    return a.type === b.type && a.shape === b.shape;
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
    selectedBtn = btn;
    mode = 'piece';
    document.querySelectorAll('.btn-mode').forEach(b => b.classList.remove('active'));
    btn.classList.add('active-piece');
    canvas.style.cursor = 'cell';
    if (spec.kind === 'action') {
        showStatus(`${ActionIcons.names[spec.actionType]}を配置（コマの上なら重ねる／右クリックで外す）`);
    } else if (spec.kind === 'char') {
        const c = pieces.charMap[spec.charKey];
        showStatus(`${c ? c.name : 'キャラ'}を配置（右クリックで削除）`);
    } else {
        const shapeNames = { circle:'丸', square:'四角', triangle:'三角', star:'星' };
        showStatus(`${spec.type}・${shapeNames[spec.shape]}を配置（右クリックで削除）`);
    }
}

function clearPieceSelection() {
    selectedSpec = null;
    selectedBtn = null;
    document.querySelectorAll('.btn-piece-cell, .btn-char-cell, .btn-act-cell').forEach(b => b.classList.remove('active-piece'));
}

// 行動アイコンのパレットを生成（アイコンは actions.js のコード描画をそのまま使う）
function buildActionPalette() {
    const wrap = document.getElementById('actionPalette');
    ACTION_LIST.forEach(a => {
        const btn = document.createElement('button');
        btn.className = 'btn-act-cell';
        btn.title = a.name;
        const cv = document.createElement('canvas');
        cv.width = 80; cv.height = 80;
        ActionIcons.draw(cv.getContext('2d'), a.id, 40, 40, 1.4);
        const label = document.createElement('span');
        label.textContent = a.name;
        btn.appendChild(cv);
        btn.appendChild(label);
        btn.addEventListener('click', () => onPaletteClick({ kind: 'action', actionType: a.id }, btn));
        wrap.appendChild(btn);
    });
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
// 1回のドラッグで、同じコマには1段階（行動アイコン→コマの順）しか作用させない
let eraserTouched = new Set();
function applyEraser(clientX, clientY, button) {
    if (button === 2) {
        arrows.erase(clientX, clientY);
        const piece = pieces.getPieceAtPixel(clientX, clientY);
        if (piece && !eraserTouched.has(piece)) {
            eraserTouched.add(piece);
            pieces.removeStep(piece);
        }
    } else {
        arrows.erasePartial(clientX, clientY);
    }
}

// 前回位置から今回位置まで補間しながら消す（素早く動かしても取りこぼさない）
let lastEraserPos = null;
function eraseAlongPath(clientX, clientY, button) {
    const from = lastEraserPos || { x: clientX, y: clientY };
    const dist = Math.hypot(clientX - from.x, clientY - from.y);
    // 画面上の距離で補間するので、縮小表示のときは消しゴムの半径も縮めて換算する
    const n = Math.max(1, Math.ceil(dist / (arrows.eraserWidth / 2 * grid.scale)));
    for (let k = 1; k <= n; k++) {
        applyEraser(from.x + (clientX - from.x) * k / n, from.y + (clientY - from.y) * k / n, button);
    }
    lastEraserPos = { x: clientX, y: clientY };
}

function onMouseDown(e) {
    if (!grid.isInsideGrid(e.clientX, e.clientY)) return;
    // 左ボタンのみ。ただし消しゴムと描画モードは右ボタンも使う
    if (mode !== 'eraser' && !(mode === 'freeDraw' && e.button === 2) && e.button !== 0) return;
    if (mode === 'freeDraw') {
        saveSnapshot();
        // 左ボタン＝左の色、右ボタン＝右の色
        arrows.startStroke(e.clientX, e.clientY, e.button === 2 ? penColors.secondary : penColors.primary);
    } else if (mode === 'eraser') {
        if (e.button !== 0 && e.button !== 2) return;
        saveSnapshot();
        eraserTouched = new Set();
        eraseAlongPath(e.clientX, e.clientY, e.button);
    } else if (mode === 'piece' && selectedSpec) {
        saveSnapshot();
        const { x: px, y: py } = grid.toCanvas(e.clientX, e.clientY);
        const target = selectedSpec.kind === 'action' ? pieces.getAttachTarget(px, py) : null;
        if (target) {
            target.action = selectedSpec.actionType; // 既に重なっていれば置き換え
        } else {
            pieces.addPiece(px, py, selectedSpec);
        }
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
    eraserTouched = new Set();
    if (mode === 'freeDraw') arrows.endStroke();
    if (mode === 'move' && pieces.draggedPiece) { pieces.endDrag(); canvas.style.cursor = 'grab'; }
    render();
}

function onMouseLeave(e) {
    lastEraserPos = null;
    eraserTouched = new Set();
    if (mode === 'freeDraw' && arrows.strokeInProgress) arrows.endStroke();
    if (pieces.draggedPiece) { pieces.endDrag(); canvas.style.cursor = 'grab'; }
    render();
}

function onContextMenu(e) {
    e.preventDefault();
    // 描画モード中は描画に集中（右クリックでコマを消さない）
    if (mode === 'freeDraw') return;
    // 消しゴムモードの右クリックは mousedown 側で処理済み
    if (mode === 'eraser') return;
    const piece = pieces.getPieceAtPixel(e.clientX, e.clientY);
    if (piece) {
        saveSnapshot();
        const result = pieces.removeStep(piece);
        showStatus(result === 'action' ? '行動アイコンを外しました' : 'コマを削除しました');
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
