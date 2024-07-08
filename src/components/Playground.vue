<script>

export default {
  components: {
  },
  data() {
    return {
    };
  }
}
</script>

<template>
  <router-link :to="{ name: 'Projects' }" class="flex w-full">
    <div class="Playground flex justify-center items-center">
    <div class="text-xl text-white text-center flex items-center justify-between">
        <p class="mx-2">{{ $t('projects_explore') }}</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" alt="Demo" class="w-6 h-6 ml-1">
          <path fill="#FFFFFF" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
        </svg>
      </div>
    </div>
  </router-link>
</template> 
<style>
  .Playground { grid-area: Playground; }
</style>