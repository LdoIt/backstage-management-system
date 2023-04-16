// 引入axios
import axios from "axios";
const server = axios.create({
  baseURL: '/api',
  timeout: 3 * 1000
})
server.interceptors.request.use(config => {
  // 当发请求的时候，携带token
  return config
})