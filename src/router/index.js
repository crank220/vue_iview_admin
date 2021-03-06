import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '../views/home/index')

const Login = () => import(/* webpackChunkName: "loginReg" */ '../views/login/index')

const Editor = () => import(/* webpackChunkName: "editor" */ '../views/editor/index')
const EditorMarkdown = () => import(/* webpackChunkName: "editor" */ '../views/editor/cell/markdown')
const EditorMText = () => import(/* webpackChunkName: "editor" */ '../views/editor/cell/MText')

const Html2pdf = () => import(/* webpackChunkName: "html2pdf" */ '../views/html2pdf/index')

const Workshop = () => import(/* webpackChunkName: "workshop" */ '../views/workshop/index')
const WorkshopViewBigImg = () => import(/* webpackChunkName: "workshop" */ '../views/workshop/cell/viewBigImg')
const WorkshopUploadImg = () => import(/* webpackChunkName: "workshop" */ '../views/workshop/cell/uploadImg')
const WorkshopFormVerification = () => import(/* webpackChunkName: "workshop" */ '../views/workshop/cell/formVerification')

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
      path: '/editor',
      name: 'editor',
      component: Editor,
      meta: { title: '编辑器' },
      redirect: "/editor/markdown",
      children: [
        {
          path: '/editor/markdown',
          name: 'editorMarkdown',
          component: EditorMarkdown,
          meta: { title: 'markdown' }
        },
        {
          path: '/editor/MText',
          name: 'editorMText',
          component: EditorMText,
          meta: { title: '多文本' }
        }
      ]
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
          meta: { title: '大图预览' }
        },
        {
          path: '/workshop/uploadImg',
          name: 'workshoUploadImg',
          component: WorkshopUploadImg,
          meta: { title: '上传图片' }
        },
        {
          path: '/workshop/formVerification',
          name: 'workshoFormVerification',
          component: WorkshopFormVerification,
          meta: { title: '表单验证' }
        }
      ]
    }
  ]
})

export default router
