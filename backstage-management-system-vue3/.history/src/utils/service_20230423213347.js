/*
 * @Date: 2023-04-23 21:21:01
 */
import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(config => {
  // 请求头设置
  let token = localStorage.getItem('token') || '';
  if(!token) { // 跳转到登录页
    
  }
  config.headers['token'] = token
  return config
}, error => {
  ElMessage.error(error)
})