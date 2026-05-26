import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-[#030585] flex flex-col items-center justify-center text-white overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-[0.1] pointer-events-none" />
      <motion.div 
        animate={{ 
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"
      />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex flex-col items-center gap-2 mb-6">
            <span className="font-mono text-[8px] md:text-[10px] tracking-[1em] text-white/40 uppercase">
              Establishment_2026
            </span>
            <div className="h-[1px] w-24 bg-white/20" />
          </div>

          <h1 className="font-script text-[4.5rem] sm:text-[9rem] md:text-[11rem] lg:text-[14rem] text-white leading-none drop-shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
            Le Grand Chef
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center mt-4 sm:mt-2 md:mt-4"
          >
            <p className="font-script text-2xl sm:text-5xl lg:text-6xl text-white/80 mb-4">
              Mohamed Jannane
            </p>
            <p className="font-mono text-[9px] md:text-[11px] tracking-[0.5em] text-white/40 uppercase">
              Senior Software Architect // Innovation Lab
            </p>
          </motion.div>
        </motion.div>

        <div className="w-full max-w-xl space-y-6 mx-auto">
          {/* Progress Bar with stylized markers */}
          <div className="relative h-[2px] bg-white/10 overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              style={{ originX: 0 }}
            />
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/10" />
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/10" />
            <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/10" />
          </div>
          
          {/* Multi-line Status Log */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left font-mono text-[7px] md:text-[8px] uppercase tracking-widest text-white/40">
            <div className="space-y-1">
              <p className={progress > 10 ? "text-white/80" : ""}>[ OK ] Initializing_Global_State</p>
              <p className={progress > 30 ? "text-white/80" : ""}>[ OK ] Loading_Neural_Architectures</p>
              <p className={progress > 50 ? "text-white/80" : ""}>[ OK ] Compiling_Core_Experiences</p>
              <p className={progress > 70 ? "text-white/80" : ""}>[ OK ] Optimizing_Visual_Engine</p>
            </div>
            <div className="space-y-1 md:text-right">
              <p>Buffer_Status: {progress}%</p>
              <p>Engine_Version: 5.8.2_STABLE</p>
              <p>Memory_Allocation: SECURE</p>
              <p>Security_Protocol: VERIFIED</p>
            </div>
          </div>
        </div>
        
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 font-script text-xl md:text-2xl text-white/50 italic"
        >
          "Le code est l'art de donner vie à l'imaginaire."
        </motion.div>
      </div>

      {/* Decorative Technical Overlay */}
      <div className="absolute bottom-10 left-10 font-mono text-[9px] text-white/20 leading-relaxed hidden sm:block">
        PORTFOLIO_SYSTEM_OS v2.6<br />
        CRAFTED_WITH_PRECISION<br />
        CASABLANCA_COORD: 33.5731° N
      </div>

      <div className="absolute top-10 right-10 flex flex-col items-end gap-1 opacity-20">
        <div className="w-12 h-1 bg-white" />
        <div className="w-8 h-1 bg-white" />
        <div className="w-4 h-1 bg-white" />
      </div>
    </motion.div>
  );
};
