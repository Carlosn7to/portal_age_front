import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PortalVue from 'portal-vue'

createApp(App).use(store).use(PortalVue).use(router).mount('#app');

