// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import ProjectDetail from './components/ProjectDetail.vue';
import ProjectsList from './components/ProjectsList.vue';
import projects from './assets/projects.json';

import Blog from './components/Blog.vue';
import Article from './components/Article.vue';
import articles from './assets/articles.json';

const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: Home 
  },
  { 
    path: '/projects',
    name: 'Projects',
    component: ProjectsList,
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: route => ({ project: projects[route.params.id] })
  },
  { 
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/articles/:id',
    name: 'Article',
    component: Article,
    props: route => ({ article: articles.find(a => a.id === parseInt(route.params.id)) })
  }
];



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si une position sauvegardée existe (par exemple, lors du retour en arrière), on la renvoie
    if (savedPosition) {
      return savedPosition;
    } else {
      // Sinon, on force un scroll en haut de la page
      return { top: 0 };
    }
  }
});

export default router;
