import { StatCard } from '../ui/StatCard'
import { STATS } from '@/constants/data'

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Small Team,
              <br />
              Big Impact
            </h2>
            <p className="text-xl text-gray-400 mb-6">
              Fluxenta is a 5-member engineering team that operates between freelancers 
              and large agencies. We are small enough to be fast and personal, but 
              technically strong enough to deliver production-grade solutions.
            </p>
            <p className="text-xl text-gray-400">
              Our focus: practical engineering over hype, long-term partnerships over 
              one-off projects, and honest technical advice even if it means saying no.
            </p>
          </div>

          {/* Right Column - Stats */}
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
    </section>
  )
}