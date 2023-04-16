/*
 * @Date: 2023-04-15 21:19:25
 */
export default [
  {path: '/', component: () => import('../pages/Login'), redirect: '/login'},
  {path: '/home', name: '学生管理', iconClass: 'fa fa-users',  component: () => import('../pages/Home'), children: [
    {},
  ]},
  {path: '/login', component: () => import('../pages/Login')},
]