import { createApp } from 'vue'
import App from './App.vue'
import VueTyped from 'vue3-typed-js';
import "@fontsource/urbanist"; // Defaults to weight 400

import "./output.css"

createApp(App).use(VueTyped).mount('#app')
