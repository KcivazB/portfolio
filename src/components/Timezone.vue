<template>
  <div class="Timezone justify-center items-center">
    <div class="text-xl text-white font-bold p-2"> {{ $t('timezone_header') }} </div>
    <div class="text-2xl text-white text-center"> {{ formattedTime }} </div>
  </div>
</template>

<script>
export default {
  name: 'Timezone',
  data() {
    return {
      formattedTime: ''
    };
  },
  created() {
    this.updateTime();
  },
  methods: {
    updateTime() {
      setInterval(() => {
        const now = new Date();
        this.formattedTime = now.toLocaleString("en-EN", { timeZone: "Europe/Paris", hour: "2-digit", minute: "2-digit", second: "2-digit" });
      }, 1000);
    }
  }
}
</script>

<style>
.Timezone {
  grid-area: Timezone;
}
</style>
