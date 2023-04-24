/*
 * @Date: 2023-04-22 16:04:12
 */
export default [
  {path: '/', component: () => import('../pages/Login'), redirect: '/login'},
  {path: '/login', component: () => import('../pages/Login')},
  {path: '/home', name: '主页',  component: () => import('../pages/Home'), children: [
    {path: 'account', name: '账户信息', component: () => import('../pages/Account')},
    {path: 'role', name: '角色列表', component: () => import('../pages/Role')},
  ]}
]