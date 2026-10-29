// actions.js - 行動アイコン（コードで描画）
// 描画は原点(0,0)を中心に半径およそ26pxで定義し、scaleで拡大縮小する
const ACTION_LIST = [
    { id: 'attack',  name: '攻撃' },
    { id: 'aim',     name: '狙い' },
    { id: 'defense', name: '防御' },
    { id: 'move',    name: '移動' },
    { id: 'support', name: '援護' },
    { id: 'wait',    name: '待機' },
    { id: 'retreat', name: '撤退' },
    { id: 'caution', name: '注意' },
    { id: 'awaken',  name: '覚醒' }
];

const ActionIcons = {
    names: Object.fromEntries(ACTION_LIST.map(a => [a.id, a.name])),

    _poly(ctx, pts) {
        ctx.beginPath();
        for (let i = 0; i < pts.length; i += 2) {
            if (i === 0) ctx.moveTo(pts[i], pts[i + 1]);
            else ctx.lineTo(pts[i], pts[i + 1]);
        }
        ctx.closePath();
    },

    // 塗りつぶし＋白い縁取り（暗い背景でも見えるように）
    _fillOutline(ctx, color) {
        ctx.fillStyle = color;
        ctx.fill();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = '#ffffff';
        ctx.lineJoin = 'round';
        ctx.stroke();
    },

    _line(ctx, x1, y1, x2, y2, color, width) {
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    },

    draw(ctx, id, x, y, scale = 1) {
        const fn = this._icons[id];
        if (!fn) return;
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);
        fn.call(this, ctx);
        ctx.restore();
    },

    _icons: {
        attack(ctx) {
            this._poly(ctx, [0,-26, 7,-14, 20,-18, 16,-5, 28,2, 16,8, 20,21, 7,16, 0,28, -7,16, -20,21, -16,8, -28,2, -16,-5, -20,-18, -7,-14]);
            this._fillOutline(ctx, '#e74c3c');
            this._line(ctx, -8, 8, 9, -9, '#ffffff', 3.5);
        },
        aim(ctx) {
            const o = '#e67e22';
            ctx.beginPath(); ctx.arc(0, 0, 17, 0, Math.PI * 2);
            ctx.strokeStyle = '#fff'; ctx.lineWidth = 7; ctx.stroke();
            ctx.strokeStyle = o; ctx.lineWidth = 3; ctx.stroke();
            for (const [x1, y1, x2, y2] of [[0,-28,0,-9],[0,28,0,9],[-28,0,-9,0],[28,0,9,0]]) {
                this._line(ctx, x1, y1, x2, y2, '#fff', 5.5);
                this._line(ctx, x1, y1, x2, y2, o, 2.5);
            }
            ctx.fillStyle = o;
            ctx.beginPath(); ctx.arc(0, 0, 3, 0, Math.PI * 2); ctx.fill();
        },
        defense(ctx) {
            ctx.beginPath();
            ctx.moveTo(0, -24); ctx.lineTo(20, -16); ctx.lineTo(20, 2);
            ctx.quadraticCurveTo(20, 18, 0, 26);
            ctx.quadraticCurveTo(-20, 18, -20, 2);
            ctx.lineTo(-20, -16); ctx.closePath();
            this._fillOutline(ctx, '#3498db');
            this._line(ctx, 0, -14, 0, 16, '#fff', 2.5);
            this._line(ctx, -11, -3, 11, -3, '#fff', 2.5);
        },
        move(ctx) {
            this._poly(ctx, [-24,-8, 4,-8, 4,-18, 26,0, 4,18, 4,8, -24,8]);
            this._fillOutline(ctx, '#27ae60');
        },
        support(ctx) {
            ctx.beginPath(); ctx.arc(0, 0, 21, 0, Math.PI * 2);
            this._fillOutline(ctx, '#1abc9c');
            this._line(ctx, -10, 0, 10, 0, '#fff', 5);
            this._line(ctx, 0, -10, 0, 10, '#fff', 5);
        },
        wait(ctx) {
            ctx.beginPath(); ctx.arc(0, 0, 21, 0, Math.PI * 2);
            this._fillOutline(ctx, '#7f8c8d');
            ctx.fillStyle = '#fff';
            ctx.fillRect(-9, -10, 6, 20);
            ctx.fillRect(3, -10, 6, 20);
        },
        retreat(ctx) {
            ctx.beginPath(); ctx.arc(0, 0, 21, 0, Math.PI * 2);
            this._fillOutline(ctx, '#34495e');
            ctx.strokeStyle = '#fff'; ctx.lineWidth = 4;
            ctx.lineCap = 'round'; ctx.lineJoin = 'round';
            for (const dx of [0, 10]) {
                ctx.beginPath();
                ctx.moveTo(2 + dx, -9); ctx.lineTo(-8 + dx, 0); ctx.lineTo(2 + dx, 9);
                ctx.stroke();
            }
        },
        caution(ctx) {
            this._poly(ctx, [0,-24, 25,20, -25,20]);
            this._fillOutline(ctx, '#f1c40f');
            ctx.fillStyle = '#333';
            ctx.beginPath(); ctx.roundRect(-2.5, -9, 5, 16, 2.5); ctx.fill();
            ctx.beginPath(); ctx.arc(0, 13, 3, 0, Math.PI * 2); ctx.fill();
        },
        awaken(ctx) {
            this._poly(ctx, [4,-26, -14,4, -2,4, -6,26, 16,-6, 2,-6]);
            this._fillOutline(ctx, '#9b59b6');
        }
    }
};
