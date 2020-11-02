import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        page: ''
    },
    getters: {
        page: state => { return state.page }
    },
    mutations: {
        SET_PAGE: (state, payload) => (state.page = payload)
    },
    actions: {
        setPage({ commit }, page) {
            commit('SET_PAGE', page)
        }
        
    },
    modules: {
    }
})