import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/portal/app/main/home/HomePage.vue'
import guard from '/services/middleware/Auth.js'
import LoginPage from "@/views/portal/web/LoginPage.vue";

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/inicio',
    name: 'HomePage',
    component: HomePage,
    beforeEnter: [
      guard.auth,
    ]
  },
  {
    path: '/rv/inicio',
    name: 'RVHomePage',
    component: () => import('@/views/portal/app/ageRV/home/HomePage.vue'),
    beforeEnter: [
      guard.auth,
    ]
  },
  {
    path: '/rv/b2c/inicio',
    name: 'PresentationModule',
    component: () => import('@/views/portal/app/ageRV/home/PrensetationModule.vue'),
    beforeEnter: [
      guard.auth,
    ]
  },
  {
    path: '/rv/b2c/vendas',
    name: 'SalesPage',
    component: () => import('@/views/portal/app/ageRV/b2c/sales/SalesPage.vue'),
    beforeEnter: [
      guard.auth,
    ]
  },
  {
    path: '/dashboards/inicio',
    name: 'DashboardHomePage',
    component: () => import('@/views/portal/app/ageDashboard/home/HomePage.vue'),
    beforeEnter: [
      guard.auth,
    ]
  },
  {
    path: '/relatorios/inicio',
    name: 'ReportHomePage',
    component: () => import('@/views/portal/app/ageReport/home/HomePage.vue'),
    beforeEnter: [
      guard.auth,
    ]
  },
  {
    path: '/ferramentas/inicio',
    name: 'ToolsHomePage',
    component: () => import('@/views/portal/app/ageTools/home/HomePage.vue'),
    beforeEnter: [
      guard.auth,
    ]
  },
  {
    path: '/comunica/inicio',
    name: 'CommunicateHomePage',
    component: () => import('@/views/portal/app/ageCommunicate/home/HomePage.vue'),
    beforeEnter: [
      guard.auth,
    ]
  },
  {
    path: '/ajuda/inicio',
    name: 'HelpHomePage',
    component: () => import('@/views/portal/app/ageHelp/home/HomePage.vue'),
    beforeEnter: [
      guard.auth,
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/inicio' // Redireciona para a rota principal (Home) quando a rota não existe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
