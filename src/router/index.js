import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      components: {
        default: require('@/views/login')
      }
    }, {
      path: '/',
      name: 'main',
      components: {
        default: require('@/views/view')
      },
      children: [
        {
          path: '/home',
          name: 'home',
          components: {
            sub: require('@/views/home')
          }
        }, {
          path: '/count',
          name: 'count',
          components: {
            sub: require('@/views/count')
          }
        }, {
          path: '/daily',
          name: 'daily',
          components: {
            sub: require('@/views/daily')
          }
        }, {
          path: '/about',
          name: 'about',
          components: {
            sub: require('@/views/about')
          }
        }, {
          path: '/users/add',
          name: 'usersAdd',
          components: {
            sub: require('@/views/usersAdd')
          }
        }
      ]
    }, {
      path: '*',
      redirect: '/login'
    }
  ]
})
