/*
 * @Date: 2023-04-22 16:04:12
 */
export default [
  {path: '/', component: () => import('../pages/Login'), redirect: '/login'},
  {path: '/login', component: () => import('../pages/Login')},
  {path: '/home', component: () => import('../pages/Home'), children: [
    {path: 'account', component: () => import('../pages/Account')},
    {path: 'user', component: () => import('../pages/User')},
  ]}
]