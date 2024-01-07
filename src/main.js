import { createApp } from 'vue';
import { router } from './router/index.js';
import App from './App.vue';
import '../src/assets/style/reset.css';
import '../src/assets/style/common.scss';


const app = createApp(App)
app.use(router)
app.mount('#app')
