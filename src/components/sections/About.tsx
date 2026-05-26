import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../ui/SectionTitle';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 px-2 sm:px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto relative border-t border-[#030585]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
        
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <SectionTitle 
            title={t('sections.about.title')} 
            subtitle={t('sections.about.subtitle')}
            id="01"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-6 sm:p-8 bg-[#030585] text-white shadow-xl relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 blue-halftone opacity-20" />
            <p className="font-script text-xl sm:text-2xl md:text-3xl mb-4 leading-tight">
               "Ma cuisine est numérique, ma rigueur est absolue."
            </p>
            <div className="space-y-3">
              <span className="font-mono text-[8px] text-white/50 uppercase tracking-[0.4em] font-black block">Spices_Inventory</span>
              <div className="flex flex-wrap gap-1.5">
                {(t('sections.softSkills.items', { returnObjects: true }) as string[]).map((skill: string) => (
                  <span key={skill} className="px-2.5 py-1 border border-white/20 text-[8px] sm:text-[9px] uppercase font-black text-white hover:bg-white hover:text-[#030585] transition-all shadow-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-black text-[#030585] uppercase leading-[1.1] tracking-tighter">
              {t('sections.about.pitch')}
            </p>
            
            <div className="space-y-4 relative pl-6 sm:pl-10 border-l-4 sm:border-l-6 border-[#030585]">
               <h4 className="display-font text-[8px] text-[#030585] uppercase tracking-[0.3em] font-black opacity-40">
                 // Vision_Protocol
               </h4>
               <p className="text-base sm:text-lg md:text-xl text-[#030585] font-serif leading-relaxed italic font-bold">
                 "{t('sections.objective.text')}"
               </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
