/*
 * @Date: 2023-04-22 16:04:12
 */
export default [
  {path: '/', component: () => import('../pages/Login'), redirect: '/login'},
  {path: '/login', component: () => import('../pages/Login')},
  {path: '/home', children: [
    {path: 'account', component: () => import('../pages/Account')},
    {path: 'role', component: () => import('../pages/Role')},
  ]}
]