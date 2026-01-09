'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MapPin, Globe } from 'lucide-react';
import { InlineWidget } from 'react-calendly'; // After installing, this error will vanish
import { COLORS, CONTACT_CONFIG, SITE_STRINGS } from '@/lib/constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // We use the hex version for Calendly's internal settings
  const brandCyan = "66fcf1"; 
  const darkBg = "0a0a0a";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop: High-Density Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xl"
          />

          {/* Modal Wrapper */}
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl h-[90vh] md:h-[80vh] bg-[#0A0A0A] border border-white/10 rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row pointer-events-auto"
            >
              {/* LEFT SIDE: Brand & Info */}
              <div className="w-full md:w-[35%] p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-12">
                    <span className="text-xl font-bold tracking-tighter text-white">
                      {SITE_STRINGS.NAV.LOGO}<span className="text-cyan-custom">.</span>
                    </span>
                    <button onClick={onClose} className="md:hidden p-2 bg-white/5 rounded-full">
                      <X size={20} className="text-white" />
                    </button>
                  </div>

                  <h2 className="text-4xl font-bold text-white tracking-tighter mb-4 leading-none">
                    Initialize <br /> <span className="text-cyan-custom">The Growth.</span>
                  </h2>
                  <p className="text-[#8a8784] text-sm leading-relaxed mb-12">
                    Secure your strategy session. We'll audit your current stack and engineer a path to 10x scale.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-custom transition-all">
                        <Mail size={16} className="text-cyan-custom" />
                      </div>
                      <span className="text-white font-mono text-xs uppercase tracking-widest">hello@fluxenta.dev</span>
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
                  <span className="text-[10px] text-stone-500 font-mono uppercase tracking-[0.3em] block mb-3">System_Node</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-custom animate-pulse" />
                    <span className="text-xs text-white font-bold uppercase tracking-tighter">Connection_Established</span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Calendly Widget */}
              <div className="flex-1 bg-white/[0.01] relative overflow-hidden">
                <button 
                  onClick={onClose}
                  className="absolute top-6 right-6 z-50 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all hidden md:block border border-white/10"
                >
                  <X size={18} className="text-white" />
                </button>

                <div className="h-full w-full custom-calendly-container">
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-custom/20 to-transparent z-10" />
                  <InlineWidget
                        url={CONTACT_CONFIG.CALENDLY_URL}
                        styles={{ 
                            height: '100%', 
                            minWidth: '320px',
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