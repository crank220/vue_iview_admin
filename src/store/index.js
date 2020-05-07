import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import globe from './modules/globe'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    globe
  },
  plugins: [createPersistedState({
    key: 'icrank_admin',
    paths: ['globe']
  })]
})

export default store