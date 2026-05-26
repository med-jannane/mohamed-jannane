import React from 'react';

export const CinematicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#FBFBFA] pointer-events-none overflow-hidden">
      {/* Main Kitchen Illustration Background - Desktop */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.4] sm:opacity-[0.55] transition-opacity duration-1000 hidden sm:block"
        style={{ 
          backgroundImage: "url('/chef-bg.png')"
        }}
      />

      {/* Optimized Vertical Background - Mobile Only */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.5] sm:hidden"
        style={{ 
          backgroundImage: "url('/ChatGPT Image May 24, 2026, 09_52_25 PM.png')"
        }}
      />

      {/* Signature Filigree (Parisienne) */}
      <div className="absolute inset-0 opacity-[0.04] flex items-center justify-center select-none overflow-hidden">
        <span className="font-script text-[15rem] md:text-[25rem] -rotate-12 whitespace-nowrap text-[#030585]">
          Mohamed Jannane Chef Développeur
        </span>
      </div>

      {/* Subtle UI Overlays */}
      <div className="absolute inset-0 opacity-[0.04]" 
           style={{ backgroundImage: 'radial-gradient(#030585 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply" 
           style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }} />
      
      {/* Cinematic Borders - Adjusted for Mobile */}
      <div className="absolute inset-4 md:inset-10 border-[1px] border-[#030585]/10 z-10 hidden sm:block" />
      
      {/* Soft Ambient Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBFBFA]/20 via-transparent to-[#FBFBFA]/50" />
    </div>
  );
};
