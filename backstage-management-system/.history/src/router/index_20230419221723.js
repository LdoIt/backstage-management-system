/*
 * @Date: 2023-04-15 08:18:06
 */
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
import routes from './routes.js'
// 工具函数
import {getToken} from '@/utils/setGetRemoveToken'
Vue.use(VueRouter)
const router = new VueRouter();
router.beforeEach((to, from, next) => {
  console.log(to.name);
  if (to.name !== 'Login' && getToken('token')) {
    next()
  }else {
    alert('请先登录')
  }
})

export default new VueRouter({
  routes
})