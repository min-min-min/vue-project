import Vue from 'vue'
import Router from 'vue-router'
import test from  '../views/test'
import login from  '../views/login'
import home from '../views/main/main'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/test',
      name: 'test',
      meta: {
        requireAuth: true
      },
      component: test
    },
    {
      path: '/main',
      name: 'main',
      meta: {
        requireAuth: true
      },
      component: home
    }
  ]
})
