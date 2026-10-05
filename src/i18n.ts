import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      hero: {
        title: "Mohamed Jannane",
        subtitle: "Développeur Full Stack",
        pitch: "Au-delà du code, je donne vie à des idées innovantes. Je transforme des concepts complexes en applications web performantes, intuitives et modernes.",
        cta: "Découvrir le Menu",
      },
      nav: {
        menu: "PROJETS",
        ingredients: "COMPÉTENCES",
        brigade: "PARCOURS",
        reservations: "CONTACT",
        order: "COMMANDER",
        about: "BIO"
      },
      sections: {
        about: {
          title: "Le Chef",
          subtitle: "Mohamed Jannane",
          pitch: "Passionné par l'art du code, je m'implique dans toutes les phases d'un projet, de la conception architecturale jusqu'au déploiement."
        },
        objective: {
          title: "Focus SaaS",
          subtitle: "Ma Vision",
          text: "Conception, développement et lancement d'un SaaS innovant afin d'apporter des solutions technologiques concrètes et évolutives sur le marché."
        },
        ingredients: { 
          title: "Les Ingrédients", 
          subtitle: "Techno Stack",
          categories: {
            base: "Frontend", seasoning: "Backend", foundation: "Base de données", garnish: "DevOps",
            secret: "AI & Lab", structure: "Environnements", history: "Qualité", brigade: "Gestion",
            serving: "Service", storage: "NoSQL", bulk: "Mobile", ready: "UI/UX",
            heat: "Performance", order: "Agilité", packing: "Infrastructure", fast: "Rapidité"
          }
        },
        softSkills: {
          title: "Épices",
          subtitle: "Soft Skills",
          items: ["Conception Novatrice", "Vision Globale", "Solution Créative", "Rigueur Technique"]
        },
        education: {
          title: "Formation",
          subtitle: "École de Cuisine"
        },
        brigade: {
          title: "La Brigade",
          subtitle: "Expériences",
          present: "Aujourd'hui"
        },
        languages: {
          title: "Langues",
          subtitle: "Saveurs du Monde"
        },
        interests: {
          title: "Loisirs",
          subtitle: "Suppléments"
        },
        menu: { 
          title: "Plats Signature", 
          subtitle: "Réalisations",
          view: "VOIR LA RECETTE"
        },
        contact: {
          title: "Réservations",
          subtitle: "Contact",
          send: "ENVOYER LE LOG",
          name: "Votre Nom",
          email: "Votre E-mail",
          message: "Message / Projet"
        }
      },
      footer: {
        tagline: "Bon appétit dans le monde du code."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
