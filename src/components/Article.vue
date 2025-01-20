<template>
  <div id="Article" class="min-h-screen flex justify-center bg-zinc-900 text-white p-6 lg:p-10 overflow-y-auto">
    <div class="container-article w-full max-w-4xl mx-auto">
      <!-- Back Button -->
      <router-link to="/blog" class="back-button hover-border-theme absolute top-4 left-4 bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-4 rounded-lg text-sm z-10 shadow-md">
        {{ $t('back') }}
      </router-link>

      <article class="article-content bg-zinc-950 shadow-xl rounded-lg p-8 mb-8 space-y-6">
        <!-- Title -->
        <header class="text-center">
          <h1 class="text-3xl sm:text-4xl font-bold mb-4">{{ title }}</h1>
        </header>

        <!-- Markdown Content -->
        <div v-html="renderedMarkdown" class="article-body text-sm sm:text-base leading-relaxed space-y-4">
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import i18next from 'i18next';
import markdownit from 'markdown-it';

export default {
  name: 'Article',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    markdownContent: '',
  }),
  computed: {
    currentLocale() {
      return i18next.language.split('-')[0]; // Récupération de la langue actuelle
    },
    renderedMarkdown() {
      const md = markdownit({
        html: true,
        linkify: true,
        typographer: true
      })
      return md.render(this.markdownContent); // Conversion du contenu Markdown en HTML
    },
  },
  async mounted() {
    const locale = this.currentLocale;
    const articleId = this.id;

    try {
      // Charger le fichier Markdown depuis les assets
      const response = await fetch(`/articles/${articleId}/${locale}.md`);
      const markdownContent = await response.text(); // Stocke le contenu markdown dans une variable

      // Séparer le contenu Markdown en lignes
      const lines = markdownContent.split('\n');
      
      // Extraire le titre depuis la première ligne et supprimer le '#' (si présent)
      this.title = lines[0].replace(/^#\s*/, ''); // Le titre de l'article

      // Supprimer la première ligne du contenu (le titre) pour éviter la duplication
      this.markdownContent = lines.slice(1).join('\n'); // Le reste du contenu
      
      console.log("Contenu du markdown", this.markdownContent);
    } catch (err) {
      console.error('Erreur lors du chargement de l’article:', err);
    }
  },
};
</script>

<style scoped>
#Article {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #1f1f1f;
}

.container-article {
  width: 100%;
  max-width: 800px;
  padding-top: 4rem;
}

article {
  background-color: #2d2d2d;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 2rem;
}

header h1 {
  font-size: 2rem;
  line-height: 2.5rem;
  color: #e0e0e0;
}

.article-body {
  font-size: 1rem;
  line-height: 1.8rem;
  color: #d1d1d1;
}

article a {
  color: #4c9f70;
  text-decoration: none;
}

article a:hover {
  text-decoration: underline;
}

.back-button {
  transition: all 0.3s ease;
}

.back-button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
