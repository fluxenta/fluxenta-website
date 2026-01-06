import Link from 'next/link'
import { NAV_LINKS, SITE_CONFIG } from '@/constants/data'
import { LAYOUT_CONFIG } from '@/constants/layout'

export function Header() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
      {/* Padding wrapper */}
      <div className={`${LAYOUT_CONFIG.containerPadding} py-4`}>
        {/* Container */}
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold hover:opacity-80 transition"
          >
            {SITE_CONFIG.name.toUpperCase()}
          </Link>

          <div className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-gray-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
