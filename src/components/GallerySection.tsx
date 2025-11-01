'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % modelImages.length);
    }, 4000); // Cambia cada 4 segundos

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
    <section className="py-20 sm:py-28 md:py-32 bg-[#F9F5EF] relative overflow-hidden">
      {/* Textura de pinceladas sutiles */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-0 w-[35%] h-[50%] bg-gradient-to-br from-[#D4AF37]/12 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-[25%] h-[35%] bg-gradient-to-tl from-[#D4AF37]/10 via-transparent to-transparent blur-2xl"></div>
      </div>
      
      {/* Línea dorada decorativa superior elegante */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#8B6914] mb-6 italic font-medium">
            Inspiración
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/60 max-w-3xl mx-auto leading-relaxed px-4">
            Descubre cómo nuestras piezas cobran vida en cada momento especial
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 md:gap-6 justify-center items-center">
            {getVisibleImages().map((item, idx) => (
              <motion.div
                key={`${currentIndex}-${item.index}`}
                initial={{ opacity: 0, x: idx === 0 ? -30 : idx === 3 ? 30 : 0, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: idx * 0.1
                }}
                  className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-18px)] aspect-[3/4] relative overflow-hidden group border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-md hover:shadow-xl"
              >
                <Image
                  src={item.src}
                  alt={`Modelo con joyas ${item.index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {modelImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-[#D4AF37]' 
                    : 'w-1.5 bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50'
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

