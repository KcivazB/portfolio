<template>
    <div class="Resume flex align-center items-center">
        <div class="left-text w-2/3">
            <div class="left-0  text-3xl lg:text-5xl">Grab my résumé !</div>
        </div>    
        <div class="download-buttons w-1/3 flex flex-col items-center justify-center">
            <a :href="pdfUrl_EN" target="_blank" rel="noopener noreferrer">
                <button class="text-xl hover-highlighted-text">Download</button>
            </a>
            <a :href="pdfUrl_FR" target="_blank" rel="noopener noreferrer">
                <button class="text-xl hover-highlighted-text">Télécharger</button>
            </a>
        </div>
    </div>
</template>

<script>
    const pdfUrl_FR = new URL('../assets/cv-fr.pdf', import.meta.url).href;
    const pdfUrl_EN = new URL('../assets/cv-en.pdf', import.meta.url).href;

    export default {
        name: 'Resume',
        components: {
        },
        data() {
            return {
                pdfUrl_FR,
                pdfUrl_EN
            }
        },
        mounted() {

        },
        methods: {
            
        },
    }
</script>

<style>
.Resume {
  grid-area: Resume;
}
</style>
