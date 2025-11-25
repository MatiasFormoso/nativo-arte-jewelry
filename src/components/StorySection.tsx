'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import type { Dict, Locale } from '@/i18n/config';
import { easings, durations, delays, transitions, hoverEffects } from '@/lib/animations';

type StorySectionProps = { t: Dict; locale: Locale };

export default function StorySection({ t, locale }: StorySectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 sm:py-28 md:py-32 bg-[#F9F5EF] relative overflow-hidden">
      {/* Textura de pinceladas sutiles en el fondo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-[40%] h-[60%] bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[35%] h-[50%] bg-gradient-to-tl from-[#D4AF37]/8 via-transparent to-transparent blur-3xl"></div>
      </div>
      
      {/* Línea dorada decorativa superior elegante */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: durations.medium, ease: easings.smooth }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#8B6914] mb-6 italic font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.small }}
            >
              {t.story.title}
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-[#8B7355]/80 mb-6 leading-relaxed tracking-wide"
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.small * 2 }}
            >
              {t.story.description}
            </motion.p>
            <motion.p 
              className="text-sm sm:text-base text-[#8B6914]/70 italic font-serif"
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.small * 3 }}
            >
              {t.story.subtitle}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="aspect-square relative overflow-hidden shadow-xl group"
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 20, scale: 0.95 }}
            transition={{ duration: durations.slow, ease: easings.smooth, delay: delays.medium }}
          >
            {/* Borde externo con gradiente sutil */}
            <div 
              className="absolute inset-0 border-2 border-[#8B7355]/40 rounded-sm transition-all duration-300 group-hover:border-[#8B7355]/50 z-10" 
              style={{
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.3), 0 4px 20px rgba(139,115,85,0.15)'
              }}
            ></div>
            
            {/* Borde interno sutil */}
            <div className="absolute inset-[2px] border border-[#8B7355]/20 rounded-sm pointer-events-none transition-all duration-300 group-hover:border-[#8B7355]/25 z-10" style={{
              boxShadow: 'inset 0 0 30px rgba(139,115,85,0.08)'
            }}></div>
            
            <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/gallery/models/model-09.jpg"
                alt="Historia de Nativo Arte"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
