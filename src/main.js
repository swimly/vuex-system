// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueHead from 'vue-head'
import Toasted from 'vue-toasted'
Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(Toasted, {
  theme: 'primary',
  position: 'top-center',
  duration: 2000
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
