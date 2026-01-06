import { Button } from '@/modules/shared'
import { CONTENT } from '@/constants/data'
import { LAYOUT_CONFIG } from '@/constants/layout'

export function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center">
      {/* Padding wrapper */}
      <div className={`w-full pt-24 pb-32 ${LAYOUT_CONFIG.containerPadding}`}>
        {/* Container */}
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight animate-fade-in">
            {CONTENT.hero.title.line1}
            <br />
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              {CONTENT.hero.title.line2}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-delay">
            {CONTENT.hero.description}
          </p>

          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-delay-2">
            <Button href="#contact" variant="primary" showArrow>
              {CONTENT.hero.cta.primary}
            </Button>

            <Button href="#services" variant="secondary">
              {CONTENT.hero.cta.secondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
