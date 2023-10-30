import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/portal/app/main/home/HomePage.vue'
import guard from '/services/middleware/Auth.js'

const routes = [

  {
    path: '/inicio',
    name: 'HomePage',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      guard.auth(to, from, next);

      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        import('@/views/portal/mobile/main/HomePageMobile.vue').then((module) => {
          to.matched[0].components.default = module.default;
          next();
        });
      } else {
        next();
      }
    },
  },
  {
    path: '/rv/inicio',
    name: 'RVHomePage',
    component: () => import('@/views/portal/app/ageRV/home/HomePage.vue'),
    beforeEnter: (to, from, next) => {
      guard.auth(to, from, next);

      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        import('@/views/portal/mobile/AgeRV/home/HomePageMobile.vue').then((module) => {
          to.matched[0].components.default = module.default;
          next();
        });
      } else {
        next();
      }
    },
  },
  {
    path: '/rv/b2c/inicio',
    name: 'PresentationModule',
    component: () => import('@/views/portal/app/ageRV/home/PrensetationModule.vue'),
    beforeEnter: (to, from, next) => {
      guard.auth(to, from, next);

      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        import('@/views/portal/mobile/AgeRV/home/PresentationModule.vue').then((module) => {
          to.matched[0].components.default = module.default;
          next();
        });
      } else {
        next();
      }
    },
  },
  {
    path: '/rv/b2c/vendas',
    name: 'MainPage',
    component: () => import('@/views/portal/app/ageRV/b2c/sales/MainPage.vue'),
    beforeEnter: [
      guard.auth,
    ]
  },
  {
    path: '/rv/b2c/remuneracao',
    name: 'RemunerationPage',
    component: () => import('@/views/portal/app/ageRV/adm/sales/MainPage.vue'),
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
    beforeEnter: (to, from, next) => {
      guard.auth(to, from, next);

      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        import('@/views/portal/mobile/ageReport/home/HomePage.vue').then((module) => {
          to.matched[0].components.default = module.default;
          next();
        });
      } else {
        next();
      }
    },
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
    beforeEnter: (to, from, next) => {
      guard.auth(to, from, next);

      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        import('@/views/portal/mobile/ageComunicate/home/HomePageMobile.vue').then((module) => {
          to.matched[0].components.default = module.default;
          next();
        });
      } else {
        next();
      }
    },
  },
  {
    path: '/comunica/novo',
    name: 'CommunicateNew',
    component: () => import('@/views/portal/app/ageCommunicate/newComunicate/createComunicate.vue'),
    beforeEnter: (to, from, next) => {
      guard.auth(to, from, next);

      // const isMobile = window.innerWidth <= 768;

      // if (isMobile) {
      //   import('@/views/portal/mobile/ageComunicate/home/HomePageMobile.vue').then((module) => {
      //     to.matched[0].components.default = module.default;
      //     next();
      //   });
      // } else {
      //   next();
      // }
    },
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
    path: '/atendimento/inicio',
    name: 'AttHomePage',
    component: () => import('@/views/portal/app/ageAttendant/HomePage.vue'),
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
