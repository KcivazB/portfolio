import { createApp } from 'vue'
import App from './App.vue'
import VueTyped from 'vue3-typed-js';
import i18n from './i18n'
import "@fontsource/urbanist"; // Defaults to weight 400
import router from './router';
import "./output.css"

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(VueTyped)
app.mount('#app')