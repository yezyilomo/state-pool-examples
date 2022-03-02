import { createStore } from 'state-pool';

const store = createStore();

/*
// ===================================================
// Use this if you want to allow store persistance in local storage
let timerId = null
const DEBOUNCE_TIME = 1000  // In milliseconds

store.persist({
    // PERSIST_ENTIRE_STORE: true,  // Use this only if you want to persist the entire store
    saveState: function (key, value, isInitialSet) {
        const doStateSaving = () => {
            try {
                const serializedState = JSON.stringify(value);
                window.localStorage.setItem(key, serializedState);
            } catch {
                // Ignore write errors
            }
        }

        if (isInitialSet) {
            // We don't debounce saving state since it's the initial set
            // so it's called only once and we need our storage to be updated
            // right away
            doStateSaving();
        }
        else {
            // Here we debounce saving state because it's the update and this function
            // is called every time the store state changes. However, it should not
            // be called too often because it triggers the expensive `JSON.stringify` operation.
            clearTimeout(timerId);
            timerId = setTimeout(() => {

            }, DEBOUNCE_TIME);
        }
    },
    loadState: function (key) {
        try {
            const serializedState = window.localStorage.getItem(key);
            if (serializedState === null) {
                // No state saved
                return undefined
            }
            return JSON.parse(serializedState);
        } catch (err) {
            // Failed to load state
            return undefined
        }
    },
    removeState: function (key) {
        window.localStorage.removeItem(key);
    },
    clear: function () {
        window.localStorage.clear();
    }
})
// ===================================================
*/


export default store;
