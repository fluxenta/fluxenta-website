import { SITE_CONFIG } from '@/constants/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold mb-4 md:mb-0">
          {SITE_CONFIG.name.toUpperCase()}
        </div>
        <div className="text-gray-400">
          © {currentYear} {SITE_CONFIG.name}. Engineering-led digital products.
        </div>
      </div>
    </footer>
  )
}