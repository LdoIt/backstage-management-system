/*
 * @Date: 2023-04-15 08:18:06
 */
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {path: '/', component: () => import('../pages/Login'), redirect: '/login'},
  {path: '/home', component: () => import('../pages/Home')},
  {path: '/login', component: () => import('../pages/Login')},
]

export default new VueRouter({
  routes
})