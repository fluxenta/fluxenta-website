'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SITE_STRINGS, ANIMATION_VARIANTS } from '@/lib/constants';

interface HeroProps {
  onCtaClick: () => void;
}

// --- CLEAN MATRIX COMPONENT (NO BOX) ---
const MatrixRain = () => {
  const streams = Array.from({ length: 20 });

  return (
    <div 
      className="relative w-full h-[400px] md:h-[600px] flex justify-around overflow-hidden font-mono text-sm md:text-xl"
      style={{ 
        maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
      }}
    >
      {streams.map((_, i) => (
        <SingleCharStream key={i} delay={i * 0.1} />
      ))}
    </div>
  );
};

const SingleCharStream = ({ delay }: { delay: number }) => {
  const [char, setChar] = useState("0");
  const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*";

  useEffect(() => {
    const interval = setInterval(() => {
      setChar(chars[Math.floor(Math.random() * chars.length)]);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: [0, 500], opacity: [0, 1, 1, 0] }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
      className="text-cyan-custom font-bold"
      style={{ textShadow: "0 0 12px rgba(102, 252, 241, 0.6)" }}
    >
      {char}
    </motion.div>
  );
};

// --- MAIN HERO COMPONENT ---
export const HeroStack = ({ onCtaClick }: HeroProps) => {
  const [isComplete, setIsComplete] = useState(false);
  const words = SITE_STRINGS.HERO.HEADLINE.split(" ");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: ANIMATION_VARIANTS.TYPEWRITER_SPEED },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center pt-32 pb-20 lg:pt-20 overflow-hidden bg-black">
      
      {/* LEFT SIDE: Typewriter Text & Action */}
      <div className="w-full lg:w-1/2 px-6 md:px-12 lg:pl-20 z-10">
        <motion.div 
          variants={container} 
          initial="hidden" 
          animate="visible" 
          onAnimationComplete={() => setIsComplete(true)}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] flex flex-wrap"
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-flex whitespace-nowrap mr-[0.25em]">
              {Array.from(word).map((char, charIndex) => (
                <motion.span
                  variants={letterVariants}
                  key={charIndex}
                  className={word.includes("Growth") ? "text-cyan-custom" : "text-white"}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.div>

        {/* This group animates in together after the typewriter finishes */}
        <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={isComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex flex-col items-start gap-10"
>
  <p className="mt-8 text-[#8a8784] text-lg md:text-xl max-w-xl leading-relaxed">
    {SITE_STRINGS.HERO.SUBTEXT}
  </p>
  
  <button 
    onClick={onCtaClick}
    className="group relative bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
  >
    {/* Subtle Inner Shine Effect */}
    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
    
    <span className="relative z-10 flex items-center gap-3">
      {SITE_STRINGS.HERO.CTA}
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </span>
    
    {/* Outer Glow */}
    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl bg-white/30 -z-10" />
  </button>
</motion.div>
      </div>

      {/* RIGHT SIDE: Floating Matrix Rain (No Box) */}
      <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex items-center justify-center pointer-events-none">
        <MatrixRain />
      </div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-custom/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};