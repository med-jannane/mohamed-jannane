import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { useTranslation } from 'react-i18next';
import * as SI from 'simple-icons';

const SKILLS = [
  { name: 'React', cat: 'base', icon: SI.siReact },
  { name: 'TypeScript', cat: 'base', icon: SI.siTypescript },
  { name: 'JavaScript', cat: 'base', icon: SI.siJavascript },
  { name: 'PHP', cat: 'season', icon: SI.siPhp },
  { name: 'Python', cat: 'season', icon: SI.siPython },
  { name: 'FastAPI', cat: 'fast', icon: SI.siFastapi },
  { name: 'Laravel', cat: 'struct', icon: SI.siLaravel },
  { name: 'Bootstrap', cat: 'struct', icon: SI.siBootstrap },
  { name: 'HTML5', cat: 'base', icon: SI.siHtml5 },
  { name: 'CSS3', cat: 'base', icon: SI.siCss },
  { name: 'MongoDB', cat: 'store', icon: SI.siMongodb },
  { name: 'MySQL', cat: 'store', icon: SI.siMysql },
  { name: 'SQL Server', cat: 'store', icon: null },
  { name: 'NoSQL', cat: 'store', icon: null },
  { name: 'Docker', cat: 'pack', icon: SI.siDocker },
  { name: 'Vite', cat: 'fast', icon: SI.siVite },
  { name: 'Vercel', cat: 'pack', icon: SI.siVercel },
  { name: 'Git', cat: 'hist', icon: SI.siGit },
  { name: 'GitHub', cat: 'hist', icon: SI.siGithub },
  { name: 'GitLab', cat: 'hist', icon: SI.siGitlab },
  { name: 'Jira', cat: 'tool', icon: SI.siJira },
  { name: 'Scrum', cat: 'tool', icon: SI.siScrumalliance },
  { name: 'UI/UX', cat: 'tool', icon: SI.siFigma },
  { name: 'Cloud', cat: 'fast', icon: SI.siGooglecloud },
];

export const Ingredients: React.FC = () => {
  const { t } = useTranslation();

  const categories = [
    { 
      id: 'core', 
      title: 'Les Fondamentaux', 
      skills: SKILLS.filter(s => s.cat === 'base' || s.cat === 'fast'),
      icon: SI.siReact.path
    },
    { 
      id: 'structure', 
      title: 'Architecture & Backend', 
      skills: SKILLS.filter(s => s.cat === 'struct' || s.cat === 'season'),
      icon: SI.siLaravel.path
    },
    { 
      id: 'storage', 
      title: 'Gestion des Données', 
      skills: SKILLS.filter(s => s.cat === 'store'),
      icon: SI.siMysql.path
    },
    { 
      id: 'tools', 
      title: 'Cuisine & DevOps', 
      skills: SKILLS.filter(s => s.cat === 'pack' || s.cat === 'hist' || s.cat === 'tool'),
      icon: SI.siDocker.path
    }
  ];

  return (
    <section id="ingredients" className="py-16 px-2 sm:px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto border-t-[0.5px] border-[#030585]/10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <SectionTitle 
          title={t('sections.ingredients.title')} 
          subtitle="Sélection des Meilleurs Composants"
          id="03"
        />
        <div className="hidden lg:block text-right">
          <p className="font-mono text-[8px] text-[#030585]/40 uppercase font-black tracking-widest mb-1">
            System_Audit_v2026 // Success
          </p>
          <div className="h-[1.5px] w-40 bg-[#030585]/10 ml-auto" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col bg-[#030585]/2 border-2 border-[#030585]/10 p-6 md:p-8 hover:border-[#030585] transition-all duration-500 hover:shadow-xl"
          >
            <div className="absolute top-0 right-0 w-24 h-24 blue-halftone opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
               <div className="w-8 h-8 rounded-full bg-[#030585] flex items-center justify-center p-2">
                  <svg role="img" viewBox="0 0 24 24" className="fill-white w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <path d={cat.icon} />
                  </svg>
               </div>
               <h3 className="display-font text-base md:text-lg text-[#030585] font-black uppercase tracking-tighter">
                  {cat.title}
               </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-1.5 group/skill">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 flex items-center justify-center opacity-40 group-hover/skill:opacity-100 transition-opacity">
                      {skill.icon ? (
                        <svg role="img" viewBox="0 0 24 24" className="w-full h-full fill-[#030585]" xmlns="http://www.w3.org/2000/svg">
                          <path d={skill.icon.path} />
                        </svg>
                      ) : (
                        <span className="font-mono text-[9px] font-black text-[#030585]">{skill.name[0]}</span>
                      )}
                    </div>
                    <span className="font-mono text-[9px] md:text-[10px] text-[#030585] font-black uppercase tracking-widest group-hover/skill:translate-x-1 transition-transform">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6 flex items-center gap-2">
               <div className="h-[1px] flex-grow bg-[#030585]/10" />
               <span className="font-mono text-[6px] text-[#030585]/30 uppercase font-black">
                 Ref::{cat.id.toUpperCase()}
               </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
