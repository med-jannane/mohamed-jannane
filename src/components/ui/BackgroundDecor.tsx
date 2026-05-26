import React from 'react';
import { motion } from 'framer-motion';

const DECORATIVE_IMAGES = [
  { src: '/wallpwper/hd_restoration_result_image.png', pos: 'top-20 left-10', rotate: -8 },
  { src: '/wallpwper/hd_restoration_result_image (1).png', pos: 'top-1/3 right-12', rotate: 12 },
  { src: '/wallpwper/hd_restoration_result_image (2).png', pos: 'bottom-40 left-16', rotate: -5 },
];

export const BackgroundDecor: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {DECORATIVE_IMAGES.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, x: -20 }}
          animate={{ opacity: 0.6, scale: 1, x: 0 }}
          transition={{ delay: index * 0.3, duration: 1.5, ease: "easeOut" }}
          className={`absolute ${img.pos} w-48 h-48 md:w-96 md:h-96 opacity-60`}
          style={{ rotate: `${img.rotate}deg` }}
        >
          <img 
            src={img.src} 
            alt="" 
            className="w-full h-full object-contain grayscale-[20%] contrast-110"
          />
        </motion.div>
      ))}
      
      {/* Global Grain/Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-paper-texture pointer-events-none" />
    </div>
  );
};
