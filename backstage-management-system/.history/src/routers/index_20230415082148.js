// 引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Foo = {template: '<div>Foo</div>'}
const Bar = {template: '<div>Bar</div>'}
const routes = [
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar},
]