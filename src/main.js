// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueHead from 'vue-head'
import Toasted from 'vue-toasted'
import VueLocalStorage from 'vue-localstorage'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(VueLocalStorage)
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
