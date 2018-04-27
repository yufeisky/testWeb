const state = {};

function setState(key, val) {
    let res = val;
    if (typeof val === 'function') {
        res = val(state);
    }
    state[key] = res;
}

function getState(key) {
    return key ? state[key] : state;
}

export default {
    state,
    setState,
    getState
};