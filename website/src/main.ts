import { createApp } from 'vue'
import './style.css'
import router from './router';
import App from './App.vue'

const APP = createApp(App);

APP.use(router);

APP.mount('#app');