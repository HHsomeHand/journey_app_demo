import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('../views/HomeView/HomeView.vue')
    },
    {
      path: '/favor',
      component: () => import('../views/FavorView/FavorView.vue')
    },
    {
      path: '/order',
      component: () => import('../views/OrderView/OrderView.vue')
    },
    {
      path: '/message',
      component: () => import('../views/MessageView/MessageView.vue')
    },
    {
      path: '/city',
      component: () => import('../views/CityView/CityView.vue'),
      meta: {
        isHiddenTabBar: true,
      },
    },
    {
      path: '/search',
      component: () => import('../views/SearchView/SearchView.vue'),
      meta: {
        isHiddenTabBar: true,
      },
    },
    {
      path: '/detail/:houseId',
      component: () => import('../views/DetailView/DetailView.vue'),
      meta: {
        isHiddenTabBar: true,
      },
    },
  ]
})

export default router
