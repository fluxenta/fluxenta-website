import { StatCard } from '@/modules/shared'
import { STATS, CONTENT } from '@/constants/data'
import { LAYOUT_CONFIG } from '@/constants/layout'

export function About() {
  return (
    <section id="about" className="bg-black text-white section-black-gap">
      <div
        className={`scroll-mt-24 px-6 md:px-0 ${LAYOUT_CONFIG.sectionPadding} ${LAYOUT_CONFIG.containerPadding}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Grid stacks on mobile (default), 2 cols on md. Reduced gap from 16 to 10 on mobile. */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {CONTENT.about.heading.line1}
                <br />
                {CONTENT.about.heading.line2}
              </h2>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                {CONTENT.about.paragraphs[0]}
              </p>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                {CONTENT.about.paragraphs[1]}
              </p>
            </div>

            {/* Right Column - Stats */}
            <div className="space-y-4 md:space-y-6">
              {STATS.map((stat) => (
                <StatCard
                  key={stat.id}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}