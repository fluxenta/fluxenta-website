import { ServiceCard, AnimatedSection } from '@/modules/shared'
import { SERVICES, CONTENT } from '@/constants/data'
import { LAYOUT_CONFIG } from '@/constants/layout'

export function Services() {
  return (
    <section id="services" className="bg-white text-black">
      <div
        // Changed vertical padding: py-16 (mobile) -> py-32 (desktop)
        className={`scroll-mt-24 bg-white text-black py-16 md:py-32 px-6 ${LAYOUT_CONFIG.containerPadding}`}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              {CONTENT.services.heading}
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {CONTENT.services.subheading}
            </p>
          </AnimatedSection>

          {/* Grid: 1 col (mobile) -> 2 col (tablet) -> 4 col (desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((service, index) => (
              <AnimatedSection
                key={service.id}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}