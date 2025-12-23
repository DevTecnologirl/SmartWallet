import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  /**
   * 🔐 ROTAS PÚBLICAS
   */
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/LoginPage.vue'),
      },
    ],
  },
  {
    path: '/register',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/RegisterPage.vue'),
      },
    ],
  },

  /**
   * 🔒 ROTAS PRIVADAS (layout fixo)
   */
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // página padrão após login
      {
        path: '',
        redirect: 'usuarios',
      },

      {
        path: 'usuarios',
        component: () => import('pages/UsuariosPage.vue'),
      },
      {
        path: 'entradas',
        component: () => import('pages/EntradasPage.vue'),
      },
      {
        path: 'despesas',
        component: () => import('pages/DespesasPage.vue'),
      },
      {
        path: 'balanco',
        component: () => import('pages/BalancoPage.vue'),
      },
    ],
  },

  /**
   * ❌ NOT FOUND
   */
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
