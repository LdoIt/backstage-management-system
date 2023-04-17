/*
 * @Date: 2023-04-15 15:54:02
 */
// 引入axios
import axios from "axios";
import { Message } from "element-ui";
import {getToken} from './setGetRemoveToken'
// 引入laoding加载组件
import { Loading } from 'element-ui';
const loading = {//创建loading对象，在里面添加属性和方法，在方法中调用service添加配置
  LoadingInstance: null,//Loading对象实例，通过它作为判断条件.
  /* loadingService实例是常驻的，每次调用需要将之前的loading释放或置空，每次使用时创建一个新的 */
  open: function () {//生成loading实例，将遮罩层打开
      if (this.LoadingInstance === null) {
          // 创建单例, 防止切换路由重复加载
          this.LoadingInstance = Loading.service({
              text: '拼命加载中',
              background: 'raga(0,0,0,0.5)',//加载效果
              target: '.appContainer',//效果显示区域
              /* 	Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；
              若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点
              这里找到AppMain组件*/
          })
      }
  },
  close: function () {//关闭loading实例，将实例对象置空
      if (this.LoadingInstance !== null) {
          this.LoadingInstance.close();//关闭遮罩层
      }
      this.LoadingInstance = null;//调用关闭方法，不能置空，需要手动置空
  }
}
const service = axios.create({
  baseURL: '/api',
  timeout: 3 * 1000
})
// 请求拦截器
service.interceptors.request.use(config => {
  // 当请求发出去就可以开启loading
  loading.open();
  // 当发请求的时候，携带token
  config.headers['token'] = getToken('token')
  return config
}, error => {
  loading.close();
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  loading.close();
  // 接收到响应数据并成功后的一些共有的处理，关闭loading等
  return response
}, error => {
  loading.close();
  // 请求出错就提示
  let {message} = error;
  Message({message: message || 'error', type: 'error'})
  return Promise.reject(error.response)
})

export default service