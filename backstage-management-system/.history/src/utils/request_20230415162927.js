// 引入axios
import axios from "axios";
const service = axios.create({
  baseURL: '/api',
  timeout: 3 * 1000
})
// 请求拦截器
service.interceptors.request.use(config => {
  // 当发请求的时候，携带token
  return config
}, error => {
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  // 接收到响应数据并成功后的一些共有的处理，关闭loading等
  return response
}, error => {
  return Promise.resolve(error.response)
})