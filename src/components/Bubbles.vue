<script>
var colors = [
    {
        theme:"theme-cyan",
        name:"cyan-600",
        fill:"fill-cyan-600"
    },
    {
        theme:"theme-pink",
        name:"pink-600",
        fill:"fill-pink-600"
    },
    {
        theme:"theme-orange",
        name:"orange-600",
        fill:"fill-orange-600"
    },
    {
        theme:"theme-green",
        name:"green-600",
        fill:"fill-green-600"
    },
    {
        theme:"theme-purple",
        name:"purple-600",
        fill:"fill-purple-600"
    }
]

export default {
    name: 'App',
    data() {
        return {
            colors
        }
    },
    mounted() {

    },
    methods: {
        setTheme(theme) {
            document.documentElement.className = theme;
        }
    },
}
</script>

<template>
      <div class="Bubbles flex items-center justify-evenly">
        <div v-for="color in colors" :key="color" class="rounded-full w-1/6" @click="setTheme(color.theme)"> 
            <svg viewBox="0 0 40 40" class="hover:cursor-pointer" :class=color.fill>
                  <circle cx="20" cy="20" r="15" />
            </svg>    
        </div>
      </div>
</template>

<style>
    .Bubbles { grid-area: Bubbles; }
</style>