<template>
  <div id="ProjectDetail" class="min-h-screen flex text-white p-4 pt-20 lg:p-10 overflow-y-auto">
    <div class="container-projects w-full">
      <!-- Back Button -->
      <router-link to="/projects" class="back-button hover-border-theme absolute top-4 left-4 bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-4 rounded-lg text-sm z-10">
        {{ $t('back') }}
      </router-link>

      <div class="project-card border-theme  hover-border-theme bg-zinc-950 shadow-md rounded-lg p-6 mb-6 lg:mb-0 lg:col-span-3">
        <div class="project-title text-3xl font-bold text-center mb-4">
          {{ project.name }} - {{ project.shortDesc[currentLocale] }}
        </div>
        <div class="project-definition text-sm p-4 bg-zinc-800 rounded-md">
          <p v-for="desc in project.desc[currentLocale]" :key="desc" class="mb-2">{{ desc }}</p>
        </div>
        <ul class="list-disc text-sm pl-6 mt-4">
          <li v-for="functionality in project.functionalities[currentLocale]" :key="functionality">{{ functionality }}</li>
        </ul>
        
        
        <div v-if="project.toCome" class="text-sm mt-4 p-4 bg-zinc-800 rounded-md">
          <div class="font-semibold mb-2">{{ $t('projects_to_come') }}</div>
          <li v-for="toCome in project.toCome[currentLocale]" :key="toCome">{{ toCome }}</li>
        </div>

        <div class="row flex justify-center">
          <div v-if="project.githublink" class="mt-4 flex justify-center m-auto hover-highlighted-text">
            <a :href="project.githublink" target="_blank" class="flex items-center space-x-2">
              <img src="https://github.com/fluidicon.png" alt="GitHub" class="w-6 h-6">
              <span class="m-auto">{{ $t('projects_github') }}</span>
            </a>
          </div>
          <div v-if="project.site" class="mt-4 flex justify-center m-auto hover-highlighted-text">
            <a :href="project.site" target="_blank" class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" alt="Demo" class="w-6 h-6">
                <path fill="#FFFFFF" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
              </svg>
                <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <span class="m-auto">{{ $t('projects_demo') }}</span>
            </a>
          </div>
        </div>

      </div>

      <div v-if="project.site" class="embed-card bg-zinc-950 shadow-md rounded-lg p-6 flex justify-center items-center lg:col-span-4">
        <iframe :src="project.site" frameborder="0" class="iframed rounded-md"></iframe>
      </div>
      <div v-else-if="project.screenshots"  class="embed-card bg-zinc-950 shadow-md rounded-lg p-6 flex justify-center items-center lg:col-span-4">
        <div class="place-content-between">
          <Carousel id="gallery" :items-to-show="1" :wrap-around="false" :autoplay="2500" :transition="700" :pauseAutoplayOnHover="true" v-model="currentSlide">
              <Slide v-for="(screenshot, index) in project.screenshots" :key="index">
                <div class="carousel__item">
                  <img :src="`/rookie_ce/${screenshot.src}`" alt="A rookie chess preview"  @click="showModal = true;screenshotObj=screenshot" ><!-- Implement the show modal and the modal-->
                </div>
              </Slide>
          </Carousel>

          <Carousel
            id="thumbnails"
            :items-to-show="4"
            :wrap-around="true"
            v-model="currentSlide"
            ref="carousel"
            class="mt-5"
          >
            <Slide v-for="(screenshot, index) in project.screenshots" :key="screenshot">
              <div class="carousel__item" @click="slideTo(index)">
                <img :src="`/rookie_ce/${screenshot.src}`" alt="A rookie chess preview">
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>

      <div v-if="project.technos.back && project.technos.back.length" class="technology-card shadow-md rounded-lg p-6 mb-6 lg:mb-0 lg:col-span-3">
        <div class="text-2xl font-semibold mb-4">{{ $t('projects_backend_technos') }}</div>
        <div class="flex">
          <img v-for="tech in project.technos.back" :key="tech" :src="`/icons/${tech}.png`" class="tech-icon max-w-12 max-h-12 mx-auto" :title="tech" :alt="`${tech}`">
        </div>
      </div>
      <div v-if="project.technos.front && project.technos.front.length" class="technology-card shadow-md rounded-lg p-6 mb-6 lg:mb-0 lg:col-span-3">
        <div class="text-2xl font-semibold mb-4">{{ $t('projects_frontend_technos') }}</div>
        <div class="flex">
          <img v-for="tech in project.technos.front" :key="tech" :src="`/icons/${tech}.png`" class="tech-icon max-w-12 max-h-12 mx-auto" :title="tech" :alt="`${tech}`">
        </div>
      </div>
      <div v-if="project.technos.other && project.technos.other.length" class="technology-card shadow-md rounded-lg p-6 mb-6 lg:mb-0 lg:col-span-3">
        <div class="text-2xl font-semibold mb-4">{{ $t('projects_other_technos') }}</div>
        <div class="flex">
          <img v-for="tech in project.technos.other" :key="tech" :src="`/icons/${tech}.png`" class="tech-icon max-w-12 max-h-12 mx-auto" :title="tech" :alt="`${tech}`">
        </div>
      </div>
    </div>
  </div>

  <ImageModal v-if="showModal" @close="showModal = false" :imgSrc="`/rookie_ce/${screenshotObj.src}`" :imgDesc="screenshotObj.desc[currentLocale]"/>

</template>

<script>
import i18next from 'i18next';
import { Carousel, Slide } from 'vue3-carousel'
import ImageModal from './ImageModal.vue';
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'ProjectDetail',
  props: {
    project: {
      type: Object,
      required: true,
    }
  },
  data: () => ({
    currentSlide: 0,
    showModal: false,
    screenshotObj: null
  }),
  computed: {
    currentLocale() {
      return i18next.language.split('-')[0];
    }
  },
  components: {
    Carousel,
    Slide,
    ImageModal
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
  },
};
</script>

<style scoped>
.tech-icon {
  height: auto;
}

.iframed {
  width: 100vw;
  height: 60vh;
}

.back-button {
  z-index: 10;
}

/* LARGE SCREENS */
@media (min-width: 1024px) {
  .container-projects {
    display: grid;
    padding-top: 0%;
    margin-left: 5%;
    margin-right: 5%;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 15px;
    grid-template-areas: 
        "Project Project Project Project Embed Embed Embed Embed Back Back Back"
        "Project Project Project Project Embed Embed Embed Embed Front Front Front"
        "Project Project Project Project Embed Embed Embed Embed Other Other Other";
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
