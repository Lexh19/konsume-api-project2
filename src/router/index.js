import { createRouter, createWebHistory } from 'vue-router'
import AppContent from '../views/AppContent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppContent
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AppContent.vue')
    }
  ]
})

export default router
