import React from 'react';

export const ArtisticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#FBFBFA] pointer-events-none overflow-hidden">
      {/* Soft Ambient Light */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#030585]/3 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#030585]/2 blur-[100px] rounded-full" />

      {/* Ultra-fine Minimal Grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#030585 0.5px, transparent 0.5px), linear-gradient(90deg, #030585 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }} />

      {/* Organic Grain Texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply" 
           style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }} />
      
      {/* Elegant Border Frame */}
      <div className="absolute inset-6 md:inset-12 border-[0.5px] border-[#030585]/10 pointer-events-none" />
    </div>
  );
};
