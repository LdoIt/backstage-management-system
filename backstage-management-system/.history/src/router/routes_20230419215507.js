/*
 * @Date: 2023-04-15 21:19:25
 */
export default [
  {path: '/', name: '登录', component: () => import('@/pages/Login'), redirect: '/login'},
  {path: '/login',name: '首页', component: () => import('@/pages/Login')},
  {path: '/home', name: '学生管理', iconClass: 'fa fa-users', redirect: '/home/student', component: () => import('@/pages/Home'), children: [
    {path: 'student', name: '学生列表', iconClass: 'fa fa-list', component: () => import('@/pages/students/StudentList')},
    {path: 'info', name: '信息列表', iconClass: 'fa fa-list', component: () => import('@/pages/students/InfoList')},
    {path: 'infos', name: '信息管理', iconClass: 'fa fa-list', component: () => import('@/pages/students/InfoLists')},
    {path: 'work', name: '作业列表', iconClass: 'fa fa-list', component: () => import('@/pages/students/WorkList')},
    {path: 'works', name: '作业管理', iconClass: 'fa fa-list', component: () => import('@/pages/students/WorkMent')},
  ]},
  {path: '/home', name: '数据分析', iconClass: 'fa fa-bar-chart', component: () => import('@/pages/Home'), children: [
    {path: 'dataview', name: '数据概览', iconClass: 'fa fa-line-chart', component: () => import('@/pages/dataAnalysis/DataView')},
    {path: 'mapview', name: '地图概览', iconClass: 'fa fa-line-chart', component: () => import('@/pages/dataAnalysis/MapView')},
    {path: 'travel', name: '旅游地图', iconClass: 'fa fa-line-chart', component: () => import('@/pages/dataAnalysis/TravelMap')},
    {path: 'score', name: '分数地图', iconClass: 'fa fa-line-chart', component: () => import('@/pages/dataAnalysis/ScoreMap')},  
  ]},
  {path: '/home', name: '用户中心', iconClass: 'fa fa-user', component: () => import('@/pages/Home'), children: [
    {path: 'users', name: '权限管理', iconClass: 'fa fa-user', component: () => import('@/pages/users/User')},
  ]},
]