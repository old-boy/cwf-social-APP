import {get, post} from './http'


export const apiLogin = params => post('/users/login',params)
