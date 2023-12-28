import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PortalVue from 'portal-vue'
import { maska } from 'maska';

const app = createApp(App);

app.use(store);
app.use(PortalVue);
app.use(router);
app.directive('maska', maska); 

app.mount('#app');
