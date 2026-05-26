import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactMethods = [
    { 
      label: 'E-mail', 
      val: 'mohamed26jannane@gmail.com', 
      href: 'mailto:mohamed26jannane@gmail.com',
      icon: <Mail className="w-6 h-6" />
    },
    { 
      label: 'WhatsApp', 
      val: '+212 722 779 633', 
      href: 'https://wa.me/212722779633',
      icon: <MessageCircle className="w-6 h-6" />
    },
    { 
      label: 'LinkedIn', 
      val: 'Mohamed Jannane', 
      href: 'https://www.linkedin.com/in/mohamed-jannane-46b332355',
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    { 
      label: 'Localisation', 
      val: 'Casablanca, Maroc',
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  return (
    <section id="reservations" className="py-24 px-2 sm:px-4 md:px-6 lg:px-8 max-w-[1800px] mx-auto border-t-2 border-[#030585]/20 relative bg-white">
      <div className="absolute inset-0 dot-pattern opacity-[0.05] pointer-events-none" />
      
      <SectionTitle 
        title="Ligne Directe" 
        subtitle="Entrons en Cuisine"
        id="08"
        align="center"
      />

      <div className="mt-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactMethods.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#030585]/2 border-2 border-[#030585]/10 p-8 md:p-10 hover:border-[#030585] transition-all duration-500 hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 blue-halftone opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none" />
              
              <div className="flex items-center gap-6 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#030585] flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                   {method.icon}
                </div>
                <div className="flex flex-col">
                   <span className="font-mono text-[10px] text-[#030585]/40 uppercase font-black tracking-[0.3em] mb-1">
                     {method.label}
                   </span>
                   <h3 className="display-font text-lg md:text-xl text-[#030585] font-black uppercase tracking-tighter">
                      Connect_Now
                   </h3>
                </div>
              </div>

              {method.href ? (
                <a 
                  href={method.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-sans text-base md:text-xl text-[#030585] font-black tracking-tight hover:translate-x-2 inline-block transition-transform uppercase underline decoration-2 underline-offset-8 decoration-[#030585]/20 hover:decoration-[#030585]"
                >
                  {method.val}
                </a>
              ) : (
                <p className="font-sans text-base md:text-xl text-[#030585] font-black tracking-tight uppercase">
                  {method.val}
                </p>
              )}

              <div className="mt-8 flex items-center gap-3">
                 <div className="h-[1px] flex-grow bg-[#030585]/10" />
                 <span className="font-mono text-[7px] text-[#030585]/30 uppercase font-black">
                   Protocol_Access::{method.label.toUpperCase()}
                 </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-script text-5xl md:text-6xl text-[#030585] leading-tight">
             À table avec la technologie.
          </p>
          <p className="font-mono text-[10px] text-[#030585]/40 uppercase tracking-[0.5em] mt-6">
            Master_Architect // Jnino_Selection_2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};
