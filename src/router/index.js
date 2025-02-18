import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { forbidUnauthenticated } from '../router/navigationGuard.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: forbidUnauthenticated,
    },
    {
      path: '/auth',
      name: 'AuthView',
      component: () => import('../views/AuthView.vue'),
    },
  ],
})

export default router
