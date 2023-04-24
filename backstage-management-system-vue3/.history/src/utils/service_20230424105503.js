import axios from 'axios'
import { ElMessage, ElLoading  } from 'element-plus'
let loadingInstance = null;
const loadingOption = {
  lock: true,
  text: 'Loading',
  background: 'rgba(0, 0, 0, 0.1)',
  target: '#elMain'
}
const service = axios.create({
  baseURL: '',
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(config => {
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
export default service