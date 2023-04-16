/*
 * @Date: 2023-04-15 17:19:40
 */
import service from '../utils/request'
// 登录接口
export function login(data) { return service.post('/api2/login', data)};
// 获取学生列表数据
export function getStudentList() { return service.get('/api2/students') }