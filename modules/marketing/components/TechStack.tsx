import { TechBadge } from '@/modules/shared'
import { TECH_STACK, CONTENT } from '@/constants/data'
import { LAYOUT_CONFIG } from '@/constants/layout'

export function TechStack() {
  return (
    <section className="bg-white text-black">
      <div
        className={`px-6 md:px-0 py-16 md:py-24 ${LAYOUT_CONFIG.containerPadding}`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {CONTENT.techStack.heading}
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-16 max-w-2xl mx-auto">
            {CONTENT.techStack.subheading}
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {TECH_STACK.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}