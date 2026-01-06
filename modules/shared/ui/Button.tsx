'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: ButtonVariant
  showArrow?: boolean
  className?: string
}

export function Button({
  href,
  children,
  variant = 'primary',
  showArrow = false,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40'

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-white text-black hover:bg-gray-200',
    secondary:
      'border border-white text-white hover:bg-white hover:text-black',
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="w-5 h-5" aria-hidden />}
    </Link>
  )
}
