import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Foo from '../pages/Foo'
import Bar from '../pages/Bar'
const routes = [
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar},
]

export default new VueRouter({
  routes
})