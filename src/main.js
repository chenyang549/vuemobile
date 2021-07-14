// 导入 vue
import Vue from 'vue'
// 导入 App
import App from './App.vue'
// 导入路由
import router from './router'
// 导入 vuex
import store from './store'
// 导入 Vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入字体
import './style/index.css'

// 使用 vant
Vue.use(Vant)
Vue.config.productionTip = false

// 创建了 vue 实例
new Vue({
  router, // 挂载了路由
  store, // 挂载了 vuex
  render: h => h(App) // 挂载 App.vue
}).$mount('#app') // 挂载到页面上的 id 名为 app 的容器中
