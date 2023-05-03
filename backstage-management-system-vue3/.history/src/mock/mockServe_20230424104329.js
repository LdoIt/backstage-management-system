/*
 * @Date: 2023-04-24 10:32:15
 */
// 引入mockjs
import Mock from 'mockjs'
import roleList from './roleList.json'

// mock 数据 参数：请求地址，请求方法，请求数据
Mock.mock("/mock/role", "get", {status: 200, data: roleList})