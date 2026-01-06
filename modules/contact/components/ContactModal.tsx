'use client'

import { useState } from 'react'
import { PhoneField } from './PhoneField'
import type { CountryCode } from 'libphonenumber-js'

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [idea, setIdea] = useState('')
  const [timeline, setTimeline] = useState('')
  const [country, setCountry] = useState<CountryCode | undefined>('IN')
  const [phone, setPhone] = useState<string | undefined>()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
          relative z-10
          w-full max-w-xl
          bg-white text-black
          border border-black/10
          rounded-2xl
          p-8
          shadow-2xl
          animate-fade-in
        "
      >
        <h3 className="text-3xl font-bold mb-2">
          Let’s Build Something
        </h3>

        <p className="text-gray-600 mb-8">
          Tell us a bit about your project — we’ll take it from here.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            onClose()
          }}
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="
                w-full
                bg-white text-black
                border border-gray-300
                rounded-lg px-4 py-3
                focus:ring-2 focus:ring-black/20
                outline-none
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full
                bg-white text-black
                border border-gray-300
                rounded-lg px-4 py-3
                focus:ring-2 focus:ring-black/20
                outline-none
              "
            />
          </div>

          {/* Phone */}
          <PhoneField
            phone={phone}
            setPhone={setPhone}
            country={country}
            setCountry={setCountry}
          />

          {/* Idea */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              What’s your idea?
            </label>
            <textarea
              rows={3}
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="
                w-full
                bg-white text-black
                border border-gray-300
                rounded-lg px-4 py-3
                focus:ring-2 focus:ring-black/20
                outline-none resize-none
              "
            />
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Expected Timeline
            </label>
            <select
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="
                w-full
                bg-white text-black
                border border-gray-300
                rounded-lg px-4 py-3
                focus:ring-2 focus:ring-black/20
              "
            >
              <option value="">Select</option>
              <option value="2-4 weeks">2–4 weeks</option>
              <option value="1-2 months">1–2 months</option>
              <option value="3+ months">3+ months</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full mt-6
              bg-black text-white
              py-4 rounded-lg
              font-semibold text-lg
              transition-all
              hover:bg-gray-900 hover:scale-[1.02]
            "
          >
            Send Request
          </button>
        </form>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
