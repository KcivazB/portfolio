<template>
  <div class="AboutMe">
    <div class="profile max-h-full">
      <h2 class="font-bold left-0 text-2xl">About Me</h2>
      <div class="description-container">
        <p class="text-sm py-2">{{ aboutMe.description }}</p>
      </div>
      <div class="more-container">
        <p class="left-0 text-sm">{{ aboutMe.more }}</p>
      </div>
    </div>
  </div>
</template>

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
}
</script>

<style>
.AboutMe {
  grid-area: AboutMe;
}

.profile {
  overflow-y: auto;
  padding-right: 15px; /* Adjust for scrollbar width */
}

.description-container,
.more-container {
  overflow-y: auto;
  max-height: 100%; /* Adjust as needed */
}

.text-sm {
  font-size: 14px; /* Example font size; adjust as needed */
}
</style>
