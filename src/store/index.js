import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";


export default createStore({
  strict: true,
  state: {
    user: {
      firstName: '',
      lastName: '',
      token: ''
    },
    system: {
      mode: 'light',
      loading: false,
      login: false,
      module: 'Página inicial'
    }
  },
  getters: {
    user: state => state.user,
    system: state => state.system
  },
  mutations: {
    SAVE_SYSTEM(state, payload) {
      return [
        state.system.mode = payload.mode !== undefined ? payload.mode : state.system.mode,
        state.system.loading = payload.loading !== undefined ? payload.loading : state.system.loading,
        state.system.login = payload.login !== undefined ? payload.login : state.system.login,
        state.system.module = payload.module !== undefined ? payload.module : state.system.module
      ]
    },

    SAVE_USER(state, payload) {
      return [
        state.user.firstName = payload.firstName !== undefined ? payload.firstName : state.user.firstName,
        state.user.lastName = payload.lastName !== undefined ? payload.lastName : state.user.lastName,
        state.user.token = payload.token !== undefined ? payload.token : state.user.token,
      ]
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})

