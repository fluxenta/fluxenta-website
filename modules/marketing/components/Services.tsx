import { ServiceCard, AnimatedSection } from '@/modules/shared'
import { SERVICES, CONTENT } from '@/constants/data'
import { LAYOUT_CONFIG } from '@/constants/layout'

export function Services() {
  return (
    <section id="services" className="bg-white text-black">
      {/* Padding wrapper */}
      <div
        className={`scroll-mt-24 bg-white text-black pt-32 pb-32 ${LAYOUT_CONFIG.sectionPadding} ${LAYOUT_CONFIG.containerPadding}`}
      >
        {/* Container */}
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {CONTENT.services.heading}
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {CONTENT.services.subheading}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
