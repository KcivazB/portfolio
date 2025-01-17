<template>
  <div id="ProjectDetail" class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 pt-20 lg:p-10 overflow-y-auto">
    <div class="container-list w-full max-w-screen-lg">
      <router-link
        to="/"
        class="back-button hover-border-theme absolute top-4 left-4 bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-4 rounded-lg text-sm z-10"
      >
        {{ $t('back') }}
      </router-link>

      <div class="font-bold text-5xl text-center">{{ $t('blog_list') }}</div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div
          v-for="article, index in articles"
          :key="article.id"
          class="card p-5 border-theme hover-border-theme shadow-md bg-zinc-950 flex items-center justify-center"
          :style="getCardStyle(index)"
        >
          <router-link
            :to="{ name: 'Article', params: { id: article.id } }"
            class="flex w-full flex-row items-center"
          >
            <div class="text-container flex flex-col items-start w-full px-4">
              <p class="text-2xl font-bold mb-2">
                {{ article.id }}. {{ article.title[currentLocale] }}
              </p>
              <p class="text-base text-gray-300">{{ article.shortDesc[currentLocale] }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18next from 'i18next';
import articles from '../assets/articles.json';

export default {
  name: 'Blog',
  data() {
    return {
      articles,
    };
  },
  computed: {
    currentLocale() {
      return i18next.language.split('-')[0];
    },
  },
  methods: {
    getCardStyle(index) {
      return {
        animationDelay: `${index * 0.5}s` // Calcul automatique du délai d'animation
      };
    }
  },
};
</script>

<style scoped>
.container-list {
  width: 100%;
  max-width: 1200px; 
}

@keyframes slideIn {
    from {
      transform: translateY(10%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
.card {
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  color: #d6d6d6;
  opacity: 0;
  animation: slideIn 0.5s ease-out forwards;
}

</style>