import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
            back: "Back",
            hello_hi: "Hi, I'm",
            hello_im: "I am",
            hello_fullstack: 'a <span class="highlighted-text">fullstack</span> developer',
            hello_backend: 'a <span class="highlighted-text">backend</span> developer',
            hello_frontend: 'a <span class="highlighted-text">frontend</span> developer', 
            hello_colleague: '<span class="highlighted-text"> your next colleague</span>',
            hello_passionate: 'passionate about creating useful apps and tools.',
            aboutme_header: 'About me',
            aboutme_desc:"I am a dedicated 27-year-old full stack developer specializing in backend development with a strong inclination towards exploring and integrating new frontend technologies and modern JavaScript frameworks.",
            aboutme_more:"Outside of coding, I am passionate about cars and gaming — both board games and video games. As a focused and strategic player, I continuously seek the best approaches to challenges.",
            contact_header:"Let's start working together ! 💻",
            contact_details:"My contacts",
            contact_socials:"My Socials",
            resume_header:"Check out my resume !",
            resume_button:"Download",
            resume_source: new URL('./assets/cv-en.pdf', import.meta.url).href,
            now_header:"Now",
            now_current_activity: "Actually working on personal projects :",
            now_portfolio: "PortFolio",
            now_palbro: "PalBro",
            now_concerto: "Concerto",
            now_cars_hub: "Cars Hub and ALPR",
            projects_explore: "Click and discover my projects",
            timezone_header: "Current Time",
            projects_list: " Personal Projects",
            projects_dev_and_innov: "Development and Innovation",
            projects_github: "View on Github",
            projects_demo: "Try the demo",
            projects_backend_technos: "Back-end",
            projects_frontend_technos: "Front-end",
            projects_other_technos: "Others",
        }
      },
      fr: {
        translation: {
            back: "Retour",
            hello_hi: "Salut, je suis",
            hello_im: "Je suis",
            hello_fullstack: 'un développeur <span class="highlighted-text">fullstack</span>',
            hello_backend: 'un développeur <span class="highlighted-text">backend</span>',
            hello_frontend: 'un développeur <span class="highlighted-text">frontend</span>',
            hello_colleague: '<span class="highlighted-text">votre prochain collègue</span>',
            hello_passionate: "passionné par la création d'applis et d'outils utiles.",
            aboutme_header: 'A propos de moi',
            aboutme_desc:"Je suis un développeur full stack de 27 ans, spécialisé dans le développement backend avec une forte inclination pour l'exploration et l'intégration de nouvelles technologies frontend et de frameworks JavaScript modernes.",
            aboutme_more:"En dehors du codage, ma passion se porte sur les voitures et les jeux — tant les jeux de société que les jeux vidéo. En tant que joueur concentré et stratégique, je recherche continuellement les meilleures approches pour relever les défis.",
            contact_header:"Commençons à travailler ensemble ! 💻",
            contact_details:"Mes coordonnées",
            contact_socials:"Mes réseaux sociaux",
            resume_header:"Consultez mon cv !",
            resume_button:"Télécharger",
            resume_source: new URL('./assets/cv-fr.pdf', import.meta.url).href,
            now_header:"En ce moment",
            now_current_activity: "Actuellement en train de travailler sur des projets personnels :",
            now_portfolio: "PortFolio",
            now_palbro: "PalBro",
            now_concerto: "Concerto",
            now_cars_hub: "Cars Hub et ALPR",
            projects_explore: "Cliquez et découvrez mes projets",
            timezone_header: "Heure actuelle",
            projects_list: "Mes Projets Perso",
            projects_dev_and_innov: "Développement et Innovation",
            projects_github: "Voir sur Github",
            projects_demo: "Essayer la démo",
            projects_backend_technos: "Back-end",
            projects_frontend_technos: "Front-end",
            projects_other_technos: "Autres",
        }
      }
    }
  });

export default function (app) {
  app.use(I18NextVue, { 
    i18next,
    rerenderOn: ['initialized', 'languageChanged', 'loaded'],
   })
  return app
}