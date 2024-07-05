<template>
  <div class="Animation card shadow-lg rounded-lg border border-darkslate-400 hover:border-primary-500">
    <Carousel :autoplay="700" :itemsToShow="3.95" :wrapAround="true" :transition="700" :pauseAutoplayOnHover="true" class="carousel-container" :key="carouselKey">
      <Slide v-for="skill in Skills" :key="skill.name">
        <div class="carousel__item">
          <img :src="`/icons/${skill.icon}`" :alt="skill.name" class="carousel__image">
          <div class="">{{ skill.name }}</div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import Skills from '../assets/skills.json'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
  },
  data(){
    return {
      Skills,
      carouselKey: 0
    }
  }, 
   methods: {
    forceRerender() {
      this.carouselKey += 1;
    },
  },
  watch: {
    '$i18next.language': function(newLang) {
      this.language = newLang;    
      this.forceRerender();  
    }
  }
})

</script>

<style scoped>
.Animation {
  grid-area: Animation;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  display: flex;
}

.carousel-container {
  width: 100%;
  height: 100%;
}

.carousel__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
}

.carousel__image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.carousel__slide {
  padding: 5px;
}


.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.75);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.75);
}

.carousel__slide:not(.carousel__slide--active){
  filter: grayscale(1)
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.75);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.75);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  }
</style>
