import { SITE_CONFIG } from '@/constants/data'

export function Contact() {
  const emailLink = `mailto:${SITE_CONFIG.email}`
  
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Let&apos;s Build Together
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Ready to start your project? Get in touch and let&apos;s discuss how we can help.
        </p>
        <a href={emailLink} className="inline-block bg-white text-black px-12 py-6 rounded-lg text-xl font-semibold hover:bg-gray-200 transition-all">
          {SITE_CONFIG.email}
        </a>
      </div>
    </section>
  )
}