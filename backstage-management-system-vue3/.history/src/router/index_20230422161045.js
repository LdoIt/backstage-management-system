/*
 * @Date: 2023-04-22 16:02:56
 */
import { createRouter } from 'vue'
import routes from './routes'
const vueRouter = createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
export default vueRouter