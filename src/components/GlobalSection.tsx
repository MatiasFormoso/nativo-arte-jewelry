import type { Dict, Locale } from '@/i18n/config';

type GlobalSectionProps = { t: Dict; locale: Locale };

export default function GlobalSection({ t, locale }: GlobalSectionProps) {
  return (
    <section className="py-20 sm:py-28 md:py-32 bg-white relative overflow-hidden">
      {/* Textura de pinceladas sutiles */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-10 w-[30%] h-[45%] bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent blur-2xl"></div>
      </div>
      
      {/* Línea dorada decorativa superior elegante */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#8B6914] mb-6 italic font-medium">
            {t.global.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/60 max-w-3xl mx-auto mb-4 leading-relaxed px-4">
            {t.global.description}
          </p>
          <p className="text-sm sm:text-base text-[#8B6914]/70 italic font-serif">
            {t.global.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-8 md:p-10 bg-[#F9F5EF]/50 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:shadow-lg">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
              <span className="text-xl md:text-2xl font-serif font-semibold">DU</span>
            </div>
            <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-[#D4AF37] italic font-medium">Dubai</h3>
            <p className="text-[#8B6914]/80 text-xs md:text-sm tracking-wide">Mercados Internacionales</p>
          </div>
          <div className="text-center p-8 md:p-10 bg-[#F9F5EF]/50 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:shadow-lg">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
              <span className="text-xl md:text-2xl font-serif font-semibold">WW</span>
            </div>
            <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-[#D4AF37] italic font-medium">Worldwide</h3>
            <p className="text-[#8B6914]/80 text-xs md:text-sm tracking-wide">Envíos Globales</p>
          </div>
          <div className="text-center p-8 md:p-10 bg-[#F9F5EF]/50 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:shadow-lg">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
              <span className="text-xl md:text-2xl font-serif font-semibold">CO</span>
            </div>
            <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-[#D4AF37] italic font-medium">Colombia</h3>
            <p className="text-[#8B6914]/80 text-xs md:text-sm tracking-wide">Origen y Artesanía</p>
          </div>
        </div>
      </div>
    </section>
  );
}
