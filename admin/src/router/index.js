import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Admin from '@/views/Admin'
import Index from '@/views/Index'
import UserList from '@/views/User/list'
// import UserInfo from '@/views/User/UserInfo'
// import Upload from '@/views/User/Upload'
// import OrderList from '@/views/Order/OrderList'
// import OrderTag from '@/views/Order/OrderTag'
// import SalesList from '@/views/Sales/SalesList'
// import ClientList from '@/views/Client/ClientList'
// import ClientType from '@/views/Client/ClientType'
// import Payment from '@/views/Client/Payment'
// import Comment from '@/views/Comments/Comment'
// import Product from '@/views/Product/Product'

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
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'userList',
          name: 'userList',
          component: UserList
        },
        {
          path: '*',
          redirect: '/admin'
        }
      ]
    }
  ]
})
