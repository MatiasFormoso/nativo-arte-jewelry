'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/i18n/config';
import { easings, durations, delays, transitions, hoverEffects, tapEffects } from '@/lib/animations';

type CollectionContentProps = {
  locale: Locale;
};

const collectionTypes = [
  {
    category: "Pre-Columbian Collection",
    description: "Piezas inspiradas en la cultura ancestral precolombina, fusionando arte antiguo con diseño contemporáneo.",
    count: "Únicas",
    images: [
      "/images/gallery/jewelry/jewelry-03.jpg",
      "/images/gallery/jewelry/jewelry-04.jpg"
    ]
  },
  {
    category: "Dubai Special Edition",
    description: "Colecciones exclusivas creadas para mercados internacionales, reflejando lujo y sofisticación.",
    count: "Limitadas",
    images: [
      "/images/gallery/jewelry/jewelry-01.jpg",
      "/images/gallery/jewelry/jewelry-02.jpg"
    ]
  },
  {
    category: "Contemporary Art",
    description: "Joyas que exploran la expresión artística moderna, cada pieza es una obra de arte única.",
    count: "Originales",
    images: [
      "/images/gallery/jewelry/jewelry-05.jpg",
      "/images/gallery/jewelry/jewelry-06.jpg"
    ]
  }
];

export default function CollectionContent({ locale }: CollectionContentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 relative z-10">
      {/* Header */}
      <motion.div 
        className="text-center mb-16 md:mb-20"
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: durations.medium, ease: easings.smooth }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 text-[#8B6914] italic font-medium"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.small }}
        >
          Nuestra Colección
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-[#8B7355]/80 max-w-2xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.small * 2 }}
        >
          Una galería de arte en cada pieza. Diseños únicos que conectan tradición con modernidad.
        </motion.p>
      </motion.div>

      {/* Collection Types */}
      <div className="space-y-16 md:space-y-24">
        {collectionTypes.map((type, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: durations.medium, 
              ease: easings.smooth, 
              delay: delays.medium + (index * delays.medium)
            }}
          >
            <motion.div 
              className="md:w-2/5"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ 
                duration: durations.medium, 
                ease: easings.smooth, 
                delay: delays.medium + (index * delays.medium) + delays.small
              }}
            >
              <h2 className="text-2xl sm:text-3xl font-serif mb-4 text-[#8B6914] italic font-medium">
                {type.category}
              </h2>
              <p className="text-sm sm:text-base text-[#8B7355]/70 leading-relaxed mb-6">
                {type.description}
              </p>
              <motion.span 
                className="inline-block text-xs sm:text-sm tracking-widest uppercase text-[#8B7355] font-medium"
                whileHover={{ scale: 1.05 }}
                transition={transitions.fast}
              >
                {type.count}
              </motion.span>
            </motion.div>
            <motion.div 
              className="md:w-3/5 w-full"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ 
                duration: durations.medium, 
                ease: easings.smooth, 
                delay: delays.medium + (index * delays.medium) + delays.small
              }}
            >
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {type.images.map((imageSrc, imgIndex) => (
                  <motion.div 
                    key={imgIndex} 
                    className="aspect-square relative border border-[#8B7355]/20 rounded-sm overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ 
                      duration: durations.medium, 
                      ease: easings.smooth, 
                      delay: delays.medium + (index * delays.medium) + (imgIndex * delays.tiny)
                    }}
                    whileHover={hoverEffects.lift}
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={transitions.normal}
                      className="absolute inset-0"
                    >
                      <Image
                        src={imageSrc}
                        alt={`${type.category} - Joya ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 30vw"
                        quality={90}
                        loading="lazy"
                      />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-[#8B7355]/20 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={transitions.normal}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div 
        className="mt-16 md:mt-24 text-center px-4"
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.medium * 4 }}
      >
        <motion.p 
          className="text-sm sm:text-base text-[#8B7355]/70 mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.medium * 4 + delays.small }}
        >
          Cada pieza es única. Contáctanos para conocer más sobre nuestras colecciones.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.medium * 4 + delays.small * 2 }}
        >
          <Link
            href={`/${locale}/contacto`}
            className="border border-[#8B7355]/40 hover:border-[#8B7355] text-[#8B7355] hover:text-[#8B6914] px-8 sm:px-10 py-3.5 text-xs tracking-[0.25em] uppercase transition-all duration-300 inline-block relative overflow-hidden group"
            style={{
              fontWeight: 200,
              fontFamily: "'Inter', sans-serif"
            }}
          >
            <motion.span
              className="relative z-10"
              whileHover={{ x: 2 }}
              transition={transitions.fast}
            >
              Más Información
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-[#8B7355]/5"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={transitions.normal}
            />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

