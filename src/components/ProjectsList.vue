<template>
    <div id="ProjectsList" class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 pt-20 lg:p-10 overflow-y-auto">
      <div class="container-list w-full max-w-screen-lg">
        <router-link to="/projects" class="back-button hover-border-theme absolute top-4 left-4 bg-stone-800 hover:bg-stone-700 text-white py-2 px-4 rounded-lg text-sm z-10">
        Back
      </router-link>
  
        <div class="font-bold text-5xl text-center"> Projects List </div>
        <div class="grid grid-cols-1 gap-4 mt-10">
          <div 
            v-for="project in projects" 
            :key="project.name" 
            class="card p-5 border-theme hover-border-theme shadow-md bg-stone-950 text-center flex items-center justify-center">
            <router-link :to="{ name: 'ProjectDetail', params: { id: project.id } }" class="flex w-full">
              <div class="logo-container flex items-center justify-center w-1/3">
                <img class="logo-icon" :src="`/logos/${project.icon}`" alt="Project Logo">
              </div>
              <div class="text-container w-2/3 px-4">
                <h2 class="text-2xl font-bold mb-2 highlighted-text">{{ project.name }}</h2>
                <p>{{ project.shortDesc }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import projects from '../assets/projects.json';
  
  export default {
    name: 'ProjectsList',
    data() {
      return {
        projects
      }
    }
  }
  </script>
  
  <style scoped>
  .container-list {
    width: 100%;
    max-width: 1200px; /* Adjust as needed based on your design */
  }
  
  .card {
    width: 100%; /* Ensures cards take full width of their container */
    max-width: 600px; /* Adjust max-width as per your design */
    margin-left: auto;
    margin-right: auto;
  }
  
  .logo-container {
    /* Flex container for logo, occupying 1/3 of the card width */
    width: 100%;
  }
  
  .logo-icon {
    /* Adjust the max-width or height as per your logo size requirements */
    max-width: 30%;
    height: auto;
  }
  
  .text-container {
    /* Flex container for text content, occupying 2/3 of the card width */
    width: 100%;
  }
  
  .highlighted-text {
    color: #fbbf24; /* Example of highlighting text */
  }
  </style>
  