'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import type { Dict, Locale } from '@/i18n/config';

type HeroSectionProps = { t: Dict; locale: Locale };

export default function HeroSection({ t, locale }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden">
      <Image
        src="/images/hero/hero-background.png"
        alt="Hero background"
        fill
        priority
        className="object-cover"
        quality={90}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/65" />
      
      <div className="absolute inset-0 flex items-center justify-center pt-16">
        <div className="text-center text-white px-6 max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="text-sm sm:text-base font-serif italic text-white/80 tracking-wide">{t.hero.badge}</span>
            </motion.div>
          </motion.div>
          
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8"
              style={{ fontFamily: "'Great Vibes', cursive" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <motion.span 
                className="block text-white"
                style={{ fontFamily: "'Great Vibes', cursive" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              >
                {t.hero.title}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg font-serif italic mb-10 md:mb-16 max-w-md mx-auto text-white/90 leading-relaxed tracking-wide px-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {t.hero.subtitle}
            </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="w-full sm:w-auto"
            >
              <Link
                href={`/${locale}/coleccion`}
                className="block bg-white text-black px-8 py-4 text-sm font-light tracking-[0.15em] uppercase transition-all duration-200 hover:bg-white/95 text-center min-h-[48px] flex items-center justify-center"
              >
                {t.hero.ctaPrimary}
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="w-full sm:w-auto"
            >
              <Link
                href={`/${locale}/contacto`}
                className="block border border-white/30 hover:border-white/60 text-white px-8 py-4 text-sm font-light tracking-[0.15em] uppercase transition-all duration-200 hover:bg-white/5 text-center min-h-[48px] flex items-center justify-center"
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
