/*
 * @Date: 2023-04-15 21:19:25
 */
export default [
  {path: '/', component: () => import('@/pages/Login'), redirect: '/login'},
  {path: '/home', name: '学生管理', iconClass: 'fa fa-users',  component: () => import('@/pages/Home'), children: [
    {path: 'student', name: '学生列表', iconClass: 'fa fa-list', component: () => import('@/pages/students/StudentList')},
    {path: 'info', name: '信息列表', iconClass: 'fa fa-list', component: () => import('@/pages/students/InfoLists')},
    {path: 'student', name: '学生列表', iconClass: 'fa fa-list', component: () => import('@/pages/students/StudentList')},
    {path: 'student', name: '学生列表', iconClass: 'fa fa-list', component: () => import('@/pages/students/StudentList')},
  ]},
  {path: '/login', component: () => import('@/pages/Login')},
]