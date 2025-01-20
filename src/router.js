import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import ProjectDetail from './components/ProjectDetail.vue';
import ProjectsList from './components/ProjectsList.vue';
import Blog from './components/Blog.vue';
import Article from './components/Article.vue';
import projects from './assets/projects.json';

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
    props: route => ({ id: route.params.id })
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: false,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
