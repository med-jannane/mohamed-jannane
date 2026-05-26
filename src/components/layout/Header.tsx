import React, { useState } from 'react';
import { X, Mail, ExternalLink } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import * as SI from 'simple-icons';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d={SI.siGithub.path} />
        </svg>
      ), 
      href: 'https://github.com/med-jannane', 
      color: 'hover:text-[#24292e]' 
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ), 
      href: 'https://www.linkedin.com/in/mohamed-jannane-46b332355', 
      color: 'hover:text-[#0077b5]' 
    },
    { 
      name: 'WhatsApp', 
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d={SI.siWhatsapp.path} />
        </svg>
      ), 
      href: 'https://wa.me/212722779633', 
      color: 'hover:text-[#25D366]' 
    },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:mohamed26jannane@gmail.com', color: 'hover:text-[#D14836]' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#030585] z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 w-full z-50 p-4 md:p-5 pointer-events-none"
      >
        <div className="max-w-[1300px] mx-auto flex justify-between items-center px-4 sm:px-8">
          
          <div className="pointer-events-auto bg-[#030585] p-1.5 md:p-2 shadow-2xl group cursor-pointer border border-white/10 rounded-sm">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm overflow-hidden group-hover:rotate-12 transition-transform duration-500 bg-white">
              <img 
                src="/Gemini_Generated_Image_t33xrht33xrht33x-modified.png" 
                alt="Jnino Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <nav className="hidden xl:flex pointer-events-auto items-center bg-white/70 backdrop-blur-xl border border-[#030585]/20 px-8 py-3 shadow-xl gap-10 rounded-full">
            {[
              { key: 'about', link: '#about' },
              { key: 'menu', link: '#menu' },
              { key: 'ingredients', link: '#ingredients' },
              { key: 'brigade', link: '#brigade' },
              { key: 'reservations', link: '#reservations' }
            ].map((item) => (
              <a 
                key={item.key} 
                href={item.link} 
                className="font-mono text-[10px] tracking-[0.2em] text-[#030585] hover:text-black transition-all font-black uppercase relative group/link"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#030585] group-hover/link:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="pointer-events-auto flex items-center gap-3 md:gap-4">
             <div className="flex bg-white/80 backdrop-blur-md border border-[#030585]/20 p-1 rounded-sm shadow-lg">
               {languages.map((lang) => (
                 <button
                   key={lang.code}
                   onClick={() => i18n.changeLanguage(lang.code)}
                   className={`text-[9px] md:text-[10px] font-black px-3 py-1.5 transition-all rounded-sm ${
                     i18n.language === lang.code 
                       ? 'bg-[#030585] text-white shadow-md' 
                       : 'text-[#030585] hover:bg-[#030585]/5'
                   }`}
                 >
                   {lang.label}
                 </button>
               ))}
             </div>

             <button 
               onClick={() => setIsModalOpen(true)}
               className="relative group overflow-hidden bg-[#030585] px-4 md:px-8 py-2 md:py-3 cursor-pointer shadow-2xl border border-[#030585] rounded-sm pointer-events-auto"
             >
                <span className="relative z-10 font-mono text-[8px] md:text-[11px] text-white uppercase font-black tracking-widest transition-colors duration-500">
                  {t('nav.order')}
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
                {/* Ensure text turns blue when background turns white on hover */}
                <style>{`
                  .group:hover span { color: #030585; }
                `}</style>
             </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#01021A]/80 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white border-2 border-[#030585] shadow-[20px_20px_0px_0px_rgba(3,5,133,0.2)] overflow-hidden z-10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 blue-halftone opacity-[0.05] pointer-events-none" />
              
              <div className="p-8 md:p-12 relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h2 className="font-script text-5xl text-[#030585] leading-none mb-2">Direct Order</h2>
                    <p className="font-mono text-[10px] text-[#030585]/40 uppercase tracking-widest">Connect with the Chef</p>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-[#030585]/10 rounded-full transition-colors text-[#030585] cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-5 border-2 border-[#030585]/10 hover:border-[#030585] hover:bg-[#030585] transition-all duration-500 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-[#030585] group-hover:text-white transition-colors">
                          {link.icon}
                        </div>
                        <span className="font-mono text-xs md:text-sm text-[#030585] group-hover:text-white font-black uppercase tracking-widest">
                          {link.name}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#030585]/20 group-hover:text-white/40 transition-colors" />
                    </a>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t-2 border-[#030585]/5 flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#030585] animate-pulse" />
                  <span className="font-mono text-[9px] text-[#030585] font-black uppercase tracking-widest">
                    Available_for_New_Missions_2026
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
