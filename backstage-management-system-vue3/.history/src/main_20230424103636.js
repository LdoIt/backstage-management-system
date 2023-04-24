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
// 引入mockServe
import './mock/mockServe'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  // 新增名为Menu的判断
  if ("Menu"!= key){
    app.component(key, component);
  }
  else{
    app.component(key + "Icon", component);
  }
}
app.use(router)
app.use(ElementPlus)
app.mount('#app')
