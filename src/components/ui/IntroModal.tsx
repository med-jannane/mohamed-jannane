import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Music, Globe } from 'lucide-react';

interface IntroModalProps {
  onComplete: () => void;
}

export const IntroModal: React.FC<IntroModalProps> = ({ onComplete }) => {
  const { i18n } = useTranslation();
  const [step, setStep] = useState(1);

  const selectLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-[#01021A] p-4">
      {/* Background Ambience */}
      <div className="absolute inset-0 dot-pattern opacity-[0.05]" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-xl bg-white border-2 border-[#030585] p-8 md:p-16 shadow-[40px_40px_0px_0px_rgba(3,5,133,0.1)]"
      >
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <Globe className="w-12 h-12 text-[#030585] mx-auto mb-8 opacity-20" />
              <h2 className="font-script text-5xl md:text-6xl text-[#030585] mb-4">Bienvenue</h2>
              <p className="font-mono text-[10px] text-[#030585]/40 uppercase tracking-[0.3em] mb-12">Select your experience language</p>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { code: 'fr', label: 'Français' },
                  { code: 'en', label: 'English' },
                  { code: 'ar', label: 'العربية' }
                ].map((lng) => (
                  <button
                    key={lng.code}
                    onClick={() => selectLanguage(lng.code)}
                    className="group relative p-4 border-2 border-[#030585]/10 hover:border-[#030585] transition-all"
                  >
                    <span className="font-mono text-[10px] md:text-xs text-[#030585] font-black uppercase tracking-widest">{lng.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <Music className="w-12 h-12 text-[#030585] mx-auto mb-8 opacity-20" />
              <h2 className="font-script text-5xl md:text-6xl text-[#030585] mb-4">Expérience Sonore</h2>
              <p className="font-mono text-[10px] text-[#030585]/40 uppercase tracking-[0.3em] mb-12">Souhaitez-vous activer l'ambiance musicale ?</p>
              
              <div className="flex flex-col gap-4">
                <button
                  onClick={onComplete}
                  className="group relative py-6 bg-[#030585] text-white overflow-hidden shadow-2xl transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span className="relative z-10 font-mono text-xs md:text-sm font-black uppercase tracking-[0.4em]">Activer la Musique</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1] mix-blend-difference" />
                </button>
                
                <button
                  onClick={onComplete}
                  className="py-4 font-mono text-[10px] text-[#030585]/40 hover:text-[#030585] uppercase tracking-widest transition-colors"
                >
                  Continuer sans son
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Decorative corner element */}
        <div className="absolute bottom-4 right-4 font-mono text-[7px] text-[#030585]/20 uppercase font-black">
          Security_Protocol::ACTIVE
        </div>
      </motion.div>
    </div>
  );
};
