import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Admin from '@/views/admin'
import Index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      redirect: '/admin/userList',//登录成功后跳转的位置
      children:[
          {
            path: 'index',
            name: 'index',
            component: Index
          },
      ]
    }
  ]
})
