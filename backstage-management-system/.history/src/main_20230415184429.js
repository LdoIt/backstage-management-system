/*
 * @Date: 2023-04-13 17:21:53
 */
import Vue from 'vue'
import App from './App.vue'
// 引入elementUI里按需引入的组件
import './plugins/element'
// 导入路由
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')