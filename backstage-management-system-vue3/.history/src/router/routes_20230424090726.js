/*
 * @Date: 2023-04-22 16:04:12
 */
export default [
  {path: '/', component: () => import('../pages/Login'), redirect: '/login'},
  {path: '/login', name: 'Login', component: () => import('../pages/Login')},
  {path: '/home', meta: {title: '账户管理'},  component: () => import('../pages/Home'), children: [
    {path: 'account', name: 'Account', meta: {title: '账户列表'}, component: () => import('../pages/Account')}
  ]},
  {path: '/home', meta: {title: '角色管理'},  component: () => import('../pages/Home'), children: [
    {path: 'role', name: 'Role', meta: {title: '角色列表'}, component: () => import('../pages/Role')},
  ]}
]