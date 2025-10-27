import Link from 'next/link';
import { getDictionary, type Dict, type Locale } from "@/i18n/config";

type Props = { params: { locale: Locale } };

export default async function CollectionPage({ params }: Props) {
  const { locale } = await params;
  const t: Dict = await getDictionary(locale);

  const collectionTypes = [
    {
      category: "Pre-Columbian Collection",
      description: "Piezas inspiradas en la cultura ancestral precolombina, fusionando arte antiguo con diseño contemporáneo.",
      count: "Únicas"
    },
    {
      category: "Dubai Special Edition",
      description: "Colecciones exclusivas creadas para mercados internacionales, reflejando lujo y sofisticación.",
      count: "Limitadas"
    },
    {
      category: "Contemporary Art",
      description: "Joyas que exploran la expresión artística moderna, cada pieza es una obra de arte única.",
      count: "Originales"
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F9F5EF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 text-[#1A1A1A] italic">
            Nuestra Colección
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/60 max-w-2xl mx-auto leading-relaxed px-4">
            Una galería de arte en cada pieza. Diseños únicos que conectan tradición con modernidad.
          </p>
        </div>

        {/* Collection Types */}
        <div className="space-y-16 md:space-y-24">
          {collectionTypes.map((type, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="md:w-2/5">
                <h2 className="text-2xl sm:text-3xl font-serif mb-4 text-[#1A1A1A] italic">
                  {type.category}
                </h2>
                <p className="text-sm sm:text-base text-[#1A1A1A]/60 leading-relaxed mb-6">
                  {type.description}
                </p>
                <span className="inline-block text-xs sm:text-sm tracking-widest uppercase text-[#D4AF37]">
                  {type.count}
                </span>
              </div>
              <div className="md:w-3/5 w-full">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="aspect-square bg-gray-200/50 border border-[#D4AF37]/10 rounded-sm flex items-center justify-center overflow-hidden group">
                      <span className="text-[#1A1A1A]/40 text-xs tracking-wider uppercase group-hover:opacity-60 transition-opacity">
                        Arte
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 text-center px-4">
          <p className="text-sm sm:text-base text-[#1A1A1A]/60 mb-8">
            Cada pieza es única. Contáctanos para conocer más sobre nuestras colecciones.
          </p>
          <Link
            href={`/${locale}/contacto`}
            className="border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#1A1A1A] hover:text-[#D4AF37] px-8 sm:px-10 py-3.5 text-xs font-light tracking-[0.2em] uppercase transition-all duration-200 inline-block"
          >
            Más Información
          </Link>
        </div>
      </div>
    </div>
  );
}
