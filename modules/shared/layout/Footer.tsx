import { SITE_CONFIG, CONTENT } from '@/constants/data'
import { LAYOUT_CONFIG } from '@/constants/layout'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* Padding wrapper */}
      <div className={`py-12 ${LAYOUT_CONFIG.containerPadding}`}>
        {/* Container */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            {SITE_CONFIG.name.toUpperCase()}
          </div>

          <div className="text-gray-400 text-sm">
            © {currentYear} {SITE_CONFIG.name}. {CONTENT.footer.tagline}
          </div>
        </div>
      </div>
    </footer>
  )
}
