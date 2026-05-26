import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Volume2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoSrc, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#01021A]/95 backdrop-blur-md cursor-pointer"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl md:max-w-5xl sm:max-w-[400px] bg-white border-4 border-[#030585] shadow-[30px_30px_0px_0px_rgba(3,5,133,0.2)] overflow-hidden z-10 mx-auto"
          >
            {/* Header */}
            <div className="bg-[#030585] p-3 md:p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-sm">
                  <Play size={14} className="fill-current" />
                </div>
                <div>
                  <h3 className="display-font text-[10px] md:text-sm font-black uppercase tracking-widest">{title}</h3>
                  <p className="font-mono text-[7px] md:text-[8px] text-white/50 uppercase tracking-[0.2em]">Source_File::{videoSrc.split('/').pop()}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer text-white"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Video Container */}
            <div className="aspect-[9/16] md:aspect-video bg-black relative group">
              <video 
                src={videoSrc} 
                controls 
                autoPlay 
                className="w-full h-full object-cover md:object-contain"
              />
              
              {/* Technical Overlays */}
              <div className="absolute top-4 left-4 pointer-events-none opacity-40">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span className="font-mono text-[9px] text-white font-black uppercase tracking-widest">REC_STREAM</span>
                </div>
                <div className="font-mono text-[7px] text-white uppercase font-black">
                  RESOLUTION: 1920x1080<br />
                  FRAME_RATE: 60FPS<br />
                  CODEC: H.264
                </div>
              </div>

              <div className="absolute bottom-4 right-4 pointer-events-none opacity-40">
                <div className="flex items-center gap-3">
                  <Volume2 size={12} className="text-white" />
                  <div className="flex gap-0.5">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-1 h-3 bg-white" style={{ opacity: Math.random() }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / Info */}
            <div className="p-4 border-t-2 border-[#030585]/10 flex justify-between items-center bg-[#030585]/2">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[8px] text-[#030585] font-black uppercase tracking-widest bg-white px-2 py-0.5 border border-[#030585]/20">
                  Buffer_Status::STABLE
                </span>
                <span className="font-mono text-[8px] text-[#030585]/40 uppercase tracking-widest">
                  Jnino_Media_Core_v1.0
                </span>
              </div>
              
              <button 
                onClick={onClose}
                className="group relative px-6 py-2 bg-[#030585] text-white overflow-hidden transition-all active:scale-95"
              >
                <span className="relative z-10 font-mono text-[9px] font-black uppercase tracking-widest">Fermer</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1] mix-blend-difference" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
