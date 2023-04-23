/*
 * @Date: 2023-04-23 21:21:01
 */
import axios from 'axios'
import { ElMessage, ElLoading  } from 'element-plus'

const service = axios.create({
  baseURL: '',
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(config => {
  // 请求头设置
  let token = localStorage.getItem('token') || '';
  config.headers['token'] = token
  return config
}, error => {
  ElMessage.error(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  if (response.status == 200) return response.data
  else Promise.reject('未获取正确的数据')
}, error => {
  ElMessage.error(error)
})