/*
 * @Date: 2023-04-13 17:21:53
 */
import Vue from 'vue'
import App from './App.vue'
// 引入elementUI里按需引入的组件
import './plugins/element'
// 引入axios
import axios from "axios";
Vue.prototype.axios = axios; // 挂载到原型
Vue.
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
