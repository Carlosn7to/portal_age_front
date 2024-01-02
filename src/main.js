import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueApexCharts from "vue3-apexcharts";
import PortalVue from 'portal-vue';
import { maska } from 'maska';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(PortalVue);
app.directive('maska', maska);
app.use(VueApexCharts);
app.mount('#app');
