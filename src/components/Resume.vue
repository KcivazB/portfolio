<template>
    <div class="Resume flex align-center items-center">
        <div class="left-text w-3/5">
            <div class="left-0  text-3xl lg:text-5xl">{{ $t('resume_header')}}</div>
        </div>    
        <div class="download-buttons w-2/5 flex flex-col items-center justify-center">
            <a :href=" $t('resume_source') " target="_blank" rel="noopener noreferrer">
                <button class="text-xl hover-highlighted-text">{{ $t('resume_button') }}</button>
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
