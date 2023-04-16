export default [
  {path: '/', component: () => import('../pages/Login'), redirect: '/login'},
  {path: '/home', component: () => import('../pages/Home')},
  {path: '/login', component: () => import('../pages/Login')},
]