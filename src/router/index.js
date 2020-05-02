import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/user/login'
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/views/user/index'),
      redirect: '/user/login',
      children: [
        {
          path: 'login',
          name: 'UserLogin',
          component: () => import('@/views/user/login/index')
        },
        {
          path: 'register',
          name: 'UserRegister',
          component: () => import('@/views/user/register/index')
        }
      ]
    }
  ]
})
