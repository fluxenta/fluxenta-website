'use client';

import React from 'react';
import { TECH_STACK } from '@/lib/constants';

interface TechMarqueeProps {
  items: readonly string[];
  reverse?: boolean;
  speed?: number; // duration in seconds
}

export const TechMarquee = ({ items, reverse = false, speed = 30 }: TechMarqueeProps) => {
  return (
    <div className="w-full overflow-hidden flex flex-col py-4 select-none opacity-30">
      <div 
        className={`flex whitespace-nowrap gap-20 items-center ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* We double the items to create the seamless loop effect */}
        {[...items, ...items, ...items].map((logo, i) => (
          <span 
            key={i} 
            className={`text-2xl font-mono uppercase tracking-[0.2em] ${reverse ? 'text-cyan-custom/50' : 'text-white italic'}`}
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
};