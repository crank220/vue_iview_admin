import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import globe from './modules/globe'
import login from './modules/login'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    globe,
    login
  },
  plugins: [createPersistedState({
    key: 'icrankAdmin',
    paths: ['globe', 'login']
  })]
})

export default store