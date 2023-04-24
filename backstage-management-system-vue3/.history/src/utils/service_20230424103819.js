/*
 * @Date: 2023-04-23 21:21:01
 */
import axios from 'axios'
import { ElMessage, ElLoading  } from 'element-plus'
const loadingInstance = NULL;
const loadingOption = {
  lock: true,
  text: 'Loading',
  background: 'rgba(0, 0, 0, 0.7)',
  target: '#elMain'
}
const service = axios.create({
  baseURL: '/mock',
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(config => {
  console.log(2222);
  // 加载动画开启
  loadingInstance = ElLoading.service(loadingOption)
  // 请求头设置
  let token = localStorage.getItem('token') || '';
  config.headers['token'] = token
  return config
}, error => {
  loadingInstance.close()
  ElMessage.error(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  loadingInstance.close()
  if (response.status == 200) return response.data
  else Promise.reject('未获取正确的数据！！')
}, error => {
  loadingInstance.close()
  ElMessage.error(error)
})