import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/age',
    component: () => import('../components/age.vue')
  },
  {
    path: '/gender',
    component: () => import('../components/gender.vue')
  },
  {
    path: '/height',
    component: () => import('../components/height.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
