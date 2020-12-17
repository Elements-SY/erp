import { createApp } from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/index.css'
import './styles/public/common.scss'
import App from './App.vue'
import router from './router'
import Mock from './mock' // http单元测试
Mock.init()
import store from './store'
import './permission' // 路由权限

createApp(App).use(router).use(Element).use(store).mount('#app')


