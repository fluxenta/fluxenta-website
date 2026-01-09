'use client';

import { motion } from 'framer-motion';
import { ACTIVATION_GATE } from '@/lib/constants';

interface ActivationProps {
  onCtaClick: () => void;
}

export const ActivationGate = ({ onCtaClick }: ActivationProps) => {
  return (
    <section 
      id="contact" 
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden py-24 px-6"
    >
      {/* 1. ISOLATED BACKGROUND LAYER - Lower Z-Index */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(102, 252, 241, 0.2) 0%, transparent 70%)',
            filter: 'blur(100px)',
            willChange: 'transform, opacity' // Helps browser optimize the animation
          }}
        />
      </div>

      {/* 2. CONTENT LAYER - Higher Z-Index */}
      <div className="relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }} // 'once: true' prevents repeat flickering on scroll
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-10">
            {ACTIVATION_GATE.TITLE}
          </h2>
          
          <p className="text-[#8a8784] text-xl md:text-2xl mb-14 font-medium italic">
            {ACTIVATION_GATE.SUBTITLE}
          </p>

          <button onClick={onCtaClick} className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:bg-cyan-custom hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-3">
              {ACTIVATION_GATE.BUTTON_TEXT}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};