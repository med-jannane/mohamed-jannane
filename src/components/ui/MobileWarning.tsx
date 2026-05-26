import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor } from 'lucide-react';

export const MobileWarning: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1024;
    if (isMobile) {
      setIsVisible(true);
    }
  }, []);

  const closeWarning = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#01021A] backdrop-blur-xl"
          />

          {/* High-End Technical Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-sm bg-white border-4 border-[#030585] shadow-[30px_30px_0px_0px_rgba(3,5,133,0.2)] overflow-hidden"
          >
            <div className="p-8 text-center relative z-10">
              <div className="flex justify-center mb-8 text-[#030585]">
                <Monitor size={64} strokeWidth={1} />
              </div>

              <h2 className="font-script text-6xl text-[#030585] leading-none mb-6">
                Chef-d'œuvre de Jnino
              </h2>
              
              <div className="space-y-4 mb-10">
                <p className="font-sans text-sm font-black text-[#030585] uppercase tracking-tighter leading-relaxed border-y-2 border-[#030585]/10 py-4">
                  Pour déguster pleinement l'excellence technique de Jnino, une expérience sur Ordinateur est vivement conseillée.
                </p>
                <p className="font-mono text-[9px] text-[#030585]/60 uppercase tracking-widest leading-relaxed">
                  Préparez-vous à une immersion totale dans l'univers de Mohamed Jannane.
                </p>
              </div>

              <button
                onClick={closeWarning}
                className="group relative w-full py-5 bg-[#030585] text-white overflow-hidden shadow-2xl transition-all active:scale-95 border-2 border-[#030585]"
              >
                <span className="relative z-10 font-mono text-[10px] font-black uppercase tracking-[0.3em]">Ignorer & Continuer</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1] mix-blend-difference" />
              </button>
            </div>

            <div className="absolute bottom-2 left-0 w-full flex justify-center opacity-10">
               <span className="font-mono text-[6px] uppercase font-black">Hardware_Incompatibility_Detected</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
