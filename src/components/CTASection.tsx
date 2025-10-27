import Link from 'next/link';
import { Mail } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

type CTASectionProps = { t: Dict; locale: Locale };

export default function CTASection({ t, locale }: CTASectionProps) {
  return (
    <section className="py-20 sm:py-28 md:py-32 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 italic">
          {t.contact.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed px-4">
          {t.contact.subtitle}
        </p>
        
        <Link
          href={`/${locale}/contacto`}
          className="inline-flex items-center space-x-3 border border-white/30 hover:border-white hover:bg-white hover:text-[#1A1A1A] text-white px-8 sm:px-12 py-4 text-sm font-light tracking-[0.2em] uppercase transition-all duration-300"
        >
          <Mail className="w-5 h-5" />
          <span>{t.nav.contact}</span>
        </Link>
      </div>
    </section>
  );
}
