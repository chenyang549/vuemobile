import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入 userVant
import UserVant from '../views/userVant/index.vue'
// 导入 login
import Login from '../views/login/index.vue'
// 导入 home
import home from '../views/home/index.vue'
// 导入 index
import Index from '../views/home/index/index.vue'
// 导入 my
import My from '../views/home/my/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/userVant',
    component: UserVant
  },
  // 登录路由
  {
    path: '/login',
    component: Login
  },
  // 主页路径
  {
    path: '/home',
    component: home,
    // redirect：不能决定子路由的访问方式，
    redirect: '/index',
    // 添加子路由
    children: [
      { path: '/index', component: Index },
      { path: '/my', component: My }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
