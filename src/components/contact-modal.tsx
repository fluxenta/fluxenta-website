'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Globe } from 'lucide-react';
import { InlineWidget } from 'react-calendly';
import { CONTACT_CONFIG, SITE_STRINGS } from '@/lib/constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Wrapper */}
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-0 md:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl h-full md:h-[85vh] bg-[#0A0A0A] border-0 md:border md:border-white/10 rounded-none md:rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto"
            >
              {/* LEFT SIDE: Brand & Info - HIDDEN ON MOBILE TO SAVE SPACE */}
              <div className="hidden md:flex w-[35%] p-12 border-r border-white/5 flex-col justify-between bg-black">
                <div>
                  <div className="flex justify-between items-center mb-12">
                    <span className="text-xl font-bold tracking-tighter text-white">
                      {SITE_STRINGS.NAV.LOGO}<span className="text-cyan-custom">.</span>
                    </span>
                  </div>

                  <h2 className="text-4xl font-bold text-white tracking-tighter mb-4 leading-none">
                    Let’s Build Your <br /> <span className="text-cyan-custom">Vision.</span>
                  </h2>
                  <p className="text-[#8a8784] text-sm leading-relaxed mb-12">
                    Book a friendly call with us to discuss your goals. We will look at your current setup, listen to your ideas, and create a clear, step-by-step plan to help your business grow ten times bigger.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-custom transition-all">
                        <Mail size={16} className="text-cyan-custom" />
                      </div>
                      <span className="text-white font-mono text-xs tracking-widest">hello@fluxenta.dev</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Globe size={16} className="text-cyan-custom" />
                      </div>
                      <span className="text-white font-mono text-xs uppercase tracking-widest">Remote</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-custom" />
                    <span className="text-xs text-white font-bold uppercase tracking-tighter">Reliable</span>
                    
                    <span className="text-xs text-white font-bold uppercase ">professionals.</span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Calendly Widget */}
              <div className="flex-1 bg-[#0A0A0A] relative flex flex-col">
                {/* Mobile Close Button - Floats over the widget */}
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 z-[120] p-3 bg-white/5 rounded-full md:hidden border border-white/10"
                >
                  <X size={20} className="text-white" />
                </button>

                {/* Desktop Close Button */}
                <button 
                  onClick={onClose}
                  className="absolute top-6 right-6 z-50 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all hidden md:block border border-white/10"
                >
                  <X size={18} className="text-white" />
                </button>

                <div className="flex-1 w-full overflow-y-auto pt-12 md:pt-0">
                  <InlineWidget
                    url={CONTACT_CONFIG.CALENDLY_URL}
                    styles={{ 
                      height: '100%', 
                      minHeight: '650px', // Minimum height to ensure calendar is visible
                      width: '100%'
                    }}
                    pageSettings={{
                      backgroundColor: '0a0a0a', // Matches your exact site bg
                            hideEventTypeDetails: true, // Hides the "15 min" header that clutters the UI
                            hideLandingPageDetails: true, // Hides your profile picture/name
                            primaryColor: '66fcf1', // Your Cyan-Custom
                            textColor: 'ffffff',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}