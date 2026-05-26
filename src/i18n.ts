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
  },
  en: {
    translation: {
      hero: {
        title: "Mohamed Jannane",
        subtitle: "Full Stack Developer",
        pitch: "Beyond code, I bring innovative ideas to life. I transform complex concepts into high-performance, intuitive, and modern web applications.",
        cta: "Explore the Menu",
      },
      nav: {
        menu: "PROJECTS",
        ingredients: "SKILLS",
        brigade: "EXPERIENCE",
        reservations: "CONTACT",
        order: "ORDER_NOW",
        about: "BIO"
      },
      sections: {
        about: {
          title: "The Chef",
          subtitle: "Mohamed Jannane",
          pitch: "Passionate about the art of code, I am involved in all phases of a project, from architectural design to deployment."
        },
        objective: {
          title: "SaaS Focus",
          subtitle: "My Vision",
          text: "Design, development, and launch of an innovative SaaS to bring concrete and scalable technological solutions to the market."
        },
        ingredients: { 
          title: "The Ingredients", 
          subtitle: "Techno Stack",
          categories: {
            base: "Frontend", seasoning: "Backend", foundation: "Database", garnish: "DevOps",
            secret: "AI & Lab", structure: "Environment", history: "Quality", brigade: "Management",
            serving: "Serving", storage: "NoSQL", bulk: "Mobile", ready: "UI/UX",
            heat: "Performance", order: "Agility", packing: "Infrastructure", fast: "Fast Prep"
          }
        },
        softSkills: {
          title: "Spices",
          subtitle: "Soft Skills",
          items: ["Innovative Design", "Global Vision", "Creative Solution", "Technical Rigor"]
        },
        education: {
          title: "Education",
          subtitle: "Culinary School"
        },
        brigade: {
          title: "The Brigade",
          subtitle: "Experience",
          present: "Present"
        },
        languages: {
          title: "Languages",
          subtitle: "World Flavors"
        },
        interests: {
          title: "Interests",
          subtitle: "Extras"
        },
        menu: { 
          title: "Signature Dishes", 
          subtitle: "Work",
          view: "VIEW_RECIPE"
        },
        contact: {
          title: "Reservations",
          subtitle: "Contact",
          send: "SEND_LOG",
          name: "Client Name",
          email: "E-mail",
          message: "Request / Project"
        }
      },
      footer: {
        tagline: "Enjoy your code meal."
      }
    }
  },
  ar: {
    translation: {
      hero: {
        title: "محمد جنان",
        subtitle: "مهندس برمجيات ومهندس حلول",
        pitch: "أبعد من مجرد كود، أنا أعطي الحياة للأفكار المبتكرة. أحول المفاهيم المعقدة إلى تطبيقات ويب عالية الأداء، بديهية وعصرية.",
        cta: "اكتشف القائمة",
      },
      nav: {
        menu: "المشاريع",
        ingredients: "المهارات",
        brigade: "المسار",
        reservations: "الاتصال",
        order: "اطلب الآن",
        about: "السيرة"
      },
      projects: {
        gusto: {
          title: "GUSTO",
          type: "تطبيق طهي ذكاء اصطناعي",
          recipe: "React + Laravel + Gemini API",
          details: "تطبيق طهي مدعوم بالذكاء الاصطناعي 'Enzo'. مكالمات مباشرة، تفاعل صوتي (مثل Siri) وقسم 'الثلاجة الذكية' لإنشاء وصفات مخصصة."
        },
        openNexus: {
          title: "OPEN NEXUS",
          type: "محاكي شبكات",
          recipe: "FastAPI + Docker + Local LLM",
          details: "محاكاة الشبكات واكتشاف الطوبولوجيا مع أتمتة البنية التحتية وتكامل نماذج LLM المحلية."
        },
        gestionIsta: {
          title: "GESTION ISTA",
          type: "نظام PFE",
          recipe: "Laravel + React + Python",
          details: "نظام متكامل لإدارة الغياب والحضور لطلاب المؤسسة."
        },
        medvox: {
          title: "MEDVOX",
          type: "تقنية طبية ذكاء اصطناعي",
          recipe: "React + Voice-to-Text + AI",
          details: "ذكاء اصطناعي قادر على اكتشاف نية الطبيب لمساعدته في كتابة التقارير الطبية والوصفات."
        },
        ajiTal3eb: {
          title: "AJI TAL3EB",
          type: "لعبة ثقافية",
          recipe: "React + Interactive JS",
          details: "تطبيق ترفيهي وتفاعلي في شكل لعبة مفاهيمية تتمحور حول ثراء الثقافة المغربية."
        },
        jumpman: {
          title: "JUMPMAN",
          type: "لعبة 2D بـ Pygame",
          recipe: "Python + Pygame",
          details: "لعبة منصات 2D مستوحاة من ماريو، مع إدارة الفيزياء والتحكم والرسوم المتحركة المخصصة."
        },
        canfan: {
          title: "CANFAN",
          type: "منصة جماهيرية",
          recipe: "React + PHP",
          details: "موقع توقعات لكأس أمم أفريقيا 2025 مع لوحة تحكم لإدارة النتائج المباشرة."
        },
        aebdm: {
          title: "AEBDM",
          type: "إدارة الشبكات",
          recipe: "React + Laravel + SQL",
          details: "إدارة الشبكة، متابعة الموظفين، تخطيط التدخلات ودعم فني قوي."
        },
        mouhimTjawb: {
          title: "MOUHIM TJAWB",
          type: "لعبة بالدارجة",
          recipe: "React + JS",
          details: "لعبة تفاعلية بالدارجة المغربية تعتمد على الألغاز والأمثال الشعبية."
        },
        mathPlot: {
          title: "MATH_PLOT",
          type: "تطبيق رياضيات",
          recipe: "React + Charting Engine",
          details: "تطبيق للحساب والرسم الديناميكي للدوال الرياضية المعقدة."
        },
        horsSujet: {
          title: "HORS_SUJET_PODCAST",
          type: "إنتاج بودكاست",
          recipe: "DaVinci Resolve • Branding • Audio",
          details: "إنتاج مستقل، إدارة فنية ومونتاج فيديو بصيغ ديناميكية. إدارة كاملة للهوية البصرية والتواصل للمشروع.",
          cta: "استمع للحلقات"
        },
        aiAgent: {
          title: "AI AGENT",
          type: "قيد التطوير",
          recipe: "Agentic Workflows + AI",
          details: "تطوير هياكل برمجية ذكية وأتمتة المهام المعقدة."
        },
        digitalBill: {
          title: "DIGITAL_BILL",
          type: "قيد التطوير",
          recipe: "React + Secure Backend",
          details: "تصميم حل حديث للفواتير الإلكترونية المؤمنة."
        },
        newGame: {
          title: "لعبة جديدة",
          type: "قيد التطوير",
          recipe: "Interactive Engine",
          details: "مشروع لعبة تفاعلية جديدة قيد التطوير حالياً."
        }
      },
      sections: {
        about: { title: "الشيف", subtitle: "محمد جنان", pitch: "شغوف بفن البرمجة، أشارك في جميع مراحل المشروع، من التصميم المعماري حتى النشر." },
        objective: { title: "تركيز SaaS", subtitle: "رؤيتي", text: "تصميم وتطوير وإطلاق SaaS مبتكر لتقديم حلول تكنولوجية ملموسة وقابلة للتطوير في السوق." },
        ingredients: { 
          title: "المكونات", subtitle: "مجموعة التقنيات",
          categories: {
            base: "واجهات المستخدم", seasoning: "الخلفية البرمجية", foundation: "قواعد البيانات", garnish: "ديف أوبس",
            secret: "الذكاء الاصطناعي", structure: "البيئة", history: "الجودة", brigade: "الإدارة",
            serving: "الخدمة", storage: "NoSQL", bulk: "موبايل", ready: "UI/UX",
            heat: "الأداء", order: "الرشاقة", packing: "البنية التحتية", fast: "تحضير سريع"
          }
        },
        softSkills: { title: "توابل", subtitle: "مهارات شخصية", items: ["تصميم مبتكر", "رؤية شاملة", "حلول إبداعية", "دقة تقنية"] },
        education: { title: "التعليم", subtitle: "مدرسة الطبخ" },
        brigade: { title: "الفريق", subtitle: "الخبرة", present: "الحاضر" },
        languages: { title: "اللغات", subtitle: "نكهات العالم" },
        interests: { title: "الاهتمامات", subtitle: "إضافات" },
        menu: { title: "أطباق مميزة", subtitle: "أعمالي", view: "عرض الوصفة" },
        contact: { title: "الحجوزات", subtitle: "اتصال", send: "إرسال السجل", name: "اسم العميل", email: "البريد الإلكتروني", message: "الطلب / المشروع" }
      },
      footer: { tagline: "بالهناء والشفاء في عالم البرمجة." }
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
