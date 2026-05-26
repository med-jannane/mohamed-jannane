import React, { useState, useEffect } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Menu } from './components/sections/Menu'
import { Ingredients } from './components/sections/Ingredients'
import { Workshops } from './components/sections/Workshops'
import { Brigade } from './components/sections/Brigade'
import { SideDishes } from './components/sections/SideDishes'
import { Contact } from './components/sections/Contact'
import { Loader } from './components/ui/Loader'
import { CinematicBackground } from './components/ui/CinematicBackground'
import { MusicPlayer } from './components/ui/MusicPlayer'
import { MobileWarning } from './components/ui/MobileWarning'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function App() {
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen selection:bg-[#030585] selection:text-white relative"
      >
        <MobileWarning />
        <CinematicBackground />
        <MusicPlayer />
        
        <Header />
        
        <main className="relative z-10 pt-12 overflow-x-hidden">
          <Hero />
          <div className="flex flex-col space-y-8 sm:space-y-12 md:space-y-16">
            <SectionWrapper><About /></SectionWrapper>
            <SectionWrapper><Menu /></SectionWrapper>
            <SectionWrapper><Ingredients /></SectionWrapper>
            
            {/* Mid-Page Ticker */}
            <div className="py-4 bg-[#030585] overflow-hidden whitespace-nowrap border-y-2 border-[#030585]">
               <motion.div 
                 animate={{ x: [-2000, 0] }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="flex gap-12 items-center"
               >
                 {[...Array(10)].map((_, i) => (
                   <span key={i} className="display-font text-white text-lg uppercase tracking-[0.3em] font-black italic">
                     ★ MICHELIN_STAR_CODE ★ ZERO_LATENCY_SERVICE ★ ARCHITECTURAL_RIGOR ★ SCALABLE_RECIPES ★ 
                   </span>
                 ))}
               </motion.div>
            </div>

            <SectionWrapper><Workshops /></SectionWrapper>
            <SectionWrapper><Brigade /></SectionWrapper>
            <SectionWrapper><SideDishes /></SectionWrapper>
            <SectionWrapper><Contact /></SectionWrapper>
          </div>
        </main>
        
        <Footer />
      </motion.div>
    </>
  )
}

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className="px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1300px] mx-auto w-full"
  >
    {children}
  </motion.div>
);

export default App
