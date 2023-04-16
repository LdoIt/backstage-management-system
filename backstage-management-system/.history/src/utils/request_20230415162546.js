// 引入axios
import axios from "axios";
const server = axios.create({
  baseURL: '/api',
  timeout: 3 * 1000
})
// 请求拦截器
server.interceptors.request.use(config => {
  // 当发请求的时候，携带token
  return config
}, error => {
  Promise.reject(error)
})

// 响应拦截器
serve.interceptors.response.use(response => {

}, error => {
  
})