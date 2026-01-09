'use client';

import * as React from 'react';
import { Navbar } from "@/components/organisms/navbar";
import { HeroStack } from "@/modules/hero/hero-stack";
import { ServiceSticky } from "@/modules/flux-core/service-sticky";
import { GrowthEngine } from "@/modules/growth/growth-engine";
import { TechnicalBackbone } from "@/modules/tech/tech-stack-section";
import { ActivationGate } from "@/modules/cta/activation-gate";
import { Footer } from "@/components/organisms/footer";
import { ContactModal } from "@/components/contact-modal"; // Import the new modal

export default function Home() {
  // Centralized state to control the modal from any section
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <main className="bg-black min-h-screen selection:bg-cyan-custom selection:text-black">
      {/* 1. Navigation Layer - Pass trigger to the 'Book a Call' button */}
      <Navbar onContactClick={openContact} />

      {/* 2. Phase 01: Hero Section - Pass trigger to 'Start the Engine' */}
      <section id="hero">
        <HeroStack onCtaClick={openContact} />
      </section>

      {/* Phase 02: The Squad (Stacking Cards) */}
      <section id="squad">
        <ServiceSticky />
      </section>

      {/* Phase 03: Growth Engine (Dashboard) */}
      <section id="growth">
        <GrowthEngine />
      </section>

      {/* Phase 04 & 05: Technical Backbone */}
      <section id="tech">
        <TechnicalBackbone />
      </section>

      {/* 3. Phase 06: Activation Gate - Pass trigger to the 'Strategy Call' button */}
      <section id="contact">
        <ActivationGate onCtaClick={openContact} />
      </section>

      {/* The 3D Footer */}
      <Footer />

      {/* 4. Global Contact Modal Layer */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={closeContact} 
      />
    </main>
  );
}