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

export const SERVICES: Service[] = [
  {
    id: 'web-apps',
    icon: Code2,
    title: 'Web Apps',
    description: 'React + Next.js applications built for scale and performance'
  },
  {
    id: 'websites',
    icon: Layers,
    title: 'Websites',
    description: 'Fast, responsive, SEO-ready marketing websites'
  },
  {
    id: 'dashboards',
    icon: LineChart,
    title: 'Dashboards',
    description: 'Internal tools and admin panels with real-time data'
  },
  {
    id: 'mvp-builds',
    icon: Zap,
    title: 'MVP Builds',
    description: 'Rapid prototyping and validation for startups'
  }
]

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