'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
// Import COLORS separately from GROWTH_ENGINE
import { GROWTH_ENGINE, COLORS, ANIMATION_VARIANTS } from '@/lib/constants';

export const GrowthEngine = () => {
  // Destructure only what exists in GROWTH_ENGINE
  const { GRAPH, METRICS } = GROWTH_ENGINE;

  return (
    <section className="relative bg-black py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 overflow-hidden">
      <motion.div 
        // Use FADE_IN since 'container' variant wasn't defined
        {...ANIMATION_VARIANTS.FADE_IN}
        className="max-w-[1400px] mx-auto"
      >
        <motion.div {...ANIMATION_VARIANTS.FADE_IN} className="mb-16 max-2-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            {GROWTH_ENGINE.TITLE}
          </h2>
          <p className="text-[#8a8784] text-lg leading-relaxed">
            {GROWTH_ENGINE.SUBTITLE}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <motion.div 
            {...ANIMATION_VARIANTS.FADE_IN}
            // Access COLORS directly (imported from constants)
            style={{ backgroundColor: COLORS.WHITE_02 }}
            className="lg:col-span-8 border border-white/10 rounded-[32px] p-8 min-h-[480px] relative overflow-hidden flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-stone-500 font-mono uppercase tracking-widest">{GROWTH_ENGINE.LABEL}</span>
                <span className="text-xs text-white font-bold">{GROWTH_ENGINE.STATUS_ACTIVE}</span>
              </div>
              <div className="flex gap-2 items-center">
                 <div className="w-2 h-2 rounded-full bg-cyan-custom animate-pulse" />
                 <span className="text-[10px] text-cyan-custom font-mono uppercase tracking-tighter">{GROWTH_ENGINE.TELEMETRY}</span>
              </div>
            </div>

            <div className="relative h-72 w-full mt-auto">
              <svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="none">
                <motion.path
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.15 }}
                  transition={{ duration: 1.5 }}
                  d={GRAPH.FILL}
                  fill="url(#growthGradient)"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  d={GRAPH.PATH}
                  fill="none"
                  stroke={COLORS.CYAN_CUSTOM}
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient id="growthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={COLORS.CYAN_CUSTOM} />
                    <stop offset="100%" stopColor={COLORS.TRANSPARENT} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            {METRICS.map((metric) => (
              <motion.div 
                key={metric.label}
                {...ANIMATION_VARIANTS.FADE_IN}
                whileHover={{ 
                  backgroundColor: COLORS.CYAN_TINT, 
                  borderColor: "rgba(102, 252, 243, 0.4)" 
                }}
                animate={{ 
                  backgroundColor: COLORS.WHITE_03, 
                  borderColor: COLORS.WHITE_10 
                }}
                className="border rounded-2xl p-6 flex justify-between items-center group transition-all duration-500"
              >
                <div className="space-y-1">
                  <p className="text-[#8a8784] text-[10px] font-mono uppercase tracking-[0.15em] group-hover:text-cyan-custom transition-colors">
                    {metric.label}
                  </p>
                  <h4 className="text-3xl font-bold text-white tracking-tight">{metric.value}</h4>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono uppercase px-2 py-1 rounded bg-white/5 border border-white/10 group-hover:bg-cyan-custom group-hover:text-black transition-all">
                    {metric.trend}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};