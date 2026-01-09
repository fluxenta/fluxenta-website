'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { FOOTER_STRINGS } from '@/lib/constants';
import { ShareButton } from '@/components/animate-ui/components/community/share-button';

export const Footer = () => {
  return (
    <footer className="bg-black pt-32 pb-0 px-6 md:px-12 lg:px-20 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-20">
        
        {/* TOP ROW: Larger, Brighter UI Elements */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          
          <div className="flex items-center gap-10">
            {/* Copyright: Increased size and brightness */}
            <span className="text-[#A3A3A3] font-mono text-[13px] tracking-[0.2em] uppercase">
              {FOOTER_STRINGS.COPYRIGHT}
            </span>
            
            {/* Share Button: More prominent and clear */}
            <ShareButton 
              size="md" 
              className="bg-transparent border border-white/20 text-[#E5E5E5] hover:text-white rounded-full px-6 h-10 transition-all hover:bg-white/10 hover:border-white/40"
            >
              <span className="text-[12px] font-mono tracking-widest uppercase font-bold">
                SHARE
              </span>
            </ShareButton>
          </div>

          {/* Policy Links: Larger and brighter for better visibility */}
          <div className="flex gap-12">
            {FOOTER_STRINGS.LEGAL.map((link) => (
              <span 
                key={link.name} 
                className="text-[#A3A3A3] cursor-default text-[12px] font-mono tracking-[0.15em] uppercase hover:text-white transition-colors"
              >
                {link.name}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW: The Locked 3D Logo */}
        <div className="relative select-none pointer-events-none w-full flex justify-center">
          <motion.h3 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[22vw] font-bold tracking-tighter leading-none"
            style={{
              color: '#0A0A0A', 
              textShadow: `
                -1px -1px 0px rgba(255,255,255,0.03), 
                1px 1px 0px rgba(0,0,0,0.8)
              `,
              background: 'linear-gradient(to bottom, #0F0F0F 0%, #050505 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {FOOTER_STRINGS.BRAND}
          </motion.h3>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </footer>
  );
};