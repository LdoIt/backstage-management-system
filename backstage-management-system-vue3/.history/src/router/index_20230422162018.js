/*
 * @Date: 2023-04-22 16:02:56
 */
import { createRouter, createWebHashHistory } from 'vue'
import routes from './routes'
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router