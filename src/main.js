import { createApp } from 'vue';
import { router } from './router/index.js';
import App from './App.vue';
import '../src/assets/style/reset.scss';
import '../src/assets/style/common.scss';
import ViewModule from './module/ViewModule.js';

const app = createApp(App);

app.use(router);
app.use(ViewModule);
app.mount('#app');
