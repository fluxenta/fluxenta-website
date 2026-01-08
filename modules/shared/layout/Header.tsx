"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SITE_CONFIG } from '@/constants/data';
import { LAYOUT_CONFIG } from '@/constants/layout';
import BookingModal from '@/modules/marketing/components/BookingFlow/BookingModal';
// Import icons. If you don't have Lucide, let me know and we can use SVGs.
import { Briefcase, Layers, Info, Mail, LayoutGrid } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Map icons to your links (You can also move this to your constants file)
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'services': return <Layers size={18} />;
      case 'work': return <Briefcase size={18} />;
      case 'about': return <Info size={18} />;
      case 'contact': return <Mail size={18} />;
      default: return <LayoutGrid size={18} />;
    }
  };

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] border-b border-white/10 transition-all bg-[#0f0f17]/90 backdrop-blur-md">
        <div className={`${LAYOUT_CONFIG.containerPadding} py-3`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center relative">
            
            {/* 1. Logo (Left) */}
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition text-white z-[101]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {SITE_CONFIG.name.toUpperCase()}
            </Link>

            {/* 2. Desktop Nav (Center) */}
            <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* 3. Right Side: CTA + Hamburger */}
            <div className="flex items-center gap-3 z-[101]">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-purple-600 text-white px-4 py-2 text-[10px] md:px-6 md:py-2.5 md:text-xs rounded-xl font-bold uppercase tracking-widest hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/20"
              >
                Book a Call
              </button>

              <button
                className="md:hidden text-white p-2 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                   // Close Icon (X)
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                   // Hamburger Icon
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 4. Mobile Menu Dropdown (The New Design) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              // Position absolute allows it to push content down or overlay cleanly
              className="absolute top-full left-0 w-full bg-[#0f0f17] border-b border-white/10 shadow-2xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all group"
                  >
                    {/* Icon Box */}
                    <span className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-600/20 group-hover:text-purple-400 transition-colors">
                      {getIcon(link.label)}
                    </span>
                    
                    {/* Text */}
                    <span className="text-lg font-medium tracking-wide">
                      {link.label}
                    </span>

                    {/* Arrow Indicator (Right aligned) */}
                    <span className="ml-auto text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </Link>
                ))}
              </div>
              
              {/* Optional Footer info in menu */}
              <div className="px-8 pb-6 pt-2 text-[10px] text-gray-600 uppercase tracking-widest">
                Fluxenta © 2026
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <BookingModal 
        open={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
}