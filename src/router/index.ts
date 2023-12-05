import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/refs',
      name: 'refs',
      component: () => import('../views/Refs.vue'),
    },
    {
      path: '/refs-dom',
      name: 'refs-dom',
      component: () => import('../views/RefsDOM.vue'),
    },
    {
      path: '/props',
      name: 'props',
      component: () => import('../views/Props.vue'),
    },
    {
      path: '/emits',
      name: 'emits',
      component: () => import('../views/Emits.vue'),
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/Computed.vue'),
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/Watch.vue'),
    },
    {
      path: '/lifecycle-hooks',
      name: 'lifecycle-hooks',
      component: () => import('../views/LifecycleHooks.vue'),
    },
    {
      path: '/directives',
      name: 'directives',
      component: () => import('../views/CustomDirective.vue'),
    },
  ],
})

export default router
