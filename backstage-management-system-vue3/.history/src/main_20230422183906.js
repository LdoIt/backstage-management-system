/*
 * @Date: 2023-04-20 09:25:13
 */
import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 导入 elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
