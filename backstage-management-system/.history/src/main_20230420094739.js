/*
 * @Date: 2023-04-13 17:21:53
 */
import Vue from 'vue'
import App from './App.vue'
// 引入elementUI里按需引入的组件
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element'
// 导入路由
import router from './router'
import * as echarts from 'echarts'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
