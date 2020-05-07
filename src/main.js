import Vue from 'vue'
import App from './App.vue'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import VueRouter from 'vue-router'
import router from './router/index'

Vue.use(VueRouter)
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start()
  next()
})
router.afterEach(route => {
  ViewUI.LoadingBar.finish()
})

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.use(ViewUI)

import http from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, http)

import store from './store/index'

http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.http = http

http.interceptors.response.use(function (res) {
  if (res.data.s === 10001) {
    ViewUI.Message.error(res.data.msg)
    router.push({ path: "/login" })
  }
  return res
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
