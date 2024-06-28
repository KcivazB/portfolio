<template>
  <div id="ProjectDetail" class="min-h-screen flex bg-stone-950 text-white p-4 pt-20 lg:p-10 overflow-y-auto">
    <div class="container-projects w-full">
      <!-- Back Button -->
      <router-link to="/projects" class="back-button hover-border-theme absolute top-4 left-4 bg-stone-800 hover:bg-stone-700 text-white py-2 px-4 rounded-lg text-sm z-10">
        Back
      </router-link>

      <div class="project-card bg-stone-950 shadow-md rounded-lg p-6 mb-6 lg:mb-0 lg:col-span-3">
        <div class="project-title text-3xl font-bold text-center mb-4">{{ project.name }} - {{ project.shortDesc }}</div>
        <div class="project-definition text-sm p-4 bg-stone-800 rounded-md">
          <p v-for="desc in project.desc" :key="desc" class="mb-2">{{ desc }}</p>
        </div>
        <ul class="list-disc text-sm pl-6 mt-4">
          <li v-for="functionality in project.functionalities" :key="functionality">{{ functionality }}</li>
        </ul>
        <div class="text-sm mt-4 p-4 bg-stone-800 rounded-md">
          <div class="font-semibold mb-2">Development and Innovation:</div>
          <p>{{ project.lastDesc }}</p>
        </div>
      </div>

      <div class="embed-card bg-stone-950 shadow-md rounded-lg p-6 flex justify-center items-center lg:col-span-3">
        <iframe :src="project.site" frameborder="0" class="iframed rounded-md"></iframe>
      </div>
      <div v-if="project.technos.back && project.technos.back.length" class="technology-card shadow-md rounded-lg p-6 mb-6 lg:mb-0 lg:col-span-1">
        <div class="text-2xl font-semibold mb-4">Back-end Technologies</div>
        <div class="flex">
          <img v-for="tech in project.technos.back" :key="tech" :src="`/icons/${tech}.png`" class="tech-icon w-12 mx-auto" :alt="`${tech}`">
        </div>
      </div>
      <div v-if="project.technos.front && project.technos.front.length" class="technology-card shadow-md rounded-lg p-6 mb-6 lg:mb-0 lg:col-span-1">
        <div class="text-2xl font-semibold mb-4">Front-end Technologies</div>
        <div class="flex">
          <img v-for="tech in project.technos.front" :key="tech" :src="`/icons/${tech}.png`" class="tech-icon w-12 mx-auto" :alt="`${tech}`">
        </div>
      </div>
      <div v-if="project.technos.other && project.technos.other.length" class="technology-card shadow-md rounded-lg p-6 mb-6 lg:mb-0 lg:col-span-1">
        <div class="text-2xl font-semibold mb-4">Other Technologies</div>
        <div class="flex">
          <img v-for="tech in project.technos.other" :key="tech" :src="`/icons/${tech}.png`" class="tech-icon w-12 mx-auto" :alt="`${tech}`">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.tech-icon {
  height: auto;
}

.iframed {
  width: 100vw;
  height: 60vh;
}

/* LARGE SCREENS */
@media (min-width: 1024px) {
  .container-projects {
    display: grid;
    padding-top: 0%;
    margin-left: 5%;
    margin-right: 5%;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 15px;
    grid-template-areas: 
        "Project Project Project Embed Embed Embed Back"
        "Project Project Project Embed Embed Embed Front"
        "Project Project Project Embed Embed Embed Other";
  }

  .project-card {
    grid-area: Project;
  }
  .technology-card:nth-child(1) {
    grid-area: Back;
  }
  .technology-card:nth-child(2) {
    grid-area: Front;
  }
  .technology-card:nth-child(3) {
    grid-area: Other;
  }
  .embed-card {
    grid-area: Embed;
    min-height: 50vh;
  }
  .iframed {
    width: 100%;
    height: 100%;
  }
}
</style>
