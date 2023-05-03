/*
 * @Date: 2023-04-24 10:41:17
 */
import service from '../utils/service'

export const reqGetRoleList = () => service.get('/role')
export const reqLogin = () => service.get('/login')