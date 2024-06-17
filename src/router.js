// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Palbro from './components/Palbro.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/palbro', component: Palbro },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
