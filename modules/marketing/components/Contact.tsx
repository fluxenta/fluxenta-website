'use client'

import { useState } from 'react'
import { SITE_CONFIG, CONTENT } from '@/constants/data'
import { LAYOUT_CONFIG } from '@/constants/layout'
import { ContactModal } from '@/modules/contact/components/ContactModal'

export function Contact() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section
        id="contact"
        className="bg-black text-white section-black-gap scroll-mt-24"
      >
        {/* Padding wrapper */}
        <div
          className={`${LAYOUT_CONFIG.sectionPadding} ${LAYOUT_CONFIG.containerPadding}`}
        >
          {/* Container */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {CONTENT.contact.heading}
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              {CONTENT.contact.subheading}
            </p>

            <button
              onClick={() => setOpen(true)}
              className="
                inline-flex items-center justify-center
                bg-white text-black
                px-12 py-6
                rounded-lg
                text-xl font-semibold
                transition-all duration-200
                hover:bg-gray-200 hover:scale-[1.02]
                focus:outline-none focus:ring-2 focus:ring-white/40
              "
            >
              {SITE_CONFIG.email}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Popup */}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
