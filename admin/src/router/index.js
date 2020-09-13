import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Admin from '@/views/Admin'
import Index from '@/views/Index'
import UserList from '@/views/User/list'
import UserInfo from '@/views/User/info'
import UserTag from '@/views/User/tag'
import UserTitle from '@/views/User/title'


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
      redirect: '/admin/user/list',//登录成功后跳转的位置
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: '/admin/user/list',
          name: 'userList',
          component: UserList
        },
        {
          path: '/admin/user/info',
          name: 'userInfo',
          component: UserInfo
        },
        {
          path: '/admin/user/tag',
          name: 'userTag',
          component: UserTag
        },
        {
          path: '/admin/user/title',
          name: 'userTitle',
          component: UserTitle
        },
        {
          path: '*',
          redirect: '/admin'
        }
      ]
    }
  ]
})
