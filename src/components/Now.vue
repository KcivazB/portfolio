<template>
  <div class="Now">
    <div class="top-row w-full flex items-center justify-between">
      <p class="text-2xl">{{$t('now_header')}}</p>
      <div class="ring-container relative">
        <div class="ringring"></div>
        <div class="circle"></div>
      </div>
    </div>
    <div class="text-sm py-2 text-justify">
      {{ $t('now_current_activity') }}
      <ul class="projects list-disc px-5">
        <div v-for="project in projects" :key="project.id">
          <li class="hover-highlighted-text"> 
            <router-link :to="{ name: 'ProjectDetail', params: { id: project.id } }" class="flex w-full">{{ project.name }}</router-link>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>
  
<script>
import projects from '../assets/projects.json';

export default {
  name: 'Now',
  data() {
    return {
      projects
    }
  }
};
</script>

<style scoped>
.Now {
  grid-area: Now;
}

.ring-container {
  position: relative;
  display: flex;
  align-items: center;
}

.circle {
  width: 10px;
  height: 10px;
  background-color: #62bd19;
  border-radius: 50%;
}

.ringring {
  border: 3px solid #62bd19;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulsate 1s ease-out infinite;
}

@keyframes pulsate {
  0% {
    transform: translate(-50%, -50%) scale(0.1);
    opacity: 0.0;
  }
  50% {
    opacity: 1.0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.0;
  }
}
</style>
