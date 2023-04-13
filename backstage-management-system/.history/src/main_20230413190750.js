/*
 * @Date: 2023-04-13 17:21:53
 */
import Vue from 'vue'
import App from './App.vue'
// 引入elementUI里按需引入的组件
import './plugins/element'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
