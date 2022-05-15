import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UnmadeView from '../views/UnmadeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
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
    },
    meta: {
      hideAppbar: true
    },
    children: [
      {
        path: '/choice',
        name: 'sighupc1',
        component: function() {
          return import('../components/sighup/KindComponent.vue')
        },
        meta: {
          hideAppbar: true
        },
      },
      {
        path: '/sighup/:kind',
        name: 'sighupc2',
        component: function() {
          return import('../components/sighup/FormComponent.vue')
        },
        meta: {
          hideAppbar: true
        },
      },
      {
        path: '/welcome',
        name: 'sighupc3',
        component: function() {
          return import('../components/sighup/WelcomeComponent.vue')
        },
        meta: {
          hideAppbar: true
        },
      }
    ]
  },
  {
    path: '/forgot/:target/:kind',
    name: 'forgot',
    component: function () {
      return import('../views/ForgotView.vue')
    }
  },
  {
    path: '/product/:productId',
    name: 'product',
    component: function () {
      return import('../views/ProductView.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() { 
    return { x: 0, y: 0 } 
  },
})

export default router
