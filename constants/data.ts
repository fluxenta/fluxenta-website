import { Code2, Layers, LineChart, Zap } from 'lucide-react'
import type { SiteConfig, Service, Stat, NavLink } from '@/types'


export const SITE_CONFIG: SiteConfig = {
  name: 'Fluxenta',
  tagline: 'Engineering-Led Digital Products',
  description: 'We design, build, and improve websites, web apps, and dashboards for startups and small businesses. High-quality execution. Clear communication. Long-term value.',
  email: 'hello@fluxenta.dev',
  urls: {
    production: 'https://fluxenta.dev',
    staging: 'https://staging.fluxenta.dev'
  }
}

export const SERVICES = [
  {
    id: 'web-apps',
    icon: 'code',
    title: 'Web Apps',
    description: 'React + Next.js applications built for scale and performance',
  },
  {
    id: 'websites',
    icon: 'layers',
    title: 'Websites',
    description: 'Fast, responsive, SEO-ready marketing websites',
  },
  {
    id: 'dashboards',
    icon: 'chart',
    title: 'Dashboards',
    description: 'Internal tools and admin panels with real-time data',
  },
  {
    id: 'mvp-builds',
    icon: 'zap',
    title: 'MVP Builds',
    description: 'Rapid prototyping and validation for startups',
  },
] as const


export const STATS: Stat[] = [
  { id: 'team', value: '5', label: 'Engineering Team Members' },
  { id: 'experience', value: '3+', label: 'Years of Experience Each' },
  { id: 'quality', value: '100%', label: 'Focus on Quality' }
]

export const TECH_STACK: string[] = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Vercel',
  'Cloudflare',
  'GitHub'
]

export const NAV_LINKS: NavLink[] = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
]


export const CONTENT = {
  hero: {
  title: {
    line1: 'Engineering-Led',
    line2: 'Digital Products',
  },
  description:
    'We help startups and teams build scalable, high-quality web products and platforms.',
  cta: {
    primary: 'Start a Project',
    secondary: 'Our Services',
  },
},

  services: {
    heading: 'What We Build',
    subheading: 'Fast, modern, and scalable solutions tailored to your needs'
  },
  about: {
    heading: {
      line1: 'Small Team,',
      line2: 'Big Impact'
    },
    paragraphs: [
      'Fluxenta is a 5-member engineering team that operates between freelancers and large agencies. We are small enough to be fast and personal, but technically strong enough to deliver production-grade solutions.',
      'Our focus: practical engineering over hype, long-term partnerships over one-off projects, and honest technical advice even if it means saying no.'
    ]
  },
  techStack: {
    heading: 'Modern Tech Stack',
    subheading: 'We use proven, industry-standard technologies. No over-engineering, no unnecessary complexity.'
  },
  contact: {
    heading: "Let's Build Together",
    subheading: "Ready to start your project? Get in touch and let's discuss how we can help."
  },
  footer: {
    tagline: 'Engineering-led digital products.'
  }
}