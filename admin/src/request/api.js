import {get, post} from './http'

//登录，退出接口
export const apiLogin = params => post('/users/login',params)
export const apiLoginOut = params => get('/users/logout',params)

//用户接口
export const apiUserAddTag = params => post('/users/tag/add',params)
export const apiUserGetTag = params => get('/users/tag',params)