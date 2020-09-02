import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/find',
    name: 'Find',
    component: () => import('../views/Find/index.vue')
  },
  {
    path: '/shiyq',
    name: 'Shiyq',
    component: () => import('../views/Shiyq/index.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Login/Register.vue')
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const arr = ['/', '/login', '/register']

router.beforeEach((to, from, next) => {
  const isTure = arr.some(item => item === to.path)

  if (isTure) {
    next()
  } else {
    if (localStorage.getItem('username')) {
      next()
    } else {
      next('/login')
    }
  }

})

export default router
