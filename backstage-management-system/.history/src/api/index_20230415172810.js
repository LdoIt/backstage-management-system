/*
 * @Date: 2023-04-15 17:19:40
 */
import service from '../utils/request'
export function login(data) { return service('/api2/login', data)}