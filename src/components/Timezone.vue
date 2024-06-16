<template>
      <div class="Timezone justify-center items-center">
        <div class="text-xl text-white px-2 py-2 font-bold"> Timezone </div>
        <div class="text-2xl text-white text-center"> {{ time }} </div>
      </div>
</template>

<script>
export default {
  name: 'Timezone',
  data() {
    return {
      time: new Date().toLocaleString("en-EN", { timeZone: "Europe/Paris", hour:"2-digit", minute:"2-digit", second:"2-digit" })
    };
  },
  created() {
    this.updateTime();
  },
  methods: {
    updateTime() {
      setInterval(() => {
        this.time = new Date().toLocaleString("en-EN", { timeZone: "Europe/Paris", hour:"2-digit", minute:"2-digit", second:"2-digit" });
      }, 1000);
    }
  }
}
</script>

<style>
    .Timezone { grid-area: Timezone; }
</style>
