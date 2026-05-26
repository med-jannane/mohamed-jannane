import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = () => {
      const target = document.querySelectorAll('a, button, [role="button"]');
      target.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    handleHover();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* The Main Dot */}
      <motion.div
        className="w-3 h-3 bg-[#030585] rounded-full fixed top-0 left-0"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovered ? 2 : 1,
        }}
      />
      
      {/* The Outer Ring */}
      <motion.div
        className="w-8 h-8 border border-[#030585] rounded-full fixed top-0 left-0"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovered ? 2.5 : 1,
          opacity: isHovered ? 0.3 : 0.6,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250 }}
      />

      {/* Senior Detail: Trailing Crosshair */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
        >
          <div className="absolute w-[40px] h-[1px] bg-[#030585]/20 left-1/2 -translate-x-1/2" />
          <div className="absolute h-[40px] w-[1px] bg-[#030585]/20 top-1/2 -translate-y-1/2" />
        </motion.div>
      )}
    </div>
  );
};
