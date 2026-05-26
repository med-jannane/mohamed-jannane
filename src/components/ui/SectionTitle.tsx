import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  id?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'left', id = "00" }) => {
  const isCenter = align === 'center';
  const isRight = align === 'right';

  return (
    <div className={`mb-10 flex flex-col ${isCenter ? 'items-center text-center' : isRight ? 'items-end text-right' : 'items-start text-left'} relative group`}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-2"
      >
        <span className="font-mono text-[8px] text-[#030585] font-black bg-[#030585]/5 px-2 py-0.5 rounded-sm">
          SECTION_ID: {id}
        </span>
        <div className="h-[1px] w-12 bg-[#030585]/20" />
      </motion.div>

      <div className="relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl text-[#030585] leading-none font-script relative z-10 drop-shadow-sm"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="display-font text-[8px] md:text-[9px] text-[#030585] uppercase tracking-[0.4em] mt-[-0.3rem] md:mt-[-0.5rem] ml-4 md:ml-6 font-black group-hover:opacity-100 transition-opacity"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};
