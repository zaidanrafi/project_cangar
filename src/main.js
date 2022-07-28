import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import './assets/tailwind.css'
//const VueEllipseProgress = require('vue-ellipse-progress');
//import {VueEllipseProgress} from 'vue-ellipse-progress';

createApp(App).use(store).use(router).mount('#app')
