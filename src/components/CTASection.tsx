'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';
import { easings, durations, delays, transitions, hoverEffects, tapEffects } from '@/lib/animations';

type CTASectionProps = { t: Dict; locale: Locale };

export default function CTASection({ t, locale }: CTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 sm:py-28 md:py-32 bg-[#F9F5EF] relative overflow-hidden">
      {/* Textura de pinceladas sutiles */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-gradient-to-bl from-[#D4AF37]/12 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[35%] h-[45%] bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-2xl"></div>
      </div>
      
      {/* Líneas doradas decorativas elegantes */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 italic text-[#8B6914] font-medium"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: durations.medium, ease: easings.smooth }}
        >
          {t.contact.title}
        </motion.h2>
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-[#8B7355]/70 max-w-3xl mx-auto mb-12 leading-relaxed px-4"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.small }}
        >
          {t.contact.subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.small * 2 }}
        >
          <Link
            href={`/${locale}/contacto`}
            className="inline-flex items-center space-x-3 border-2 border-[#8B7355] bg-gradient-to-r from-[#8B7355]/10 to-[#8B7355]/5 hover:from-[#8B7355] hover:to-[#9B8365] hover:text-white text-[#8B7355] px-8 sm:px-12 py-4 text-sm font-light tracking-[0.2em] uppercase transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden group"
            style={{
              fontWeight: 200,
              fontFamily: "'Inter', sans-serif"
            }}
          >
            <motion.span
              className="flex items-center space-x-3 relative z-10"
              whileHover={{ x: 2 }}
              transition={transitions.fast}
            >
              <Mail className="w-5 h-5" />
              <span>{t.nav.contact}</span>
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: easings.smooth }}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
