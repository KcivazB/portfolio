<template>
      <div id="Home" class="">
        <div class="container lg:h-screen w-screen lg:p-10">
            <Hello class="card p-5 border-theme hover-border-theme shadow-md bg-zinc-950"/>
            <AboutMe class="card p-5 border-theme hover-border-theme shadow-md bg-zinc-950"/>
            <Contact class="card p-5 border-theme hover-border-theme shadow-md bg-zinc-950"/>
            <Resume class="card p-5 border-theme hover-border-theme shadow-md bg-zinc-950"/>
            <Now class="card p-5 border-theme hover-border-theme shadow-md bg-zinc-950"/>
            <Playground class="card p-5 border-theme hover-border-theme shadow-md bg-zinc-950"/>
            <Animation class="card border-theme hover-border-theme shadow-md bg-zinc-950"/>
            <Bubbles class="card p-2 border-theme hover-border-theme shadow-md bg-zinc-950"/>
            <Timezone class="card p-2 border-theme hover-border-theme shadow-md bg-zinc-950"/>
        </div>
  </div>
 
</template>

<script>
import Hello from './Hello.vue'
import AboutMe from './AboutMe.vue'
import Resume from './Resume.vue'
import Contact from './Contact.vue'
import Now from './Now.vue'
import Animation from './Animation.vue'
import Timezone from './Timezone.vue'
import Bubbles from './Bubbles.vue'
import Playground from './Playground.vue'

export default {
  name: 'Home',
  components: {
    Hello,
    AboutMe,
    Contact,
    Resume,
    Now,
    Animation,
    Timezone,
    Bubbles,
    Playground,
  },
  data() {
    return {
      
    }
  },
  mounted() {
  },
  methods: {
    
  },
}
</script>

<style>

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
    border-radius: 10px;
    color: #d6d6d6;
    opacity: 0; /* Ensure cards are hidden initially */
    animation: slideIn 0.5s ease-out forwards; /* Apply the animation */
  }

  /* ANIMATION MOBILE */
  .card:nth-child(1) {
    animation-delay: 0s;
  }
  .card:nth-child(2) {
    animation-delay: 0.5s;
  }
  .card:nth-child(8) {
    animation-delay: 1s;
  }
  .card:nth-child(4) {
    animation-delay: 1.5s;
  }
  .card:nth-child(5) {
    animation-delay: 2s;
  }
  .card:nth-child(6) {
    animation-delay: 2.5s;
  }
  .card:nth-child(7) {
    animation-delay: 3s;
  }
  .card:nth-child(3) {
    animation-delay: 3.5s;
  }
  .card:nth-child(9) {
    animation-delay: 4s;
  }

/* ANIMATION DESKTOP */
@media (min-width: 1024px) {
    .card:nth-child(1) {
    animation-delay: 0s;
  }
  .card:nth-child(2) {
    animation-delay: 0.5s;
  }
  .card:nth-child(3) {
    animation-delay: 1s;
  }
  .card:nth-child(4) {
    animation-delay: 1.5s;
  }
  .card:nth-child(5) {
    animation-delay: 2s;
  }
  .card:nth-child(6) {
    animation-delay: 2.5s;
  }
  .card:nth-child(7) {
    animation-delay: 3s;
  }
  .card:nth-child(8) {
    animation-delay: 3.5s;
  }
  .card:nth-child(9) {
    animation-delay: 4s;
  }
}
</style>

