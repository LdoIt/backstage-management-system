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
// 导入elementPlus中的图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.mount('#app')
