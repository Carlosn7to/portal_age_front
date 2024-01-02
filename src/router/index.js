import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index.js'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: 'inicio',
        name: 'HomePage',
        component: () => import('@/views/portal/app/main/home/HomePage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'rv/inicio',
        name: 'RVHomePage',
        component: () => import('@/views/portal/app/ageRV/home/HomePage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'rv/b2c/inicio',
        name: 'PresentationModule',
        component: () => import('@/views/portal/app/ageRV/home/PrensetationModule.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'rv/b2c/vendas',
        name: 'MainPage',
        component: () => import('@/views/portal/app/ageRV/b2c/sales/MainPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'rv/b2c/remuneracao',
        name: 'RemunerationPage',
        component: () => import('@/views/portal/app/ageRV/adm/sales/MainPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'rv/retencao/supervisor',
        name: 'SupervisorVision',
        component: () => import('@/views/portal/app/ageRV/retention/supervisor/SupervisorPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'rv/cobranca',
        name: 'AttendantPage',
        component: () => import('@/views/portal/app/ageRV/charge/attendant/attendantPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'dashboards/inicio',
        name: 'DashboardHomePage',
        component: () => import('@/views/portal/app/ageDashboard/home/HomePage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'relatorios/inicio',
        name: 'ReportHomePage',
        component: () => import('@/views/portal/app/ageReport/home/HomePage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'ferramentas/inicio',
        name: 'ToolsHomePage',
        component: () => import('@/views/portal/app/ageTools/home/HomePage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'comunica/inicio',
        name: 'CommunicateHomePage',
        component: () => import('@/views/portal/app/ageCommunicate/home/HomePage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'comunica/novo',
        name: 'CommunicateNew',
        component: () => import('@/views/portal/app/ageCommunicate/newComunicate/createComunicate.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'ajuda/inicio',
        name: 'HelpHomePage',
        component: () => import('@/views/portal/app/ageHelp/home/HomePage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'rv/inicio',
        name: 'RVHomePage',
        component: () => import('@/views/portal/app/ageRV/home/HomePage.vue'),
        meta: { requiresAuth: true },
      },
    ]
  },
  {
    path: '/login',
    component: AuthLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/views/portal/web/LoginPage.vue'),
        meta: { requiresAuth: false },
      },
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/inicio'
  },
  {
    path: '/dashboards',
    redirect: '/dashboards/inicio'
  },
  {
    path: '/rv',
    redirect: '/rv/inicio'
  },
  {
    path: '/rv/b2c',
    redirect: '/rv/b2c/inicio'
  },
  {
    path: '/relatorios',
    redirect: '/relatorios/inicio'
  },
  {
    path: '/ferramentas',
    redirect: '/ferramentas/inicio'
  },
  {
    path: '/comunica',
    redirect: '/comunica/inicio'
  },
  {
    path: '/ajuda',
    redirect: '/ajuda/inicio'
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !store.getters.isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router
