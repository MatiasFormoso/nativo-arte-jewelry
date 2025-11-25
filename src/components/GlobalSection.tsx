'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Dict, Locale } from '@/i18n/config';
import { easings, durations, delays, transitions, hoverEffects } from '@/lib/animations';

type GlobalSectionProps = { t: Dict; locale: Locale };

export default function GlobalSection({ t, locale }: GlobalSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 sm:py-28 md:py-32 bg-white relative overflow-hidden">
      {/* Textura de pinceladas sutiles */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-10 w-[30%] h-[45%] bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent blur-2xl"></div>
      </div>
      
      {/* Línea dorada decorativa superior elegante */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: durations.medium, ease: easings.smooth }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#8B6914] mb-6 italic font-medium"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.small }}
          >
            {t.global.title}
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-[#8B7355]/70 max-w-3xl mx-auto mb-4 leading-relaxed px-4"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.small * 2 }}
          >
            {t.global.description}
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base text-[#8B6914]/70 italic font-serif"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.small * 3 }}
          >
            {t.global.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: 'DU', title: 'Dubai', desc: 'Mercados Internacionales' },
            { icon: 'WW', title: 'Worldwide', desc: 'Envíos Globales' },
            { icon: 'CO', title: 'Colombia', desc: 'Origen y Artesanía' }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="text-center p-8 md:p-10 bg-[#F9F5EF]/50 border border-[#8B7355]/20 hover:border-[#8B7355]/40 transition-all duration-300 hover:shadow-lg group"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.medium + (index * delays.small) }}
              whileHover={hoverEffects.lift}
            >
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#8B7355] to-[#8B6914] group-hover:from-[#D4AF37] group-hover:to-[#B8941F] text-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={transitions.fast}
              >
                <span className="text-xl md:text-2xl font-serif font-semibold">{item.icon}</span>
              </motion.div>
              <motion.h3 
                className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-[#8B6914] group-hover:text-[#8B7355] italic font-medium transition-colors duration-300"
                whileHover={{ x: 2 }}
                transition={transitions.fast}
              >
                {item.title}
              </motion.h3>
              <p className="text-[#8B7355]/70 text-xs md:text-sm tracking-wide">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
