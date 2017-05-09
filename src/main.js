// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/bootstrap.css'
import './assets/js/bootstrap.js'
import './components/globalConfig'
import './assets/css/nprogress.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import VueResource from 'vue-resource'
import NProgress from 'nprogress'

Vue.config.productionTip = false
NProgress.configure({trickleRate: 0.05, trickleSpeed: 100});
/* eslint-disable no-new */
Vue.use(VueResource)
Vue.use(router)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

router.beforeEach((to, from, next) => {

  if (to.meta.requireAuth) {
    if (window.sessionStorage.getItem("sellercube_token")) {
      NProgress.start();
      console.log("sessionStorage 的token"+window.sessionStorage.getItem("sellercube_token"))
      next();
    } else {
      next({
        path: '/',
        query: {redirect: to.path}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

router.afterEach((to,from,next) => {
  NProgress.done();
});

Vue.http.interceptors.push((request, next) => {
  NProgress.start();
  next((response)=>{
    NProgress.done();
  });
});
