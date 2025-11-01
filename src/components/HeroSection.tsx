'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import type { Dict, Locale } from '@/i18n/config';

type HeroSectionProps = { t: Dict; locale: Locale };

export default function HeroSection({ t, locale }: HeroSectionProps) {
  const logoFilter = 'brightness(0.68) contrast(1.28) drop-shadow(0 0 8px rgba(255,255,255,0.4)) drop-shadow(0 0 12px rgba(255,255,255,0.2))';

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
        loading="eager"
        fetchPriority="high"
      />
      
      {/* Overlay simple sin efectos */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/8 via-transparent to-[#D4AF37]/5" />
      
      {/* Contenido */}
      <div className="absolute inset-0 flex items-center justify-center pt-20 pb-20">
        <div className="text-center px-6 max-w-6xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              <span className="text-sm sm:text-base font-serif italic text-[#8B7355] tracking-wide font-medium drop-shadow-lg">{t.hero.badge}</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mb-6 md:mb-8 flex justify-center items-center"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="relative w-full flex justify-center hero-logo"
              style={{
                filter: logoFilter
              }}
            >
              <div className="relative" style={{ width: 'clamp(300px, 50vw, 600px)', height: 'clamp(140px, 20vw, 280px)' }}>
                <Image
                  src="/images/logo/logoNativo.png"
                  alt="Nativo Arte"
                  fill
                  className="object-contain"
                  style={{ objectPosition: 'center' }}
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 600px"
                />
              </div>
            </motion.div>
          </motion.div>
        
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4 w-full mt-6 md:mt-8"
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.005, y: -0.5 }}
              whileTap={{ scale: 0.998 }}
              transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
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
              whileHover={{ scale: 1.005, y: -0.5 }}
              whileTap={{ scale: 0.998 }}
              transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
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
