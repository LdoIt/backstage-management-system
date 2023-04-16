/*
 * @Date: 2023-04-15 08:18:06
 */
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {path: '/foo', component: () => import('../pages/Foo')},
  {path: '/bar', component: () => import('../pages/Bar')},
]

export default new VueRouter({
  routes
})