import {get, post, del} from './http'

//登录，退出接口
export const apiLogin = params => post('/users/login',params)
export const apiLoginOut = params => get('/users/logout',params)

//用户接口
export const apiUserAdd = params => post('/users/add',params)

export const apiUserAddTag = params => post('/users/tag/add',params)
export const apiUserGetTag = params => get('/users/tag',params)

export const apiUserAddInfo = params => post(`/users/info/add/${id}`,params)

export const apiUserAddTitle = params => post('/users/title/add', params)
export const apiUserGetTitle = params => get('/users/title',params)
export const apiUserDelTitle = params => del('/users/title',params)