import { createRouter, createWebHashHistory } from 'vue-router'
import PowerView from '@/views/power-view.vue'
import NotFound from '@/views/notFound.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'powerview',
      component: PowerView,
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
})

export default router
