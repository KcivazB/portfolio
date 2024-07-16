<template>
  <div class="Hello relative" v-if="$i18next.isInitialized">
    <div class="left-content z-10">
      <div class="text-top">
        <div class="text-5xl">{{ $t('hello_hi') }} <span class="font-bold highlighted-text"> Virgile </span></div>
      </div>
      <div class="text-mid">
        <span class="flex text-xl">{{ $t('hello_im') }}&nbsp;
          <VueTyped 
          :strings="translatedStrings"
          :typeSpeed="50"
          :backSpeed="50"
          :smartBackspace="true"
          :loop="true"
          :key="vueTypedKey"
        />
        </span> 
      </div>
      <div class="text-bottom text-xl">{{ $t('hello_passionate') }}</div>
      <div class="buttons-row z-10 w-1/2">
        <div class="flex flex-wrap gap-4 mt-10"> 
          <a href="https://github.com/KcivazB" aria-label="github profile" target="_blank">
            <button class="px-5 py-2 border-theme-button rounded-lg hover-border-theme-button hover-highlighted-button">
              <svg width="1em" height="1em" viewBox="0 0 24 24" class="h-6" data-icon="ri:github-fill">
                <symbol id="ai:ri:github-fill">
                  <path fill="currentColor" d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10"></path>
                </symbol>
                <use xlink:href="#ai:ri:github-fill"></use>
              </svg>
              <span class="sr-only" data-umami-event="github button">GitHub Profile</span>
            </button>
          </a> 
          <a href="https://linkedin.com/in/virgile-baisn%C3%A9e-808517163" aria-label="linkeding profile" target="_blank">
            <button class="px-5 py-2 border-theme-button rounded-lg hover-border-theme-button hover-highlighted-button">
              <svg width="1em" height="1em" viewBox="0 0 24 24" class="h-6" data-icon="ri:linkedin-box-fill">
                <symbol id="ai:ri:linkedin-box-fill">
                  <path fill="currentColor" d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.092v4.714zM7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549m1.336 9.764H5.667V9.75H8.34zM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3z"></path>
                </symbol>
                <use xlink:href="#ai:ri:linkedin-box-fill"></use>
              </svg>
              <span class="sr-only" data-umami-event="linkedin button">Linkedin Profile</span>
            </button>
          </a> 
            <button @click="toggleEE()" class="px-5 py-2 border-theme-button rounded-lg hover-border-theme-button hover-highlighted-button">
              <svg width="1em" height="1em" viewBox="0 0 24 24" class="h-6" data-icon="ri:emotion-laugh-line">
                <symbol id="ai:ri:emotion-laugh-line">
                  <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 7c2 0 3.667.333 5 1a5 5 0 0 1-10 0c1.333-.667 3-1 5-1M8.5 7a2.5 2.5 0 0 1 2.45 2h-4.9A2.5 2.5 0 0 1 8.5 7m7 0a2.5 2.5 0 0 1 2.45 2h-4.9a2.5 2.5 0 0 1 2.45-2"></path>
                </symbol>
                <use xlink:href="#ai:ri:emotion-laugh-line"></use>
              </svg>
            </button>
          <div v-if="language.includes('fr')">
            <button @click="changeLanguage('en')" class="px-4 py-2 border-theme-button rounded-lg hover-border-theme-button hover-highlighted-button">
              <img src="flags/uk.svg" class="flag-icon rounded-sm" alt="English">
            </button>
          </div>
          <div v-if="language.includes('en')">
            <button @click="changeLanguage('fr')" class="px-4 py-2 border-theme-button rounded-lg hover-border-theme-button hover-highlighted-button">
              <img src="flags/fr.svg" class="flag-icon rounded-sm" alt="French">
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="right-content w-1/3">
      <img src="../assets/images/profile-2.png" class="profile-img absolute bottom-0 right-0 opacity-50 lg:opacity-100 lg:z-0">
    </div>
  </div>
  
</template>
  
<script>

export default {
  name: 'Hello',
  components: {
  },
  data() {
    return {
      language: this.$i18next.language,
      vueTypedKey: 0,
      easterEggActivated: false,
      currentFontIndex:0,
      fonts:["Urbanist", "Hieroglyphs"]  
    };
  },
  computed: {
    translatedStrings() {
      return ['hello_backend', 'hello_frontend', 'hello_fullstack', 'hello_colleague'].map(key => this.$t(key));
    },
  },
  methods: {
    changeLanguage() {
      const newLanguage = this.$i18next.language.includes('en') ? 'fr' : 'en';
      this.$i18next.changeLanguage(newLanguage);
      this.language = newLanguage;
    },
    forceRerender() {
      this.vueTypedKey += 1;
    },
    toggleEE() {
    this.easterEggActivated = !this.easterEggActivated;

    if (this.easterEggActivated) {
      this.changeFont(); 
    } else {
      this.currentFontIndex = 0;
      this.applyFont(this.fonts[this.currentFontIndex]); 
    }
  },
  changeFont() {
    this.currentFontIndex = (this.currentFontIndex + 1) % this.fonts.length;
    const selectedFont = this.fonts[this.currentFontIndex];
    this.applyFont(selectedFont);
    
  },
  applyFont(fontFamily) {
    const elementIds = ['#Home', '#ProjectsList', '#ProjectDetail'];

    elementIds.forEach(id => {
      const element = document.querySelector(id);
      if (element) {
        element.style.fontFamily = fontFamily;
      }
    });
  },
  },
  watch: {
    '$i18next.language': function(newLang) {
      this.language = newLang;    
      this.forceRerender();  
    }
  }
};
</script>
  
<style scoped>
.Hello {
  grid-area: Hello;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.left-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.right-content {
  display: flex;
  justify-content: end;
  align-items: end;
}

.profile-img {
  max-width: 70%;
  max-height: 70%;
  object-fit: contain; 
}

.flag-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}
</style>
