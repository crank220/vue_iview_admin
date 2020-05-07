import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '../views/home/index')

const Login = () => import(/* webpackChunkName: "loginReg" */ '../views/login/index')

const Html2pdf = () => import(/* webpackChunkName: "html2pdf" */ '../views/html2pdf/index')


Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: '首页'}
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: 'login', notMenu: true, loginReg: true }
    },
    {
      path: '/html2pdf',
      name: 'html2pdf',
      component: Html2pdf,
      meta: { title: 'html2pdf' }
    }
  ]
})

export default router
