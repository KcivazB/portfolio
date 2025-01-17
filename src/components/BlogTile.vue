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
  <router-link :to="{ name: 'Blog' }" class="flex w-full">
    <div class="BlogTile flex justify-center items-center">
      <div class="text-xl text-white text-center flex items-center justify-between hover-highlighted-text">
        <p class="mx-2 font-bold">{{ $t('blog_explore') }}</p>
        <p class="text-sm">{{ $t('blog_checkout') }}</p>
      </div>
    </div>
  </router-link>
</template>

<style>
  .BlogTile {
    grid-area: BlogTile;
  }
</style>
