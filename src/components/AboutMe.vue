<template>
  <div class="AboutMe text-justify">
    <div class="profile max-h-full">
      <h2 class="font-bold left-0 text-2xl">{{ $t('aboutme_header') }}</h2>
      <div class="description-container">
        <p class="text-sm py-2">{{ $t('aboutme_desc') }}</p>
      </div>
      <div class="more-container">
        <p class="left-0 text-sm">{{ $t('aboutme_more') }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutMe',
  data() {
    return {
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
