import Vue from 'vue'
import Router from 'vue-router'
import test from  '../views/test'
import login from  '../views/login'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      requireAuth: true,
      component: login
    },
    {
      path: '/test',
      name: 'test',
      meta: {
        requireAuth: true
      },
      component: test
    }
  ]
})
