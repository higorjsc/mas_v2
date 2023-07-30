import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/homepage.vue')
  },
  {
    path: '/cardozo',
    name: 'cardozo',
    component: () => import('../views/cardozo.vue')
  },
  {
    path: '/vergne',
    name: 'vergne',
    component: () => import('../views/vergne.vue')
  },
  {
    path: '/moser',
    name: 'moser',
    component: () => import('../views/moser.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
