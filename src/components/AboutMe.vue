<script>
const aboutMe = {
    description: "I am a dedicated 27-year-old full stack developer specializing in backend development with a strong inclination towards exploring and integrating new frontend technologies and modern JavaScript frameworks.",
    more: "Outside of coding, I am passionate about cars and gaming — both board games and video games. As a focused and strategic player, I continuously seek the best approaches to challenges."
}

export default {
    name: 'AboutMe',
    data() {
      return {
        aboutMe
      };
    },
    methods: {
    },
  }
</script>

<template>
  <div class="AboutMe">
    <div class="profile">
        <h2 class="font-bold left-0 text-2xl">About Me</h2>
        <p class="text-sm py-2">{{ aboutMe.description }}</p>
    </div>
    <br>
    <p class="left-0 text-sm">{{ aboutMe.more }}</p>
  </div>
</template>

<style>
.AboutMe { 
  grid-area: AboutMe;
}
</style>
