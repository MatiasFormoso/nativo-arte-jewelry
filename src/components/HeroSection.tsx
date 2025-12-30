'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import type { Dict, Locale } from '@/i18n/config';
import { easings, durations, transitions, hoverEffects, tapEffects } from '@/lib/animations';

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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: durations.medium, 
              ease: easings.smooth,
              delay: 0.1
            }}
            className="mb-8"
          >
            <motion.span 
              className="text-sm sm:text-base font-serif italic text-[#8B7355] tracking-wide font-medium drop-shadow-lg inline-block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: durations.normal, 
                ease: easings.smooth,
                delay: 0.15
              }}
            >
              {t.hero.badge}
            </motion.span>
          </motion.div>
          
          {/* Logo */}
          <motion.div 
            className="mb-6 md:mb-8 flex justify-center items-center"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: durations.slow, 
              ease: easings.smooth,
              delay: 0.2
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: durations.medium, 
                ease: easings.smooth,
                delay: 0.35
              }}
              className="relative w-full flex justify-center hero-logo"
              style={{
                filter: logoFilter
              }}
            >
              <motion.div 
                className="relative" 
                style={{ width: 'clamp(300px, 50vw, 600px)', height: 'clamp(140px, 20vw, 280px)' }}
                whileHover={{ scale: 1.01 }}
                transition={transitions.fast}
              >
                {/* Logo para móvil - sin frase */}
                <Image
                  src="/images/logo/logoNativoSIN Frase.png"
                  alt="Nativo Arte"
                  fill
                  className="object-contain block md:hidden"
                  style={{ objectPosition: 'center' }}
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 300px, 400px"
                />
                {/* Logo para desktop - con frase */}
                <Image
                  src="/images/logo/logoNativo.png"
                  alt="Nativo Arte"
                  fill
                  className="object-contain hidden md:block"
                  style={{ objectPosition: 'center' }}
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 400px, 600px"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4 w-full mt-6 md:mt-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: durations.medium, 
              ease: easings.smooth,
              delay: 0.4
            }}
          >
            <motion.div
              whileHover={hoverEffects.lift}
              whileTap={tapEffects.press}
              transition={transitions.fast}
              className="w-full sm:w-auto"
            >
              <Link
                href={`/${locale}/coleccion`}
                className="flex bg-[#8B7355] text-white px-10 py-4 text-sm tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#9B8365] text-center min-h-[52px] items-center justify-center relative overflow-hidden group"
                style={{
                  boxShadow: '0 4px 20px rgba(139,115,85,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
                  letterSpacing: '0.25em',
                  fontWeight: 200,
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                <motion.span
                  className="relative z-10"
                  initial={false}
                  whileHover={{ x: 1 }}
                  transition={transitions.fast}
                >
                  {t.hero.ctaPrimary}
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: easings.smooth }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={hoverEffects.lift}
              whileTap={tapEffects.press}
              transition={transitions.fast}
              className="w-full sm:w-auto"
            >
              <Link
                href={`/${locale}/contacto`}
                className="flex border-2 border-[#8B7355] bg-[#F9F5EF] text-[#8B7355] px-10 py-4 text-sm tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#FDFBF8] hover:border-[#9B8365] text-center min-h-[52px] items-center justify-center relative overflow-hidden group"
                style={{
                  boxShadow: '0 4px 20px rgba(139,115,85,0.3), 0 2px 8px rgba(0,0,0,0.1)',
                  letterSpacing: '0.25em',
                  fontWeight: 200,
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                <motion.span
                  className="relative z-10"
                  initial={false}
                  whileHover={{ x: 1 }}
                  transition={transitions.fast}
                >
                  {t.hero.ctaSecondary}
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
