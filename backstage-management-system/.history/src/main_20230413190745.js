import Vue from 'vue'
import App from './App.vue'
// 引入elementUI里的组件
import './plugins/element'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
