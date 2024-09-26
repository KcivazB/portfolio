<template>
  <div id="ProjectsList" class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 pt-20 lg:p-10 overflow-y-auto">
    <div class="container-list w-full max-w-screen-lg">
      <router-link to="/" class="back-button hover-border-theme absolute top-4 left-4 bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-4 rounded-lg text-sm z-10">
        {{ $t('back') }}
      </router-link>

      <div class="font-bold text-5xl text-center">{{ $t('projects_list') }}</div>
      <div class="grid grid-cols-1 gap-4 mt-10">
        <div 
          v-for="project in projects" 
          :key="project.id" 
          class="card p-5 border-theme hover-border-theme shadow-md bg-zinc-950 text-center flex items-center justify-center">
          <router-link :to="{ name: 'ProjectDetail', params: { id: project.id } }" class="flex w-full flex-row items-center">
            <div class="logo-container flex items-center justify-center w-1/3">
              <img class="logo-icon" :src="`/logos/${project.icon}`" alt="Project Logo"  :title="project.name">
            </div>
            <div class="text-container w-2/3 px-4">
              <p class="text-2xl font-bold mb-2">{{ project.name }}</p>
              <p>{{ project.shortDesc[currentLocale] }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '../assets/projects.json';
import i18next from 'i18next';

export default {
  name: 'ProjectsList',
  data() {
    return {
      projects
    }
  },
  computed: {
    currentLocale() {
      return i18next.language.split('-')[0];
    }
  }
};
</script>

<style scoped>
.container-list {
  width: 100%;
  max-width: 1200px; 
}

@keyframes slideIn {
    from {
      transform: translateY(10%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
.card {
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  color: #d6d6d6;
  opacity: 0;
  animation: slideIn 0.5s ease-out forwards;
}

/* ANIMATION MOBILE */
.card:nth-child(1) {  /* HELLO */
  animation-delay: 0s;
}
.card:nth-child(2) { /* ABOUTME */
  animation-delay: 0.5s;
}
.card:nth-child(3) { /* BUBBLES */
  animation-delay: 1s;
}
  


.logo-container {
  width: 100%;
}

.logo-icon {
  max-width: 30%;
  height: auto;
}

.text-container {
  width: 100%;
}

.highlighted-text {
  color: #fbbf24;
}
</style>
