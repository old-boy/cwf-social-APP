import axios from '../index'

const login  = data => {
    return axios({
        url:'/users/login',
        methods:'post',
        data
    })
}

export default {
    login
}