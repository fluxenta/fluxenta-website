export interface SiteConfig {
  name: string
  tagline: string
  description: string
  email: string
  urls: {
    production: string
    staging: string
  }
}

export type ServiceIcon = 'code' | 'layers' | 'chart' | 'zap'

export interface Service {
  id: string
  icon: ServiceIcon
  title: string
  description: string
}

export interface Stat {
  id: string
  value: string
  label: string
}

export interface NavLink {
  href: string
  label: string
}
