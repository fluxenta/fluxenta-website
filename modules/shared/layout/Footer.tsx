import { SITE_CONFIG, CONTENT } from '@/constants/data'
import { LAYOUT_CONFIG } from '@/constants/layout'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className={`py-8 md:py-12 px-6 ${LAYOUT_CONFIG.containerPadding}`}>
        {/* Flex Column on mobile (stacked), Row on desktop */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-center md:text-left">
          <div className="text-xl md:text-2xl font-bold">
            {SITE_CONFIG.name.toUpperCase()}
          </div>

          <div className="text-gray-400 text-sm leading-relaxed">
            © {currentYear} {SITE_CONFIG.name}. {CONTENT.footer.tagline}
          </div>
        </div>
      </div>
    </footer>
  )
}