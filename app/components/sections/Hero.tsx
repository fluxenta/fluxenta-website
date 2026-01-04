import { Button } from '../ui/Button'
import { SITE_CONFIG } from '@/constants/data'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight animate-fade-in">
          Engineering-Led
          <br />
          <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Digital Products
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-delay">
          {SITE_CONFIG.description}
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-delay-2">
          <Button href="#contact" variant="primary" showArrow>
            Start a Project
          </Button>
          <Button href="#services" variant="secondary">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}