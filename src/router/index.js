import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'main',
      component: main
    }, {
      path: '/count',
      name: 'count',
      component: require('@/views/count')
    }
  ]
})
