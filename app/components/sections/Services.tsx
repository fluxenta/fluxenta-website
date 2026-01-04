import { ServiceCard } from '../ui/ServiceCard'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SERVICES } from '@/constants/data'

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">What We Build</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fast, modern, and scalable solutions tailored to your needs
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div key={service.id} style={{ transitionDelay: `${index * 100}ms` }}>
              <AnimatedSection>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}