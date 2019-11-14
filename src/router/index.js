import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lab from '../views/Lab.vue'
import Farm from '../views/Farm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/farm',
    name: 'farm',
    component: Farm
  },
  {
    path: '/lab',
    name: 'lab',
    component: Lab
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
