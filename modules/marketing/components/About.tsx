import { StatCard } from '@/modules/shared'
import { STATS, CONTENT } from '@/constants/data'
import { LAYOUT_CONFIG } from '@/constants/layout'

export function About() {
  return (
    <section id="about" className="bg-black text-white section-black-gap">
      {/* Padding wrapper */}
      <div
        className={`scroll-mt-24 ${LAYOUT_CONFIG.sectionPadding} ${LAYOUT_CONFIG.containerPadding}`}
      >
        {/* Container */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-5xl font-bold mb-6">
                {CONTENT.about.heading.line1}
                <br />
                {CONTENT.about.heading.line2}
              </h2>

              <p className="text-xl text-gray-400 mb-6">
                {CONTENT.about.paragraphs[0]}
              </p>

              <p className="text-xl text-gray-400">
                {CONTENT.about.paragraphs[1]}
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
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
