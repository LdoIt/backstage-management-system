/*
 * @Date: 2023-04-22 16:02:56
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
// 生成hash路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router