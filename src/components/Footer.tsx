import Link from 'next/link';
import { Instagram, Mail, Phone } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

type FooterProps = { t: Dict; locale: Locale };

export default function Footer({ t, locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F9F5EF] text-[#1A1A1A] border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-10 sm:mb-12">
          <div>
            <h3 className="text-2xl sm:text-3xl font-script mb-4">Nativo Arte</h3>
            <p className="text-sm sm:text-base text-[#1A1A1A]/60 leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/nativo_arte_jewelry/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#D4AF37]/20 border border-[#D4AF37]/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#1A1A1A]" />
              </a>
              <a 
                href="mailto:contacto@nativoarte.com"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#D4AF37]/20 border border-[#D4AF37]/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-[#1A1A1A]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-light mb-4 sm:mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href={`/${locale}`} className="text-[#1A1A1A]/60 hover:text-[#D4AF37] transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/sobre-nosotros`} className="text-[#1A1A1A]/60 hover:text-[#D4AF37] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/coleccion`} className="text-[#1A1A1A]/60 hover:text-[#D4AF37] transition-colors">
                  {t.nav.collection}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contacto`} className="text-[#1A1A1A]/60 hover:text-[#D4AF37] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-light mb-4 sm:mb-6">{t.footer.contact}</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#1A1A1A]/60" />
                <span className="text-[#1A1A1A]/60">contacto@nativoarte.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-[#1A1A1A]/60" />
                <span className="text-[#1A1A1A]/60">@nativo_arte_jewelry</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#1A1A1A]/60" />
                <span className="text-[#1A1A1A]/60">+971 55 577 0098</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/10 pt-6 sm:pt-8 text-center">
          <p className="text-[#1A1A1A]/60 text-xs sm:text-sm">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
