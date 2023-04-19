/*
 * @Date: 2023-04-15 17:19:40
 */
import service from '../utils/request'
import qs from 'qs'
// 登录接口
export function login(data) { return service.post('/api2/login', data)};
// 获取学生列表数据
export function getStudentList() { return service.get('/api2/students') }
// 删除学生数据
export function delStudent(id) {return service.delete(`/api2/students/${id}`)}
// 获取信息列表
export function getInfo() {return service.get('/api2/info')}
// 新增信息
export function addInfo(d) {let data = qs.stringify(d);return service.post('/api2/info', data)}
// 删除数据
export function delInfo(id) {return service.delete(`/api2/info/${id}`)}
// 修改数据
export function editInfo(d) {let data = qs.stringify(d);return service.put('/api2/info', data)}
// 获取作业列表
export function getWorkList() { return service.get('/api2/works') }
// 列表分页查询接口
export function pagingQuery(page, size) { return service.get(`/api2/works?page=${page}&size=${size}`)}
// 获取图表数据
export function getEchartsList() { return service.get('/api2/dataview') }