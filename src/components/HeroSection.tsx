'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import type { Dict, Locale } from '@/i18n/config';

type HeroSectionProps = { t: Dict; locale: Locale };

export default function HeroSection({ t, locale }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center">
      <Image
        src="/images/hero/hero-background.jpeg"
        alt="Hero background"
        fill
        priority
        className="object-cover object-[75%_center] md:object-[70%_center]"
        quality={90}
        sizes="100vw"
      />
      
      {/* Overlay simple sin efectos */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/8 via-transparent to-[#D4AF37]/5" />
      
      {/* Contenido */}
      <div className="absolute inset-0 flex items-center justify-center pt-20 pb-20">
        <div className="text-center px-6 max-w-6xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="text-sm sm:text-base font-serif italic text-[#8B7355] tracking-wide font-medium drop-shadow-lg">{t.hero.badge}</span>
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 md:mb-8"
            style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 'normal' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <motion.span 
              className="block relative"
              style={{ 
                fontFamily: "'Great Vibes', cursive",
                fontWeight: 'normal',
                color: '#8B7355',
                letterSpacing: '0.02em',
                WebkitTextStroke: '1.5px rgba(255,255,255,0.7)',
                paintOrder: 'stroke fill',
                textShadow: '0 0 8px rgba(255,255,255,0.4), 0 0 12px rgba(255,255,255,0.2)'
              } as React.CSSProperties}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t.hero.title}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg font-serif italic mb-10 md:mb-16 max-w-md mx-auto leading-relaxed tracking-wide px-4 font-medium text-white/95 drop-shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
          >
            {t.hero.subtitle}
          </motion.p>
        
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4 w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full sm:w-auto"
            >
              <Link
                href={`/${locale}/coleccion`}
                className="flex bg-[#8B7355] text-white px-10 py-4 text-sm tracking-[0.25em] uppercase transition-all duration-200 hover:bg-[#9B8365] text-center min-h-[52px] items-center justify-center"
                style={{
                  boxShadow: '0 4px 20px rgba(139,115,85,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
                  letterSpacing: '0.25em',
                  fontWeight: 200,
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {t.hero.ctaPrimary}
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full sm:w-auto"
            >
              <Link
                href={`/${locale}/contacto`}
                className="flex border-2 border-[#8B7355] bg-[#F9F5EF] text-[#8B7355] px-10 py-4 text-sm tracking-[0.25em] uppercase transition-all duration-200 hover:bg-[#FDFBF8] hover:border-[#9B8365] text-center min-h-[52px] items-center justify-center"
                style={{
                  boxShadow: '0 4px 20px rgba(139,115,85,0.3), 0 2px 8px rgba(0,0,0,0.1)',
                  letterSpacing: '0.25em',
                  fontWeight: 200,
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {t.hero.ctaSecondary}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
