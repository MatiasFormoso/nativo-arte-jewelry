import Link from 'next/link';
import Image from 'next/image';
import { getDictionary, type Dict, type Locale } from "@/i18n/config";

type Props = { params: { locale: Locale } };

export default async function CollectionPage({ params }: Props) {
  const { locale } = await params;
  const t: Dict = await getDictionary(locale);

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

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F9F5EF] relative overflow-hidden">
      {/* Textura de pinceladas sutiles en el fondo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-[40%] h-[60%] bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[35%] h-[50%] bg-gradient-to-tl from-[#D4AF37]/8 via-transparent to-transparent blur-3xl"></div>
      </div>
      
      {/* Línea dorada decorativa superior elegante */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 text-[#8B6914] italic font-medium">
            Nuestra Colección
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#8B7355]/80 max-w-2xl mx-auto leading-relaxed px-4">
            Una galería de arte en cada pieza. Diseños únicos que conectan tradición con modernidad.
          </p>
        </div>

        {/* Collection Types */}
        <div className="space-y-16 md:space-y-24">
          {collectionTypes.map((type, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="md:w-2/5">
                <h2 className="text-2xl sm:text-3xl font-serif mb-4 text-[#8B6914] italic font-medium">
                  {type.category}
                </h2>
                <p className="text-sm sm:text-base text-[#8B7355]/70 leading-relaxed mb-6">
                  {type.description}
                </p>
                <span className="inline-block text-xs sm:text-sm tracking-widest uppercase text-[#8B7355] font-medium">
                  {type.count}
                </span>
              </div>
              <div className="md:w-3/5 w-full">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {type.images.map((imageSrc, imgIndex) => (
                    <div key={imgIndex} className="aspect-square relative border border-[#8B7355]/20 rounded-sm overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300">
                      <Image
                        src={imageSrc}
                        alt={`${type.category} - Joya ${imgIndex + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 30vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 text-center px-4">
          <p className="text-sm sm:text-base text-[#8B7355]/70 mb-8">
            Cada pieza es única. Contáctanos para conocer más sobre nuestras colecciones.
          </p>
          <Link
            href={`/${locale}/contacto`}
            className="border border-[#8B7355]/40 hover:border-[#8B7355] text-[#8B7355] hover:text-[#8B6914] px-8 sm:px-10 py-3.5 text-xs tracking-[0.25em] uppercase transition-all duration-300 inline-block"
            style={{
              fontWeight: 200,
              fontFamily: "'Inter', sans-serif"
            }}
          >
            Más Información
          </Link>
        </div>
      </div>
    </div>
  );
}
