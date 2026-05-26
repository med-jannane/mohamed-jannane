import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';

const WORKSHOPS = [
  { title: 'Frameworks CSS', detail: 'Atelier pratique sur l’utilisation et l’intégration de Bootstrap.', id: 'WKS_01' },
  { title: 'Sécurité & Web', detail: 'Présentation détaillée sur le fonctionnement et la gestion d’un Cookie de Session.', id: 'WKS_02' },
  { title: 'Développement de Jeux', detail: 'Workshop sur Pygame et exploration technique du jeu "Jumpman".', id: 'WKS_03' },
  { title: 'Python Avancé', detail: 'Utilisation des Regex appliquées dans la POO en Python.', id: 'WKS_04' },
  { title: 'Intelligence Artificielle', detail: 'Atelier pratique sur les modèles de classification d’images.', id: 'WKS_05' }
];

export const Workshops: React.FC = () => {
  return (
    <section id="workshops" className="py-16 px-2 sm:px-4 md:px-6 lg:px-8 max-w-[1800px] mx-auto border-t-[0.5px] border-[#030585]/10">
      <SectionTitle 
        title="Démonstrations" 
        subtitle="Workshops & Présentations"
        id="06"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {WORKSHOPS.map((wks, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-5 sm:p-6 border border-[#030585]/10 bg-[#030585]/2 relative group overflow-hidden hover:bg-[#030585] transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-16 h-16 blue-halftone opacity-[0.05] group-hover:opacity-20 transition-opacity" />
            
            <span className="font-mono text-[8px] text-[#030585]/40 group-hover:text-white/40 uppercase font-black tracking-widest block mb-3">
              EVENT_LOG::{wks.id}
            </span>
            
            <h4 className="display-font text-base sm:text-lg text-[#030585] group-hover:text-white transition-colors uppercase font-black tracking-tighter mb-3 leading-tight">
               {wks.title}
            </h4>
            
            <p className="font-sans text-[11px] sm:text-xs text-[#030585]/70 group-hover:text-white/80 transition-colors leading-relaxed font-black">
               {wks.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
