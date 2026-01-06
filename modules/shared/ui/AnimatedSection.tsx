'use client'

import { useEffect, useRef, useState } from 'react'
import { MOTION_CONFIG } from '@/constants/motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function AnimatedSection({
  children,
  className = '',
  style,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: MOTION_CONFIG.threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`
        transition-all
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${className}
      `}
      style={{
        transitionDuration: `${MOTION_CONFIG.duration}ms`,
        transitionTimingFunction: MOTION_CONFIG.easing,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
