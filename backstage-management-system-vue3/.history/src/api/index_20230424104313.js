import service from '../utils/service'

export function getRoleList() { return service.get('/role') }