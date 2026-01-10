'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { SQUAD_SERVICES } from '@/lib/constants';

export const ServiceSticky = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative bg-black px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* LEFT SIDE: Sticky Header (Animation Core Removed) */}
        <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
            Your All-In-One <br />Growth Team.
          </h2>
          
          {/* Visual Asset removed as requested. 
              The text stays sticky to provide context for the cards.
          */}
        </div>

        {/* RIGHT SIDE: Stacking Service Cards (Tiles preserved as they were) */}
        <div className="lg:w-1/2 flex flex-col gap-[15vh] pb-[20vh]">
          {SQUAD_SERVICES.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  return (
    <motion.div
      style={{ 
        top: `calc(10% + ${index * 32}px)`, // Offset for stacking visibility
      }}
      className="sticky top-0 w-full min-h-[580px] md:h-[520px] bg-[#0A0A0A] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col overflow-hidden mb-10 md:mb-0"
    >
      <div className="flex justify-between items-start mb-12">
        <div>
          <span className="text-[#8a8784] font-mono text-xs uppercase tracking-widest block mb-2">
            {service.team}
          </span>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            {service.title}
          </h3>
        </div>
        <span className="text-white/10 font-bold text-7xl select-none">0{index + 1}</span>
      </div>

      <p className="text-[#8a8784] text-xl leading-relaxed mb-8 max-w-md">
        {service.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-3">
        {service.features.map((feature: string) => (
          <span 
            key={feature} 
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/80 font-medium"
          >
            {feature}
          </span>
        ))}
      </div>
      
      {/* Subtle accent glow */}
      <div 
        className="absolute -right-20 -bottom-20 w-64 h-64 blur-[100px] opacity-10 pointer-events-none"
        style={{ backgroundColor: service.color }}
      />
    </motion.div>
  );
};