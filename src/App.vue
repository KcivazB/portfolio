<template>
  <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0">  
  <router-view></router-view>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {

        }
    },
    mounted() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.className = savedTheme;
        }
    },
}
</script>