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
      module: 'Página inicial',
      alert: {
        type: 'attenttion',
        title: 'Erro!',
        msg: 'Não foi possível concluir a operação',
        display: false
      }
    },
    showOverlay: false
  },
  getters: {
    user: state => state.user,
    system: state => state.system,
    isAuthenticated: state => !!state.user.token
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


    SAVE_ALERT(state, payload) {
        return [
            state.system.alert.type = payload.type !== undefined ? payload.type : state.system.alert.type,
            state.system.alert.title = payload.title !== undefined ? payload.title : state.system.alert.title,
            state.system.alert.msg = payload.msg !== undefined ? payload.msg : state.system.alert.msg,
            state.system.alert.display = payload.display !== undefined ? payload.display : state.system.alert.display
        ]
    },

    SAVE_USER(state, payload) {
      return [
        state.user.firstName = payload.firstName !== undefined ? payload.firstName : state.user.firstName,
        state.user.lastName = payload.lastName !== undefined ? payload.lastName : state.user.lastName,
        state.user.token = payload.token !== undefined ? payload.token : state.user.token,
      ]
    },

    toggleOverlay(state) {
      state.showOverlay = !state.showOverlay
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})

