// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import { getCookie } from './util/cookies'
// import api from '../axios/index';


Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.use(ElementUI)
// Vue.use(api)

router.beforeEach((to, from, next) => {
  let sessionId = getCookie('sessionId')
  if (to.path !== '/') {
    this.$ajax.post('/users/checklogin', {
        'sessionId': sessionId
    }).then(response => {
      let res = response.data
      if (res.status === '1') {
        if (!store.state.userId) {
          store.commit('SET_USERID', res.result._id)
          store.commit('SET_USERNAME', res.result.info.username)
          store.commit('SET_AVATAR', res.result.info.avatar)
          store.commit('SET_ROLE', res.result.role)
        }
        next()
      } else {
        next('/')
      }
    })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
