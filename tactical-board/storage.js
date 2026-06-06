// storage.js - LocalStorage管理
class Storage {
    constructor() {
        this.storageKey = 'tacticalBoard_data';
        this.maxHistoryItems = 20;
        this.history = [];
        this.historyIndex = -1;
    }

    /**
     * 現在の状態を保存（LocalStorage）
     */
    save(pieces, arrows) {
        const data = {
            timestamp: new Date().toISOString(),
            pieces: pieces.toJSON(),
            arrows: arrows.toJSON()
        };

        try {
            localStorage.setItem(this.storageKey, JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('Failed to save to LocalStorage:', e);
            return false;
        }
    }

    /**
     * LocalStorageから復元
     */
    load(pieces, arrows) {
        try {
            const json = localStorage.getItem(this.storageKey);
            if (!json) {
                return false;
            }

            const data = JSON.parse(json);
            pieces.fromJSON(data.pieces);
            arrows.fromJSON(data.arrows);
            return true;
        } catch (e) {
            console.error('Failed to load from LocalStorage:', e);
            return false;
        }
    }

    /**
     * LocalStorageをクリア
     */
    clear() {
        try {
            localStorage.removeItem(this.storageKey);
            return true;
        } catch (e) {
            console.error('Failed to clear LocalStorage:', e);
            return false;
        }
    }

    /**
     * 状態をUndoスタックに追加
     */
    addHistory(pieces, arrows) {
        // 現在位置より先の履歴を削除
        if (this.historyIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.historyIndex + 1);
        }

        const state = {
            pieces: pieces.toJSON(),
            arrows: arrows.toJSON()
        };

        this.history.push(state);

        // 履歴の最大数を超えた場合は古い履歴を削除
        if (this.history.length > this.maxHistoryItems) {
            this.history.shift();
        }

        this.historyIndex = this.history.length - 1;
    }

    /**
     * Undoできるかチェック
     */
    canUndo() {
        return this.historyIndex > 0;
    }

    /**
     * Undoを実行
     */
    undo(pieces, arrows) {
        if (!this.canUndo()) {
            return false;
        }

        this.historyIndex--;
        const state = this.history[this.historyIndex];

        pieces.fromJSON(state.pieces);
        arrows.fromJSON(state.arrows);
        return true;
    }

    /**
     * Redoできるかチェック
     */
    canRedo() {
        return this.historyIndex < this.history.length - 1;
    }

    /**
     * Redoを実行
     */
    redo(pieces, arrows) {
        if (!this.canRedo()) {
            return false;
        }

        this.historyIndex++;
        const state = this.history[this.historyIndex];

        pieces.fromJSON(state.pieces);
        arrows.fromJSON(state.arrows);
        return true;
    }
}
