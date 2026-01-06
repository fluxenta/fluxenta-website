import { TechBadge } from '@/modules/shared'
import { TECH_STACK, CONTENT } from '@/constants/data'
import { LAYOUT_CONFIG } from '@/constants/layout'

export function TechStack() {
  return (
    <section className="bg-white text-black">
      {/* Padding wrapper */}
      <div
        className={`${LAYOUT_CONFIG.sectionPadding} ${LAYOUT_CONFIG.containerPadding}`}
      >
        {/* Container */}
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            {CONTENT.techStack.heading}
          </h2>

          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            {CONTENT.techStack.subheading}
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {TECH_STACK.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
