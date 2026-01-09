'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OrbitProps {
  orbitItems: readonly {
    id: number;
    name: string;
    src: string;
  }[];
}

export const TechOrbit = ({ orbitItems }: OrbitProps) => {
  const [isHoveringBox, setIsHoveringBox] = React.useState(false);
  const [hoveredId, setHoveredId] = React.useState<number | null>(null);
  
  const radius = 160; 
  const step = 360 / orbitItems.length;

  return (
    <div 
      className="relative w-full aspect-square max-w-[500px] flex items-center justify-center"
      onMouseEnter={() => setIsHoveringBox(true)}
      onMouseLeave={() => {
        setIsHoveringBox(false);
        setHoveredId(null);
      }}
      style={{ touchAction: 'none' }}
    >
      
      {/* 1. CENTRAL STATIC FOCUS LAYER */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
        <AnimatePresence mode="wait">
          {hoveredId ? (
            <motion.div
              key="focused"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex flex-col items-center justify-center"
            >
              <img 
                src={orbitItems.find(t => t.id === hoveredId)?.src} 
                className="w-16 h-16 object-contain mb-4 drop-shadow-[0_0_25px_rgba(102,252,243,0.6)]" 
                alt="center-focus"
              />
              <span className="text-cyan-custom font-mono text-[10px] uppercase tracking-[0.4em] bg-black/80 px-3 py-1 rounded-full border border-cyan-custom/20">
                {orbitItems.find(t => t.id === hoveredId)?.name}
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#8a8784] font-mono text-[10px] uppercase tracking-[0.5em] opacity-50"
            >
              Tech_Core
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. THE ROTATING GROUP */}
      <motion.div
        animate={isHoveringBox ? { rotate: 0 } : { rotate: 360 }}
        transition={isHoveringBox 
            ? { type: "spring", stiffness: 50, damping: 20 } 
            : { duration: 40, repeat: Infinity, ease: "linear" }
        }
        style={{ 
          transformStyle: "preserve-3d",
          willChange: "transform"
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {orbitItems.map((item, i) => {
          const angle = i * step;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          const isThisIconHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              className="absolute"
              style={{ 
                left: `calc(50% + ${x}px)`, 
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
                perspective: '1000px'
              }}
            >
              <div
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative z-30 w-14 h-14 rounded-full cursor-pointer"
              >
                <motion.div
                  animate={{
                    x: isThisIconHovered ? -x : 0, 
                    y: isThisIconHovered ? -y : 0,
                    opacity: isThisIconHovered ? 0 : (hoveredId ? 0.15 : 1),
                    scale: isThisIconHovered ? 0.5 : 1,
                    rotate: isHoveringBox ? 0 : -360, 
                    // Use explicit RGBA to fix 'oklab' error
                    backgroundColor: isThisIconHovered 
                        ? "rgba(255, 255, 255, 0)" 
                        : "rgba(255, 255, 255, 0.05)",
                    borderColor: isThisIconHovered 
                        ? "rgba(102, 252, 243, 0.5)" 
                        : "rgba(255, 255, 255, 0.1)"
                  }}
                  transition={{ type: 'spring', stiffness: 150, damping: 25 }}
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    willChange: 'transform'
                  }}
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors"
                >
                  <img 
                    src={item.src} 
                    className="w-6 h-6 object-contain md:grayscale md:opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" 
                    alt={item.name}
                    loading="eager" 
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* 3. DECORATIVE BACKGROUND */}
      <div 
        className="absolute inset-0 border rounded-full scale-[0.85] pointer-events-none" 
        style={{ borderColor: "rgba(255, 255, 255, 0.03)" }}
      />
    </div>
  );
};