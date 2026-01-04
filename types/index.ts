import { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
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