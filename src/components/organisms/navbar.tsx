'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_STRINGS } from '@/lib/constants';

 interface NavbarProps {
  onContactClick: () => void;
}
export const Navbar = ({ onContactClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* THE VIRTUAL SHIELD: This prevents site text from overlapping the navbar */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/90 to-transparent z-[90] pointer-events-none" />

      <nav className="fixed top-8 left-0 w-full z-[100] px-6 md:px-12">
        {/* Desktop Wrapper */}
        <div className="max-w-[1400px] mx-auto flex justify-between items-center relative h-14">
          
          {/* LEFT: Logo - Increased size to text-xl */}
          <div className="z-10">
            <a href="#hero" className="text-white text-xl lowercase tracking-tight font-semibold select-none cursor-pointer">
              {SITE_STRINGS.NAV.LOGO}
            </a>
          </div>

          {/* MIDDLE: Floating Nav Capsule (Desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 px-7 py-2.5 rounded-full flex gap-9 shadow-2xl">
              {SITE_STRINGS.NAV.LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-[#A3A3A3] hover:text-white transition-colors text-[0.95rem] font-medium tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Standalone CTA (Desktop) / Menu (Mobile) */}
          <div className="z-10">
            {/* Desktop CTA - Increased font-size and padding */}
            <a 
              href="#contact"
              className="hidden md:flex bg-white text-black px-7 py-2.5 rounded-full text-[0.9rem] font-bold hover:bg-cyan-custom transition-all duration-300 active:scale-95 items-center gap-3 group"
            >
              <span>{SITE_STRINGS.NAV.BOOK_CALL}</span>
              <span className="text-black/30 group-hover:text-black transition-colors font-light">→</span>
            </a>

            {/* Mobile "Menu" Pill */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center px-5 py-2.5 rounded-[12px] bg-white/10 border border-white/20 active:scale-95 transition-all"
            >
              <span className="text-[0.9rem] tracking-tight text-white font-medium uppercase">
                {isOpen ? SITE_STRINGS.NAV.CLOSE : SITE_STRINGS.NAV.MOBILE_MENU}
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE EXPANDABLE MENU */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 12 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-1/2 -translate-x-1/2 w-[94%] bg-black border border-white/10 rounded-[24px] p-8 flex flex-col h-[75vh] md:hidden overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col">
                {SITE_STRINGS.NAV.LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-[2.2rem] font-semibold text-white py-4 border-b border-white/5 flex justify-between items-center group active:text-cyan-custom transition-colors"
                  >
                    {link.name}
                    <span className="text-xl opacity-20 group-active:opacity-100 transition-opacity">→</span>
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <button onClick={onContactClick} className="text-xs font-mono border border-cyan-custom/30 px-4 py-2 rounded-full text-white hover:bg-cyan-custom hover:text-black transition-all">
        {SITE_STRINGS.NAV.BOOK_CALL}
      </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};