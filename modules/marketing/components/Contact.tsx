"use client";
import { useState } from 'react';
import BookingModal from './BookingFlow/BookingModal'; 

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    // Reduced vertical padding on mobile (py-16) vs desktop (py-24)
    <section id="contact" className="py-16 md:py-24 bg-black text-white text-center">
      <div className="container mx-auto px-6 md:px-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter uppercase leading-tight">
          Ready to Launch?
        </h2>
        <p className="text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
          Transform your vision into a digital reality. Secure your discovery session today.
        </p>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg md:text-xl uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Start Your Journey
        </button>

        <BookingModal 
          open={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </section>
  );
}