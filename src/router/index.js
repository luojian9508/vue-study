import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'Login'}
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('@/views/auth/index'),
      redirect: {name: 'Login'},
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/views/auth/login')
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('@/views/auth/register')
        }
      ]
    },
    {
      path: '/nav',
      name: 'Nav',
      component: () => import('@/layout/index'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/views/home/index')
        },
        {
          path: 'module1',
          name: 'Module1',
          component: () => import('@/views/module1/index')
        },
        {
          path: 'module2',
          name: 'Module2',
          redirect: {name: 'Module2Index'},
          component: () => import('@/views/module2/index'),
          children: [
            {
              path: 'home',
              name: 'Module2Home',
              component: () => import('@/views/module2/home')
            },
            {
              path: 'module2_1',
              name: 'Module2_1',
              component: () => import('@/views/module2/module2_1')
            }
          ]
        },
        {
          path: 'user',
          name: 'User',
          component: () => import('@/views/user/index'),
          redirect: {name: 'UserInfo'},
          children: [
            {
              path: 'info',
              name: 'UserInfo',
              component: () => import('@/views/user/info')
            }
          ]
        }

      ]
    }
  ]
})
