import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '../views/home/index')

const Login = () => import(/* webpackChunkName: "loginReg" */ '../views/login/index')

const Html2pdf = () => import(/* webpackChunkName: "html2pdf" */ '../views/html2pdf/index')

const Workshop = () => import(/* webpackChunkName: "workshop" */ '../views/workshop/index')
const WorkshopViewBigImg = () => import(/* webpackChunkName: "workshop" */ '../views/workshop/cell/viewBigImg')
const WorkshopUploadImg = () => import(/* webpackChunkName: "workshop" */ '../views/workshop/cell/uploadImg')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: '首页' }
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
    },
    {
      path: '/workshop',
      name: 'workshop',
      component: Workshop,
      meta: { title: 'workshop' },
      redirect: "/workshop/viewBigImg",
      children: [
        {
          path: '/workshop/viewBigImg',
          name: 'workshoViewBigImg',
          component: WorkshopViewBigImg,
          meta: { title: '查看大图' }
        },
        {
          path: '/workshop/uploadImg',
          name: 'workshoUploadImg',
          component: WorkshopUploadImg,
          meta: { title: '上传图片' }
        }
      ]
    },
  ]
})

export default router
