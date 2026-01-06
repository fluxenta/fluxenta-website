'use client'

import {
  Code2,
  Layers,
  LineChart,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { MOTION_CONFIG } from '@/constants/motion'
import type { ServiceIcon } from '@/types'

const ICON_MAP: Record<ServiceIcon, LucideIcon> = {
  code: Code2,
  layers: Layers,
  chart: LineChart,
  zap: Zap,
}

interface ServiceCardProps {
  icon: ServiceIcon
  title: string
  description: string
}

export function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  const Icon = ICON_MAP[icon]

  return (
    <div
      className="
        bg-black text-white
        p-8 rounded-2xl
        cursor-pointer
        transition-transform
        hover:scale-105
        group
      "
      style={{ transitionDuration: `${MOTION_CONFIG.duration}ms` }}
    >
      <Icon
        className="
          w-12 h-12 mb-4
          transition-transform
          group-hover:scale-110
        "
        aria-hidden
      />

      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>
    </div>
  )
}
