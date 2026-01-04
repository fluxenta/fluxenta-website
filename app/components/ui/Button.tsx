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
  className = ''
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center gap-2'
  
  const variantStyles = {
    primary: 'bg-white text-black hover:bg-gray-200',
    secondary: 'border border-white hover:bg-white hover:text-black'
  }

  return (
    <Link 
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="w-5 h-5" />}
    </Link>
  )
}