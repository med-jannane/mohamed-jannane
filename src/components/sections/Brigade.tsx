import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../ui/SectionTitle';
import { motion } from 'framer-motion';

const EDUCATION_ITEMS = [
  { year: '2022 - 2025', school: 'Tech University', degree: 'Computer Science Master', id: 'EDU_01' },
  { year: '2019 - 2022', school: 'Digital Academy', degree: 'Web Development Bachelor', id: 'EDU_02' },
];

const EXPERIENCE_ITEMS = [
  { period: 'Février 2026 - Présent', company: 'AEBDM', role: 'Stage en Développement', details: 'Développement d’un système de billetterie (Helpdesk/SAV) et gestion de la transition vers IIS et SQL Server.', id: 'EXP_01' },
  { period: '2026', company: 'Richbond', role: 'Mission Freelance', details: 'Automatisation de données et intégration SQL Server / IIS pour une grande entreprise marocaine.', id: 'EXP_02' },
  { period: '2026', company: 'Casa Podcast', role: 'Stage Production Audiovisuelle', details: 'Tournage, captation studio haut de gamme et montage vidéo professionnel.', id: 'EXP_03' },
  { period: '2021 - 2022', company: 'SAMU (Société Suadef)', role: 'Stage d’observation', details: 'Suivi des interventions d’urgence pour des soins à domicile et procédures médicales.', id: 'EXP_04' },
];

const VOLUNTEER_ITEMS = [
  { period: '2021 - Présent', org: 'CasaMémoire', role: 'Guide Bénévole', details: 'Médiation culturelle autour du patrimoine architectural de Casablanca.', id: 'VOL_01' },
  { period: '2021 - Présent', org: 'Kalb Lkbir & Écoles Riad', role: 'Membre Bénévole', details: 'Actions humanitaires, distribution d’aides et soutien scolaire.', id: 'VOL_02' },
];

export const Brigade: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="brigade" className="py-12 px-2 sm:px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto border-t-[0.5px] border-[#030585]/10 relative bg-white/30 backdrop-blur-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">
        
        {/* Professional Brigade */}
        <div className="lg:col-span-7 space-y-10">
          <SectionTitle 
            title={t('sections.brigade.title')} 
            subtitle={t('sections.brigade.subtitle')}
            id="04"
          />
          
          <div className="space-y-8">
            {EXPERIENCE_ITEMS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative pl-6 sm:pl-8 border-l-[3px] border-[#030585] pb-4"
              >
                <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-[#030585] shadow-[0_0_15px_rgba(3,5,133,0.3)] group-hover:scale-125 transition-all duration-500 border-2 border-white" />
                
                <span className="font-mono text-[8px] text-[#030585] uppercase font-black tracking-[0.2em] mb-1 block">
                  {item.period}
                </span>
                
                <h4 className="text-xl sm:text-2xl text-[#030585] leading-none mb-1 font-display font-black uppercase tracking-tighter">
                   {item.company}
                </h4>
                
                <p className="font-sans text-xs sm:text-sm text-[#030585] font-black uppercase tracking-tighter mb-2 opacity-80">
                  {item.role}
                </p>

                <div className="p-3 sm:p-4 bg-[#030585] text-white shadow-lg relative overflow-hidden">
                   <p className="font-sans text-[11px] sm:text-xs md:text-sm text-white leading-relaxed font-bold relative z-10">
                      {item.details}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engagement Side */}
        <div className="lg:col-span-5 space-y-10 lg:pt-16">
          <div className="p-4 sm:p-6 border-2 border-[#030585] bg-[#030585] text-white shadow-xl relative group overflow-hidden">
            <h3 className="display-font text-base sm:text-lg text-white mb-6 uppercase tracking-tighter font-black border-b border-white/20 pb-2 inline-block">
               Engagement
            </h3>
            
            <div className="space-y-6">
              {VOLUNTEER_ITEMS.map((item, idx) => (
                <div key={idx} className="group/item">
                  <span className="font-mono text-[7px] text-white/50 uppercase font-black mb-1 block">{item.period}</span>
                  <h4 className="text-base sm:text-lg text-white font-display font-black uppercase tracking-tighter mb-1 group-hover/item:translate-x-1 transition-transform">{item.org}</h4>
                  <p className="text-[9px] text-white bg-white/10 px-1.5 py-0.5 inline-block font-sans font-black uppercase tracking-widest mb-2">{item.role}</p>
                  <p className="text-[8px] sm:text-[9px] text-white/90 font-sans font-bold leading-relaxed italic border-l border-white/20 pl-3">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <SectionTitle title={t('sections.education.title')} subtitle={t('sections.education.subtitle')} id="05" align="right" />
            <div className="space-y-6">
               {EDUCATION_ITEMS.map((item, idx) => (
                  <div key={idx} className="text-right group">
                     <span className="font-mono text-[7px] text-[#030585]/40 uppercase font-black block mb-1">{item.year}</span>
                     <h4 className="text-lg sm:text-xl text-[#030585] font-display font-black uppercase tracking-tighter mb-0.5 group-hover:translate-x-[-5px] transition-transform">{item.school}</h4>
                     <p className="font-sans text-[10px] sm:text-xs text-[#030585] font-black uppercase tracking-tighter">{item.degree}</p>
                  </div>
               ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
