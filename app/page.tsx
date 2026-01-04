'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Layers, LineChart, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            FLUXENTA
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-8"
          >
            <a href="#services" className="hover:text-gray-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
          </motion.div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Engineering-Led
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Digital Products
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            We design, build, and improve websites, web apps, and dashboards for startups and small businesses. High-quality execution. Clear communication. Long-term value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a href="#contact" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all flex items-center gap-2 group">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all">
              Our Services
            </a>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">What We Build</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, modern, and scalable solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black text-white p-8 rounded-2xl hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6">
                Small Team,
                <br />
                Big Impact
              </h2>
              <p className="text-xl text-gray-400 mb-6">
                Fluxenta is a 5-member engineering team that operates between freelancers and large agencies. We are small enough to be fast and personal, but technically strong enough to deliver production-grade solutions.
              </p>
              <p className="text-xl text-gray-400">
                Our focus: practical engineering over hype, long-term partnerships over one-off projects, and honest technical advice even if it means saying no.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-4 border-white pl-6">
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Modern Tech Stack</h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
              We use proven, industry-standard technologies. No over-engineering, no unnecessary complexity.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-black text-white p-6 rounded-xl font-semibold text-lg hover:scale-110 transition-transform"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Let&apos;s Build Together</h2>
            <p className="text-xl text-gray-400 mb-12">
              Ready to start your project? Get in touch and let&apos;s discuss how we can help.
            </p>
            <a
              href="mailto:hello@fluxenta.dev"
              className="inline-block bg-white text-black px-12 py-6 rounded-lg text-xl font-semibold hover:bg-gray-200 transition-all"
            >
              hello@fluxenta.dev
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">FLUXENTA</div>
          <div className="text-gray-400">
            © 2026 Fluxenta. Engineering-led digital products.
          </div>
        </div>
      </footer>
    </main>
  )
}

const services = [
  {
    icon: <Code2 className="w-12 h-12" />,
    title: "Web Apps",
    description: "React + Next.js applications built for scale and performance"
  },
  {
    icon: <Layers className="w-12 h-12" />,
    title: "Websites",
    description: "Fast, responsive, SEO-ready marketing websites"
  },
  {
    icon: <LineChart className="w-12 h-12" />,
    title: "Dashboards",
    description: "Internal tools and admin panels with real-time data"
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "MVP Builds",
    description: "Rapid prototyping and validation for startups"
  }
]

const stats = [
  { value: "5", label: "Engineering Team Members" },
  { value: "3+", label: "Years of Experience Each" },
  { value: "100%", label: "Focus on Quality" }
]

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Vercel",
  "Cloudflare",
  "GitHub"
]