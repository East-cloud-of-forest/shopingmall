import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UnmadeView from '../views/UnmadeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/unmade',
    name: 'unmade',
    component: UnmadeView
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/sighup',
    name: 'sighup',
    component: function () {
      return import('../views/SighupView.vue')
    }
  },
  {
    path: '/forgot/:target/:kind',
    name: 'forgot',
    component: function () {
      return import('../views/ForgotView.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
