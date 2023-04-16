// 引入axios
import axios from "axios";
import { Message } from "element-ui";
import getToken from './setGetRemoveToken'
import {Message} from 'element-ui'
const service = axios.create({
  baseURL: '/api',
  timeout: 3 * 1000
})
// 请求拦截器
service.interceptors.request.use(config => {
  // 当发请求的时候，携带token
  config.headers['token'] = getToken('token')
  return config
}, error => {
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  // 接收到响应数据并成功后的一些共有的处理，关闭loading等
  let {status, message} = response.data;
  if(status !== 200) {
    Message({message: message || 'error' , type: 'warning'})
  }
  return response
}, error => {
  return Promise.resolve(error.response)
})

export default service