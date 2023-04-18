/*
 * @Date: 2023-04-15 15:54:02
 */
// 引入axios
import axios from "axios";
import { Message } from "element-ui";
import {getToken} from './setGetRemoveToken'
// 引入laoding加载组件
import { Loading } from 'element-ui';
const loading = {
  LoadingInstance: null,
  open: function () {
    this.LoadingInstance = Loading.service({
      text: '拼命了老命加载',
      background: 'raga(0,0,0,0.5)',//加载效果
      target: '.mianIfo',//效果显示区域
    })
  },
  close: function () {
    console.log(this.LoadingInstance);
    this.LoadingInstance.close();//关闭遮罩层
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
  console.log('loading 关闭');
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