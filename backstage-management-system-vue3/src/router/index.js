/*
 * @Date: 2023-04-22 16:02:56
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
// import store from '../store'
// 生成hash路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next)=>{
  if(to.path != '/login') {
    if(localStorage.getItem('username')) next()
    else next('/login');
  }else {
    next()
  }
})
export default router