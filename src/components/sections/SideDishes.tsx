import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../ui/SectionTitle';
import { motion } from 'framer-motion';

const LANGUAGES = [
  { name: 'العربية', level: '100%', key: 'ar' },
  { name: 'Français', level: '70%', key: 'fr' },
  { name: 'English', level: '40%', key: 'en' },
];

const INTERESTS = [
  { name: 'Photographie', ref: 'EXT_01' },
  { name: 'Musique', ref: 'EXT_02' },
  { name: 'Cuisine', ref: 'EXT_03' },
  { name: 'Pêche', ref: 'EXT_04' },
];

export const SideDishes: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="extras" className="py-16 px-2 sm:px-4 md:px-6 lg:px-8 max-w-[1800px] mx-auto border-t-[0.5px] border-[#030585]/10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Languages - Refined */}
        <div className="lg:col-span-5 space-y-12">
          <SectionTitle 
            title={t('sections.languages.title')} 
            subtitle={t('sections.languages.subtitle')}
            id="06"
          />
          
          <div className="space-y-10">
            {LANGUAGES.map((lang, idx) => (
              <motion.div 
                key={lang.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="flex items-end justify-between mb-3">
                  <div className="flex flex-col">
                     <span className="font-mono text-[7px] text-[#030585]/30 uppercase font-black tracking-widest mb-1">Lang_Key::{lang.key}</span>
                     <span className={`text-3xl md:text-4xl ${lang.key === 'ar' ? 'font-sans font-black' : 'font-script'} text-[#030585] group-hover:translate-x-2 transition-transform duration-500`}>
                       {lang.name}
                     </span>
                  </div>
                  <div className="flex flex-col items-end">
                     <span className="font-mono text-[9px] text-[#030585] font-black uppercase tracking-widest">{lang.level}</span>
                  </div>
                </div>
                
                <div className="h-[2px] w-full bg-[#030585]/5 relative overflow-hidden rounded-full">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: lang.level }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.5 + idx * 0.1, duration: 1.5, ease: "easeOut" }}
                     className="absolute inset-0 bg-[#030585]" 
                   />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interests - No Emojis, Larger Text */}
        <div className="lg:col-span-7">
          <SectionTitle 
            title={t('sections.interests.title')} 
            subtitle={t('sections.interests.subtitle')}
            id="07"
            align="right"
          />
          
          <div className="grid grid-cols-2 gap-4 mt-12">
            {INTERESTS.map((item) => (
              <motion.div 
                key={item.name}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative h-32 bg-white border border-[#030585]/10 flex flex-col items-center justify-center p-6 group overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl hover:border-[#030585]"
              >
                <div className="absolute inset-0 blue-halftone opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700" />
                
                <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                   <span className="display-font text-lg md:text-xl text-[#030585] uppercase tracking-[0.2em] font-black group-hover:tracking-[0.4em] transition-all">
                     {item.name}
                   </span>
                   <div className="w-10 h-[2px] bg-[#030585]/10 group-hover:bg-[#030585] transition-all duration-500" />
                </div>
                
                <div className="absolute top-2 left-3 font-mono text-[7px] text-[#030585]/20 uppercase font-black">
                   ITEM::{item.ref}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
