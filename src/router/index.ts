import Home from '@/views/Home.vue'
import Page from '@/views/Page.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/page',
      component: Page
    }
  ]
})

export default router
