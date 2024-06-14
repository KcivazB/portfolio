<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <div id="App" class="">
    <div class="container lg:h-screen w-screen lg:p-5">
      <Hello class="card p-5 border-theme hover-border-theme shadow-md bg-stone-950"/>
      <AboutMe class="card p-5 border-theme hover-border-theme shadow-md bg-stone-950"/>
      <Resume class="card p-5 border-theme hover-border-theme shadow-md bg-stone-950"/>
      <Contact class="card p-5 border-theme hover-border-theme shadow-md bg-stone-950"/>
      <Now class="card p-5 border-theme hover-border-theme shadow-md bg-stone-950"/>
      <Playground class="card p-5 border-theme hover-border-theme shadow-md bg-stone-950"/>
      <Countries class="card p-5 border-theme hover-border-theme shadow-md bg-stone-950"/>
      <Timezone class="card p-5 border-theme hover-border-theme shadow-md bg-stone-950"/>
      <Bubbles class="card p-5 border-theme hover-border-theme shadow-md bg-stone-950"/>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import AboutMe from './components/AboutMe.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'
import Now from './components/Now.vue'
import Countries from './components/Countries.vue'
import Timezone from './components/Timezone.vue'
import Bubbles from './components/Bubbles.vue'
import Playground from './components/Playground.vue'

export default {
  name: 'App',
  components: {
    Hello,
    AboutMe,
    Contact,
    Resume,
    Now,
    Countries,
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

</style>
