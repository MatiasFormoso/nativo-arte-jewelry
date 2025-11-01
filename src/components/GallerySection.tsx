'use client';

import { motion, useInView } from "framer-motion";
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import type { Dict, Locale } from '@/i18n/config';

type GallerySectionProps = { t: Dict; locale: Locale };

// Fotos de modelos - 6 fotos disponibles (intercaladas para evitar fotos similares juntas)
const modelImages = [
  "/images/gallery/models/model-01.jpg",
  "/images/gallery/models/model-03.jpg",
  "/images/gallery/models/model-05.jpg",
  "/images/gallery/models/model-02.jpg",
  "/images/gallery/models/model-04.jpg",
  "/images/gallery/models/model-06.jpg",
];

export default function GallerySection({ t, locale }: GallerySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % modelImages.length);
    }, 5000); // Cambia cada 5 segundos para más elegancia

    return () => clearInterval(interval);
  }, []);

  // Calcular qué imágenes mostrar (más de 3 fotos visibles)
  const getVisibleImages = () => {
    const visibleCount = 4; // Mostrar 4 fotos a la vez
    const images = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % modelImages.length;
      images.push({
        src: modelImages[index],
        key: `${currentIndex}-${index}`,
        index: index,
      });
    }
    
    return images;
  };

  return (
    <section ref={ref} className="py-20 sm:py-28 md:py-32 bg-[#F9F5EF] relative overflow-hidden">
      {/* Textura de pinceladas sutiles */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-0 w-[35%] h-[50%] bg-gradient-to-br from-[#D4AF37]/12 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-[25%] h-[35%] bg-gradient-to-tl from-[#D4AF37]/10 via-transparent to-transparent blur-2xl"></div>
      </div>
      
      {/* Línea dorada decorativa superior elegante */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#8B6914] mb-6 italic font-medium">
            Inspiración
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#8B7355]/70 max-w-3xl mx-auto leading-relaxed px-4">
            Descubre cómo nuestras piezas cobran vida en cada momento especial
          </p>
        </motion.div>

        {/* Carrusel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 md:gap-6 justify-center items-center">
            {getVisibleImages().map((item, idx) => (
              <motion.div
                key={`${currentIndex}-${item.index}`}
                initial={{ opacity: 0, x: idx === 0 ? -10 : idx === 3 ? 10 : 0, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.35,
                  ease: [0.4, 0, 0.2, 1],
                  delay: idx * 0.03
                }}
                className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-18px)] aspect-[3/4] relative overflow-hidden group border-2 border-[#8B7355]/20 hover:border-[#8B7355]/35 transition-all duration-200 shadow-md hover:shadow-md"
              >
                <Image
                  src={item.src}
                  alt={`Modelo con joyas ${item.index + 1}`}
                  fill
                  className="object-cover group-hover:scale-[1.01] transition-transform duration-200"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B7355]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {modelImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 transition-all duration-200 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 bg-[#8B7355]' 
                    : 'w-1.5 bg-[#8B7355]/30 hover:bg-[#8B7355]/50'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

