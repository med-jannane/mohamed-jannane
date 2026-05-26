import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { useTranslation } from 'react-i18next';
import { Lock, Play } from 'lucide-react';
import { VideoModal } from '../ui/VideoModal';
import * as SI from 'simple-icons';

const PROJECTS = [
  { 
    title: 'GUSTO', 
    type: 'AI_CULINARY_APP', 
    recipe: 'React + Laravel + Gemini API', 
    details: 'Application culinaire propulsée par l’agent "Enzo". Appel en direct, interaction vocale (Siri-like) et section "Frigo" intelligente générant des recettes sur mesure.',
    color: 'bg-[#5B8DCA]', 
    id: '01',
    href: 'https://github.com/med-jannane/gusto_.git'
  },
  { 
    title: 'OPEN NEXUS', 
    type: 'NETWORK_SIM', 
    recipe: 'FastAPI + Docker + Local LLM', 
    details: 'Simulation réseau et découverte de topologie avec automatisation d’infrastructure et intégration de modèles LLM locaux.',
    color: 'bg-[#030585]', 
    id: '02',
    href: 'https://github.com/med-jannane/OpenNexus.git'
  },
  { 
    title: 'GESTION ISTA', 
    type: 'PFE_SYSTEM', 
    recipe: 'Laravel + React + Python', 
    details: 'Système complet de gestion des absences et d’assiduité pour les étudiants de l’établissement.',
    color: 'bg-[#EE4B50]', 
    id: '03',
    href: 'https://github.com/med-jannane/absence.git'
  },
  { 
    title: 'MEDVOX', 
    type: 'MED_TECH_IA', 
    recipe: 'React + Voice-to-Text + AI', 
    details: 'IA capable de détecter l’intent du médecin pour l’assister dans la rédaction de rapports médicaux et d’ordonnances.',
    color: 'bg-[#01021A]', 
    id: '04',
    href: 'https://github.com/med-jannane/mon_projet_medical.git'
  },
  { 
    title: 'AJI TAL3EB', 
    type: 'CULTURAL_GAME', 
    recipe: 'React + Interactive JS', 
    details: 'Application ludique et interactive sous forme de jeu conceptuel centré sur la richesse de la culture marocaine.',
    color: 'bg-[#c2410c]', 
    id: '05',
    href: 'https://github.com/med-jannane/jeu_jo7a.git'
  },
  { 
    title: 'JUMPMAN', 
    type: 'PYGAME_2D', 
    recipe: 'Python + Pygame', 
    details: 'Jeu de plateforme 2D inspiré de Mario, avec gestion des physiques, contrôles et animations personnalisées.',
    color: 'bg-[#15803d]', 
    id: '06',
    href: 'https://github.com/med-jannane/pygame.git'
  },
  { 
    title: 'CANFAN', 
    type: 'FAN_PLATFORM', 
    recipe: 'React + PHP', 
    details: 'Site de pronostics pour la CAN 2025 avec panneau d’administration pour la gestion des scores en direct.',
    color: 'bg-[#b91c1c]', 
    id: '07',
    href: 'https://github.com/med-jannane/canfan.git'
  },
  { 
    title: 'AEBDM', 
    type: 'NETWORK_MGMT', 
    recipe: 'React + Laravel + SQL', 
    details: 'Gestion de réseau, suivi des employés, planification des interventions et support client robuste.',
    color: 'bg-[#0369a1]', 
    id: '08',
    confidential: true
  },
  { 
    title: 'MOUHIM TJAWB', 
    type: 'DARIJA_GAME', 
    recipe: 'React + JS', 
    details: 'Jeu interactif en Darija basé sur des énigmes et des proverbes marocains.',
    color: 'bg-[#7e22ce]', 
    id: '09',
    href: 'https://github.com/med-jannane/jeu_jo7a.git'
  },
  { 
    title: 'MATH_PLOT', 
    type: 'MATH_APP', 
    recipe: 'React + Charting Engine', 
    details: 'Application de calcul et de tracé dynamique de fonctions mathématiques complexes.',
    color: 'bg-[#334155]', 
    id: '10',
    href: 'https://github.com/med-jannane/Fonction-x-.git'
  },
  { 
    title: 'HORS_SUJET_PODCAST', 
    type: 'PODCAST_PROD', 
    recipe: 'DaVinci Resolve • Branding • Audio', 
    details: 'Production indépendante, direction artistique et montage vidéo de formats dynamiques. Gestion complète de l’identité visuelle et de la communication du projet.',
    color: 'bg-[#01021A]', 
    id: '11',
    video: '/0326 (2)(1).mp4',
    cta: 'ÉCOUTER LES ÉPISODES'
  },
  { 
    title: 'AI AGENT', 
    type: 'IN_PROGRESS', 
    recipe: 'Agentic Workflows + AI', 
    details: 'Développement d’architectures agentiques avancées et automatisation de tâches.',
    color: 'bg-[#030585]/40', 
    id: '...' 
  },
  { 
    title: 'DIGITAL_BILL', 
    type: 'IN_PROGRESS', 
    recipe: 'React + Secure Backend', 
    details: 'Conception d’une solution moderne de facturation électronique sécurisée.',
    color: 'bg-[#030585]/40', 
    id: '...' 
  },
  { 
    title: 'NOUVEAU JEU', 
    type: 'IN_PROGRESS', 
    recipe: 'Interactive Engine', 
    details: 'Nouveau projet de jeu interactif actuellement en cours de développement.',
    color: 'bg-[#030585]/40', 
    id: '...' 
  },
];

export const Menu: React.FC = () => {
  const { t } = useTranslation();
  const [confidentialProject, setConfidentialProject] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{src: string, title: string} | null>(null);

  const completedProjects = PROJECTS.filter(p => p.type !== 'IN_PROGRESS');
  const inProgressProjects = PROJECTS.filter(p => p.type === 'IN_PROGRESS');

  const handleProjectClick = (e: React.MouseEvent, project: any) => {
    if (project.confidential) {
      e.preventDefault();
      setConfidentialProject(project.title);
    } else if (project.video) {
      e.preventDefault();
      setSelectedVideo({ src: project.video, title: project.title });
    }
  };

  return (
    <section id="menu" className="py-16 px-2 sm:px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto border-t-[0.5px] border-[#030585]/10">

      {/* Video Modal */}
      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        videoSrc={selectedVideo?.src || ''} 
        title={selectedVideo?.title || ''} 
      />

      {/* Confidentiality Modal */}
      <AnimatePresence>
        {confidentialProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setConfidentialProject(null)}
              className="absolute inset-0 bg-[#01021A]/90 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-white border-4 border-[#030585] p-8 md:p-12 shadow-[30px_30px_0px_0px_rgba(3,5,133,0.2)] text-center z-10"
            >
              <div className="absolute top-0 right-0 w-24 h-24 blue-halftone opacity-[0.05] pointer-events-none" />
              <div className="flex justify-center mb-6 text-[#030585]">
                <div className="p-4 bg-[#030585]/5 rounded-full border-2 border-[#030585]/20">
                  <Lock size={48} strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="font-script text-5xl text-[#030585] mb-4">Accès Protégé</h2>
              <p className="font-sans text-sm font-black text-[#030585] uppercase tracking-tighter leading-relaxed mb-8">
                Le projet {confidentialProject} est soumis à une clause de confidentialité stricte. Le code source et les accès ne peuvent être partagés publiquement.
              </p>
              <button 
                onClick={() => setConfidentialProject(null)}
                className="group relative w-full py-4 bg-[#030585] text-white overflow-hidden shadow-2xl transition-all border-2 border-[#030585] cursor-pointer"
              >
                <span className="relative z-10 font-mono text-[10px] font-black uppercase tracking-[0.3em]">Fermer le Dossier</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1] mix-blend-difference" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <SectionTitle 
          title={t('sections.menu.title')} 
          subtitle={t('sections.menu.subtitle')}
          id="02"
        />
        <div className="hidden lg:flex flex-col items-end gap-2 text-right">
           <span className="font-mono text-[9px] text-[#030585]/40 font-black uppercase tracking-[0.3em]">Signature_Vault_v2.5</span>
           <div className="h-[2px] w-48 bg-[#030585]/10" />
        </div>
      </div>

      {/* Completed Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {completedProjects.map((project, index) => {
          // Determine translation key based on title (fallback to original values)
          const pKey = project.title === 'GUSTO' ? 'gusto' :
                       project.title === 'OPEN NEXUS' ? 'openNexus' :
                       project.title === 'GESTION ISTA' ? 'gestionIsta' :
                       project.title === 'MEDVOX' ? 'medvox' :
                       project.title === 'AJI TAL3EB' ? 'ajiTal3eb' :
                       project.title === 'JUMPMAN' ? 'jumpman' :
                       project.title === 'CANFAN' ? 'canfan' :
                       project.title === 'AEBDM' ? 'aebdm' :
                       project.title === 'MOUHIM TJAWB' ? 'mouhimTjawb' :
                       project.title === 'MATH_PLOT' ? 'mathPlot' :
                       project.title === 'HORS_SUJET_PODCAST' ? 'horsSujet' : null;

          const translatedTitle = pKey ? t(`projects.${pKey}.title`) : project.title;
          const translatedType = pKey ? t(`projects.${pKey}.type`) : project.type;
          const translatedRecipe = pKey ? t(`projects.${pKey}.recipe`) : project.recipe;
          const translatedDetails = pKey ? t(`projects.${pKey}.details`) : project.details;
          const translatedCta = pKey && t(`projects.${pKey}.cta`) !== `projects.${pKey}.cta` ? t(`projects.${pKey}.cta`) : project.cta;

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative flex flex-col bg-white border-2 border-[#030585]/10 overflow-hidden hover:border-[#030585] transition-all duration-700 hover:shadow-[15px_15px_0px_0px_rgba(3,5,133,0.05)]"
            >
              <a 
                href={project.href || "#"} 
                target={project.href ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex flex-col h-full"
                onClick={(e) => handleProjectClick(e, project)}
              >
                {/* Visual Layer */}
                <div className={`h-40 sm:h-48 ${project.color} relative overflow-hidden flex items-center justify-center`}>
                   <div className="absolute inset-0 blue-halftone opacity-40 group-hover:opacity-60 transition-opacity" />
                   <h3 className="display-font text-3xl sm:text-4xl text-white/10 group-hover:scale-110 transition-all duration-1000 font-black italic select-none uppercase">
                     {project.title.split(' ')[0]}
                   </h3>

                   <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                     <span className="bg-white px-2 py-0.5 border border-[#030585] font-mono text-[7px] text-[#030585] font-black uppercase tracking-widest shadow-lg">
                       {translatedType}
                     </span>
                     {project.confidential && (
                       <span className="bg-[#030585] px-2 py-0.5 border border-white/20 font-mono text-[7px] text-white font-black uppercase tracking-widest flex items-center gap-2">
                          <Lock size={10} /> CONFIDENTIAL
                       </span>
                     )}
                     {project.video && (
                       <span className="bg-[#030585] px-2 py-0.5 border border-white/20 font-mono text-[7px] text-white font-black uppercase tracking-widest flex items-center gap-2">
                          <Play size={10} fill="currentColor" /> TRAILER_ACTIVE
                       </span>
                     )}
                   </div>

                   <span className="absolute bottom-4 right-6 display-font text-2xl text-white/30 font-black">#{project.id}</span>
                </div>

                {/* Info Area */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between bg-white relative">
                   <div>
                      <h3 className="display-font text-base sm:text-lg text-[#030585] mb-3 tracking-tighter uppercase font-black border-l-4 border-[#030585] pl-4">
                        {translatedTitle}
                      </h3>
                      <p className="font-mono text-[8px] md:text-[9px] tracking-widest leading-relaxed font-black mb-4 bg-[#030585]/5 p-2">
                         {translatedRecipe}
                      </p>
                      <p className="text-xs md:text-sm text-[#030585]/80 font-sans leading-relaxed font-bold mb-6">
                         {translatedDetails}
                      </p>
                   </div>

                   <div className="pt-4 border-t border-[#030585]/10 flex justify-end">
                      <div className="flex items-center gap-3 group/btn">
                        <span className="display-font text-[10px] text-[#030585] uppercase tracking-widest font-black">
                           {translatedCta ? translatedCta : (project.confidential ? 'Private' : t('sections.menu.view'))}
                        </span>
                        <div className="w-10 h-10 rounded-full border-2 border-[#030585] flex items-center justify-center text-[#030585] group-hover/btn:bg-[#030585] group-hover/btn:text-white transition-all transform group-hover/btn:rotate-45">
                           {project.confidential ? <Lock size={16} /> : (project.video ? <Play size={16} fill="currentColor" /> : <span className="text-base font-bold">→</span>)}
                        </div>
                      </div>
                   </div>
                </div>
              </a>
            </motion.div>
          );
        })}
        {/* GitHub "Voir Plus" Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative flex flex-col bg-[#030585] border-2 border-[#030585] overflow-hidden transition-all duration-700 shadow-xl"
        >
          <a 
            href="https://github.com/med-jannane" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col h-full items-center justify-center p-8 text-white relative"
          >
            <div className="absolute inset-0 blue-halftone opacity-[0.05] pointer-events-none" />
            
            <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
               <svg role="img" viewBox="0 0 24 24" className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d={SI.siGithub.path} />
               </svg>
            </div>

            <h3 className="display-font text-2xl font-black uppercase tracking-widest mb-2">Voir Plus</h3>
            <p className="font-mono text-[8px] text-white/60 uppercase tracking-[0.3em] mb-8">Full_Repository_Access</p>
            
            <div className="flex items-center gap-3 py-2 px-6 border border-white/20 rounded-full group-hover:bg-white group-hover:text-[#030585] transition-all duration-500">
               <span className="font-sans text-[10px] font-black uppercase">Explorer sur GitHub</span>
               <span className="text-lg font-bold">→</span>
            </div>
          </a>
        </motion.div>
      </div>

      {/* In Progress Section - "The Lab" */}
      <div className="mt-20 relative">
        <div className="flex items-center gap-4 mb-8">
           <div className="h-[1px] flex-grow bg-[#030585]/10" />
           <h3 className="display-font text-[10px] text-[#030585] font-black uppercase tracking-[0.4em] px-3 py-1.5 border-2 border-[#030585]/10">
              Laboratoire_en_Cours
           </h3>
           <div className="h-[1px] flex-grow bg-[#030585]/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {inProgressProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#030585]/5 border-2 border-dashed border-[#030585]/20 p-5 relative group overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-20 h-20 blue-halftone opacity-[0.05] group-hover:rotate-90 transition-transform duration-1000" />
              
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[7px] text-[#030585] font-black bg-white px-2 py-0.5 border border-[#030585]/10 uppercase tracking-widest">
                  {project.type}
                </span>
                <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-[#030585]" />
              </div>

              <h4 className="display-font text-base text-[#030585] font-black uppercase tracking-tighter mb-2">
                {project.title}
              </h4>
              <p className="font-mono text-[7px] text-[#030585]/60 uppercase font-black mb-3">
                Cook_Status: Pre-Heating // {project.recipe}
              </p>
              <p className="text-[11px] text-[#030585]/80 font-sans font-bold leading-relaxed">
                {project.details}
              </p>

              <div className="mt-5 h-[2px] w-full bg-[#030585]/10 relative overflow-hidden">
                <motion.div 
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[#030585]/30 to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
