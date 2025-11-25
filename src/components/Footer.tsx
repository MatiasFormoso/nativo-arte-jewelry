import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, Phone } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

type FooterProps = { t: Dict; locale: Locale };

export default function Footer({ t, locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F9F5EF] relative overflow-hidden">
      {/* Textura de pinceladas sutiles en el fondo */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute bottom-0 left-0 w-[50%] h-[40%] bg-gradient-to-tr from-[#D4AF37]/8 via-transparent to-transparent blur-3xl"></div>
      </div>
      
      {/* Línea dorada decorativa superior elegante */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-10 sm:mb-12">
          <div>
            <Link href={`/${locale}`} className="inline-block mb-4">
              <Image
                src="/images/logo/logoNativo.png"
                alt="Nativo Arte"
                width={200}
                height={50}
                className="h-12 sm:h-16 md:h-20 w-auto"
                style={{ objectFit: 'contain', filter: 'brightness(0.66) contrast(1.3)' }}
                priority={false}
                quality={90}
              />
            </Link>
            <p className="text-sm sm:text-base text-[#8B7355]/70 leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/nativo_arte_jewelry/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#C9A85A]/10 rounded-full flex items-center justify-center hover:bg-[#C9A85A]/20 border border-[#8B7355]/30 transition-all duration-300 hover:border-[#8B7355]/50"
              >
                <Instagram className="w-5 h-5 text-[#8B7355]" />
              </a>
              <a 
                href="mailto:trujilloclaudia2@gmail.com"
                className="w-10 h-10 bg-[#C9A85A]/10 rounded-full flex items-center justify-center hover:bg-[#C9A85A]/20 border border-[#8B7355]/30 transition-all duration-300 hover:border-[#8B7355]/50"
              >
                <Mail className="w-5 h-5 text-[#8B7355]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-light mb-4 sm:mb-6 text-[#8B6914]">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href={`/${locale}`} className="text-[#8B7355]/70 hover:text-[#8B7355] transition-colors duration-300">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/sobre-nosotros`} className="text-[#8B7355]/70 hover:text-[#8B7355] transition-colors duration-300">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/coleccion`} className="text-[#8B7355]/70 hover:text-[#8B7355] transition-colors duration-300">
                  {t.nav.collection}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contacto`} className="text-[#8B7355]/70 hover:text-[#8B7355] transition-colors duration-300">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-light mb-4 sm:mb-6 text-[#8B6914]">{t.footer.contact}</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#8B7355]/60" />
                <span className="text-[#8B7355]/70">trujilloclaudia2@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-[#8B7355]/60" />
                <span className="text-[#8B7355]/70">@nativo_arte_jewelry</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#8B7355]/60" />
                <span className="text-[#8B7355]/70">+971 55 577 0098</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#8B7355]/20 pt-6 sm:pt-8 text-center">
          <p className="text-[#8B7355]/60 text-xs sm:text-sm mb-2">
            {t.footer.rights}
          </p>
          <p className="text-[#8B7355]/60 text-xs sm:text-sm">
            Soporte web por{' '}
            <a 
              href="https://modularsoluciones.com/en" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B7355]/80 hover:text-[#8B7355] transition-colors duration-300 underline"
            >
              Modular Soluciones
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
