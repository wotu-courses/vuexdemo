import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
Vue.use(Vuex)

export default new Vuex.Store({
    // 存储数据
    state: {
        title: '根组件',
    },
    // 读取数据
    getters: {
        //title: state => state.title
        title: function (state) {
            return state.title;
        },
    },
    // 动作
    actions: {
        // 修改标题的action
        'UPDATE_TITLE_ACTION'({ commit }, data) {
            commit('UPDATE_TITLE', data);
        },
    },
    // 变化;转变
    mutations: {
        // 修改state里的title
        'UPDATE_TITLE'(state, payload) {
            state.title = payload;
        },
    },
    modules: {
        login,
    }
})