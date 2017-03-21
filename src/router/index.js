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
      path: '/register',
      name: 'register',
      components: {
        default: require('@/views/register')
      }
    }, {
      path: '/',
      name: 'main',
      redirect: '/login',
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
          path: '/users',
          name: 'users',
          components: {
            sub: require('@/views/users')
          }
        }, {
          path: '/projects',
          name: 'projects',
          components: {
            sub: require('@/views/projects')
          }
        }, {
          path: '/articles',
          name: 'articles',
          components: {
            sub: require('@/views/articles')
          }
        }, {
          path: '/photos',
          name: 'photos',
          components: {
            sub: require('@/views/photos')
          }
        }, {
          path: '/setting',
          name: 'setting',
          components: {
            sub: require('@/views/setting')
          }
        }, {
          path: '/manage',
          name: 'manage',
          components: {
            sub: require('@/views/manage')
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
        }, {
          path: '/editInfo',
          name: 'editInfo',
          components: {
            sub: require('@/views/editInfo')
          }
        }
      ]
    }, {
      path: '/404',
      name: 'notfound',
      components: {
        default: require('@/views/notfound')
      }
    }, {
      path: '*',
      redirect: '/404'
    }
  ]
})
