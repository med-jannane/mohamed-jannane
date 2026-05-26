import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import * as SI from 'simple-icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d={SI.siGithub.path} />
        </svg>
      ), 
      href: "https://github.com/med-jannane" 
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ), 
      href: "https://www.linkedin.com/in/mohamed-jannane-46b332355" 
    },
    { 
      name: 'WhatsApp', 
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d={SI.siWhatsapp.path} />
        </svg>
      ), 
      href: "https://wa.me/212722779633" 
    }
  ];

  return (
    <footer className="relative z-10 bg-[#030585] text-white pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 mb-16">
          
          {/* Main Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-white leading-none mb-4">
                Mohamed Jannane
              </h2>
              <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-white/60 uppercase max-w-sm leading-relaxed">
                Senior Software Architect // Expert en ingénierie logicielle & architecture système de haute précision.
              </p>
            </motion.div>

            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#030585] hover:border-white transition-all duration-500 rounded-full"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-[0.4em] font-black border-b border-white/10 pb-2 inline-block">Navigation</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-3 font-sans text-xs font-black uppercase tracking-widest">
              <li><a href="#about" className="hover:text-white/60 transition-colors">À Propos</a></li>
              <li><a href="#menu" className="hover:text-white/60 transition-colors">Projets</a></li>
              <li><a href="#ingredients" className="hover:text-white/60 transition-colors">Skills</a></li>
              <li><a href="#reservations" className="hover:text-white/60 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-[0.4em] font-black border-b border-white/10 pb-2 inline-block">Direct_Line</h4>
            <div className="space-y-4">
              <div className="group">
                <span className="font-mono text-[8px] text-white/30 uppercase block mb-1">E-mail</span>
                <a href="mailto:mohamed26jannane@gmail.com" className="font-sans text-xs sm:text-sm font-black text-white hover:underline transition-all underline-offset-4 decoration-white/20">
                  MOHAMED26JANNANE@GMAIL.COM
                </a>
              </div>
              <div className="group">
                <span className="font-mono text-[8px] text-white/30 uppercase block mb-1">Localisation</span>
                <p className="font-sans text-xs sm:text-sm font-black text-white uppercase">
                  Casablanca, Maroc
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]" />
            <p className="font-mono text-[8px] text-white/40 uppercase tracking-[0.2em]">
              © 2026 Crafted by M. JANNANE // v2.6_Stable
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 font-mono text-[9px] text-white/50 uppercase tracking-[0.2em] hover:text-white transition-colors active:scale-95"
          >
            Return_to_Top
            <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#030585] transition-all">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
      
      {/* Decorative Branding */}
      <div className="absolute -bottom-6 -right-10 pointer-events-none select-none opacity-[0.03]">
        <h1 className="font-script text-[12rem] md:text-[15rem] text-white whitespace-nowrap">Jnino Code</h1>
      </div>
    </footer>
  );
};
