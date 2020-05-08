import Vue from 'vue'
import App from './App.vue'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.use(ViewUI)

import http from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
Vue.use(VueAxios, http)

import VueRouter from 'vue-router'
import router from './router/index'
Vue.use(VueRouter)
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
router.beforeEach((to, from, next) => {
  if (Object.keys(store.state.login.userInfo).length === 0 && to.path !== "/login") {
    next({ path: "/login" })
  } else {
    ViewUI.LoadingBar.start()
    next()
  }
})
router.afterEach(route => {
  ViewUI.LoadingBar.finish()
})

http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
http.interceptors.request.use(function (config) {
  config.headers['token'] = store.state.login.userInfo.token
  return config
})
http.interceptors.response.use(function (res) {
  if (res.code === 401) {
    ViewUI.Message.error(res.msg)
    router.push({ path: "/login" })
  }
  return res
})
Vue.prototype.http = http

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
