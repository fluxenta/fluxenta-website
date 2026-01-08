import { Button } from '@/modules/shared'
import { CONTENT } from '@/constants/data'
import { LAYOUT_CONFIG } from '@/constants/layout'

export function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center">
      {/* Added px-6 for mobile safety margin */}
      <div className={`w-full pt-32 pb-20 md:pt-24 md:pb-32 px-6 ${LAYOUT_CONFIG.containerPadding}`}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Responsive Text: text-4xl on mobile -> text-8xl on desktop */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight animate-fade-in break-words">
            {CONTENT.hero.title.line1}
            <br className="hidden md:block" /> {/* Hide break on mobile for flow */}
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent block md:inline mt-2 md:mt-0">
              {CONTENT.hero.title.line2}
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 mb-10 md:mb-12 max-w-3xl mx-auto animate-fade-in-delay leading-relaxed">
            {CONTENT.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <div className="w-full sm:w-auto">
              <Button href="#contact" variant="primary" showArrow className="w-full justify-center">
                {CONTENT.hero.cta.primary}
              </Button>
            </div>

            <div className="w-full sm:w-auto">
              <Button href="#services" variant="secondary" className="w-full justify-center">
                {CONTENT.hero.cta.secondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}