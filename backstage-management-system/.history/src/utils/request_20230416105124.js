/*
 * @Date: 2023-04-15 15:54:02
 */
// 引入axios
import axios from "axios";
import { Message } from "element-ui";
import {getToken} from './setGetRemoveToken'
const service = axios.create({
  baseURL: '/api',
  timeout: 3 * 1000
})
// 请求拦截器
service.interceptors.request.use(config => {
  // 当发请求的时候，携带token
  config.headers['token'] = getToken('token')
  console.log( config.headers['token']);
  return config
}, error => {
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  // 接收到响应数据并成功后的一些共有的处理，关闭loading等
  return response
}, error => {
  // 请求出错就提示
  let {message} = error;
  Message({message: message || 'error', type: 'error'})
  return Promise.reject(error.response)
})

export default service