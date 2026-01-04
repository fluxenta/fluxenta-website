import { TechBadge } from '../ui/TechBadge'
import { TECH_STACK } from '@/constants/data'

export function TechStack() {
  return (
    <section className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Modern Tech Stack</h2>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          We use proven, industry-standard technologies. No over-engineering, 
          no unnecessary complexity.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TECH_STACK.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </section>
  )
}