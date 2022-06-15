import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/example1.vue'


const routes = [
  {
    path: '/',
    name: 'example1',
    component: Home
  },
  {
    path: '/example2',
    name: 'example2',
    component: () => import('../views/example2.vue')
  },
  {
    path: '/example3',
    name: 'example3',
    component: () => import('../views/example3.vue')
  },
  {
    path: '/example4',
    name: 'example4',
    component: () => import('../views/example4.vue')
  },
  {
    path: '/example5',
    name: 'example5',
    component: () => import('../views/example5.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
