import React, { useState, useRef, useEffect } from 'react';
import { AudioPlayer } from './audio-player';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrl = "/(FREE) 21 SAVAGE x JID TYPE BEAT TWISTED  CHILL RAP TYPE BEAT.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (playerRef.current && !playerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsExpanded(false);
      } else {
        audioRef.current.play().catch(err => console.error("Audio play failed:", err));
        setIsExpanded(true);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      setIsExpanded(!isExpanded);
    } else {
      togglePlay(e);
    }
  };

  return (
    <div ref={playerRef} className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[150] pointer-events-auto">
      <audio 
        ref={audioRef} 
        src={audioUrl} 
        loop 
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      {/* Desktop Version: Full Audio Player */}
      <div className="hidden lg:block">
        <AudioPlayer 
          src={audioUrl}
          cover="/Gemini_Generated_Image_ertbv3ertbv3ertb.png"
          title="L'Instru du Chef"
        />
      </div>

      {/* Mobile Version: Immersive Glassmorphism Controller */}
      <div className="lg:hidden flex flex-col items-end">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.5, y: 50, filter: 'blur(10px)' }}
              className="mb-6 relative"
              onClick={(e) => e.stopPropagation()} 
            >
              {/* Futuristic Glass Container */}
              <div className="bg-[#030585]/80 backdrop-blur-2xl p-4 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(3,5,133,0.5)] border border-white/20 w-[280px] overflow-hidden">
                <div className="absolute inset-0 blue-halftone opacity-10 pointer-events-none" />
                
                {/* Dynamic Liquid Wave Background */}
                <motion.div 
                  animate={{ 
                    x: [-20, 20, -20],
                    y: [-10, 10, -10]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/5 via-transparent to-transparent rotate-12 pointer-events-none"
                />

                <div className="relative z-10 flex flex-col items-center">
                  {/* Immersive Vinyl with Orbiting Particles */}
                  <div className="relative mb-6">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-24 h-24 rounded-full border-[3px] border-white/30 p-1 bg-black shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    >
                      <div className="w-full h-full rounded-full overflow-hidden relative">
                        <img 
                          src="/Gemini_Generated_Image_ertbv3ertbv3ertb.png" 
                          alt="cover" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#030585]/40 to-transparent mix-blend-overlay" />
                      </div>
                    </motion.div>
                    
                    {/* Orbiting Particle */}
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-10px] pointer-events-none"
                    >
                      <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
                    </motion.div>
                  </div>

                  {/* Metadata Dashboard */}
                  <div className="text-center w-full mb-4">
                    <motion.h4 
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="display-font text-xs font-black text-white uppercase tracking-[0.3em] mb-1"
                    >
                      L'Instru du Chef
                    </motion.h4>
                    <div className="flex justify-center items-center gap-2">
                      <span className="font-mono text-[7px] text-white/40 uppercase tracking-widest font-black">
                        System_Link::STABLE
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <motion.div 
                            key={i}
                            animate={{ scaleY: [1, 2.5, 1] }}
                            transition={{ duration: 0.4, delay: i * 0.1, repeat: Infinity }}
                            className="w-[2px] h-1.5 bg-white/60 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technical Footer */}
                  <div className="w-full pt-4 border-t border-white/10 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-mono text-[6px] text-white/30 uppercase">Bitrate</span>
                      <span className="font-mono text-[8px] text-white font-black">320KBPS</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-mono text-[6px] text-white/30 uppercase">Freq</span>
                      <span className="font-mono text-[8px] text-white font-black">44.1KHZ</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Master Control Sphere */}
        <motion.button
          onClick={toggleExpand}
          onDoubleClick={togglePlay}
          whileTap={{ scale: 0.85 }}
          className="relative w-20 h-20 group"
        >
          {/* Animated Background Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="36"
              className="fill-none stroke-white/5 stroke-[2px]"
            />
            {isPlaying && (
              <motion.circle
                cx="40"
                cy="40"
                r="36"
                className="fill-none stroke-white stroke-[2px]"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
            )}
          </svg>

          <div className="absolute inset-2 bg-[#030585] rounded-full shadow-[0_0_40px_rgba(3,5,133,0.6)] border border-white/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 blue-halftone opacity-50" />
            
            {/* Liquid Ripple Effect */}
            <AnimatePresence>
              {isPlaying && (
                <motion.div 
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 bg-white/30 rounded-full"
                />
              )}
            </AnimatePresence>

            <div className="relative z-10 text-white">
              {isPlaying ? (
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                  <Pause size={32} fill="currentColor" onClick={togglePlay} />
                </motion.div>
              ) : (
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                  <Play size={32} fill="currentColor" className="ml-1" onClick={togglePlay} />
                </motion.div>
              )}
            </div>
          </div>
        </motion.button>
      </div>
    </div>
  );
};
