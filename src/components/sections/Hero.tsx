import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const marqueeText = "★ PRESERVING THE ART OF CODE ★ SERVING HIGH-PERFORMANCE APPLICATIONS ★ CRAFTING DIGITAL EXPERIENCES ★ 100% FRESH INGREDIENTS ★ EST. 2026 ★ ";

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      
      {/* Narrative Parallax Signature */}
      <motion.div 
        style={{ y }}
        className="absolute top-20 left-0 opacity-[0.03] pointer-events-none hidden xl:block"
      >
        <span className="font-script text-[10rem] text-[#030585] whitespace-nowrap">Signature de Chef</span>
      </motion.div>

      <div className="relative z-10 w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 items-center mb-8">
        
        {/* Left Column: Titles - MASSIVE PUSH RIGHT */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:translate-x-24 xl:translate-x-32">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#030585] leading-[0.8] mb-6 relative"
          >
            <h1 className="font-script text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] drop-shadow-md flex flex-col">
              <span>Chef</span>
              <span className="lg:ml-12">Exécutif</span>
              <span className="lg:ml-24">du Code</span>
            </h1>
          </motion.div>
          
          <div className="max-w-md lg:ml-4 space-y-4 md:space-y-6 flex flex-col items-center lg:items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="display-font text-xs sm:text-base md:text-lg lg:text-xl text-white bg-[#030585] px-4 py-2 transform -rotate-1 shadow-lg inline-block uppercase tracking-widest font-black"
            >
               {t('hero.subtitle')}
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs sm:text-sm md:text-base font-sans font-black text-[#030585] uppercase leading-tight tracking-tight border-l-4 lg:border-l-[8px] border-[#030585] pl-4 text-center lg:text-left max-w-sm"
            >
               {t('hero.pitch')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 items-center pt-2"
            >
               <a href="#menu" className="relative group px-6 py-3 bg-[#030585] text-white display-font text-[10px] sm:text-xs shadow-md uppercase font-black overflow-hidden active:scale-95 transition-all">
                 <span className="relative z-10">{t('hero.cta')}</span>
                 <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1] mix-blend-difference" />
               </a>
               
               <div className="flex flex-col border-l-2 border-[#030585]/30 pl-4 font-mono text-[7px] text-[#030585] font-black text-left">
                  <span className="uppercase tracking-widest">EST. 2026</span>
                  <span className="opacity-40 uppercase tracking-[0.2em] mt-0.5 text-[7px]">ULTIMATE_CHEF_D_OEUVRE</span>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Profile Illustration - MASSIVE PUSH LEFT */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0 lg:-translate-x-24 xl:-translate-x-32">
           <motion.div 
              initial={{ opacity: 0, rotate: 20, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 5, scale: 1 }}
              className="relative w-full max-w-[180px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[360px] aspect-[2/3] group"
           >
              <div className="absolute inset-0 bg-white border-[4px] sm:border-[8px] border-[#030585] shadow-[15px_15px_0px_0px_rgba(3,5,133,0.1)] overflow-hidden flex items-center justify-center p-1.5 transition-all duration-1000 group-hover:rotate-0 rotate-2">
                <img 
                  src="/Gemini_Generated_Image_u9qattu9qattu9qa.png" 
                  alt="Chef Jnino - Art of the Cut"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 blue-halftone opacity-[0.1] pointer-events-none" />
              </div>

              <motion.div 
                animate={{ rotate: [12, -8, 12], y: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-36 sm:h-36 bg-[#030585] rounded-full border-[3px] sm:border-[6px] border-white flex flex-col items-center justify-center p-2 sm:p-6 text-center z-40 rotate-12 shadow-lg"
              >
                 <span className="font-script text-white text-lg sm:text-2xl leading-none -rotate-12 mb-0.5 sm:mb-1 text-nowrap">Le Grand Chef</span>
                 <span className="display-font text-white text-[5px] sm:text-[8px] tracking-widest font-black border-t border-white/20 pt-1">
                    PREMIUM_QUALITY<br />CRAFTED_CODE
                 </span>
              </motion.div>
           </motion.div>
        </div>
      </div>

      {/* Marquee Bar - Fixed Positioning */}
      <div className="absolute bottom-0 left-0 w-full bg-[#030585] py-2 md:py-3 overflow-hidden whitespace-nowrap z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.2)] border-y-2 border-[#030585]">
        <motion.div 
          animate={{ x: [0, -3000] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 sm:gap-20 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="display-font text-white text-base sm:text-lg md:text-xl uppercase tracking-[0.3em] font-black italic">
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
