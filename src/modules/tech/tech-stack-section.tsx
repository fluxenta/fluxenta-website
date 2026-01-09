'use client';

import { TechOrbit } from './tech-orbit';
import { TECH_STACK } from '@/lib/constants';

export const TechnicalBackbone = () => {
  return (
    <section className="relative bg-black py-32 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        
        {/* LEFT SIDE: Narrative */}
        <div className="z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.95] mb-8">
            {TECH_STACK.TITLE}
          </h2>
          <div className="space-y-6 max-w-md">
            <p className="text-[#8a8784] text-xl leading-relaxed">
              {TECH_STACK.SUBTITLE}
            </p>
            <p className="text-[#8a8784] text-lg leading-relaxed italic">
              {TECH_STACK.TECH_DESCRIPTION}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Interactive Orbit */}
        <div className="flex justify-center items-center relative">
          <TechOrbit orbitItems={TECH_STACK.ORBIT_ITEMS} />
        </div>
      </div>
    </section>
  );
};