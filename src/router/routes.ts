import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/Index.vue') },
      { path: '/informacion-abonados', name: 'Abonados', component: () => import('pages/InformacionAbonados.vue') },
      { path: '/neutralidad-red', name: 'Neutralidad', component: () => import('pages/NeutralidadRed.vue') },
      { path: '/formas-pago', name: 'Pago', component: () => import('pages/FormasPago.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
