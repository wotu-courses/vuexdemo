export default {
    state: {
        loginState: false
    },
    getters: {
        loginState: state => state.loginState
    },
    actions: {
        'UPDATE_LOGINSTATE_ACTION'({ commit }, payload) {
            commit('UPDATE_LOGINSTATE', payload);
        }
    },
    mutations: {
        'UPDATE_LOGINSTATE'(state, payload) {
            state.loginState = payload;
        }
    }
}