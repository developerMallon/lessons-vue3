import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogged: false
  },
  actions: {
    login_action ({ commit }) {
      commit('login_mutation', true)
    },
    logout_action ({ commit }) {
      commit('logout_mutation', true)
    }
  },
  mutations: {
    login_mutation (state) {
      state.isLogged = true;
    },
    logout_mutation (state) {
      state.isLogged = false;
    }
  },
  getters: {
  },
  modules: {
  }
})
