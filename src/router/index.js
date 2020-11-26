import { createRouter, createWebHistory } from 'vue-router'

import Today from '@/views/Today.vue'


const routes = [
  {
    path: '/',
    name: 'today',
    component: Today
  },
  {
    path: '/tomorrow',
    name: 'tomorrow',
    component: () => import('../views/Tomorrow.vue')
  },
  {
    path: '/Month',
    name: 'Month',
    component: () => import('../views/Month.vue')
  },
  {
    path: '/today',
    name: 'today',
    component: () => import('../views/Today.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
