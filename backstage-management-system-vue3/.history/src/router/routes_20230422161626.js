/*
 * @Date: 2023-04-22 16:04:12
 */
export default [
  {path: '/', component: () => import('../pages/Login'), },
  {path: '/login', component: () => import('../pages/Login')},
  {path: '/home', component: () => import('../pages/Home')}
]