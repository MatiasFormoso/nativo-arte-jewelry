import type { Dict, Locale } from '@/i18n/config';

type GlobalSectionProps = { t: Dict; locale: Locale };

export default function GlobalSection({ t, locale }: GlobalSectionProps) {
  return (
    <section className="py-20 sm:py-28 md:py-32 bg-[#F9F5EF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6 italic">
            {t.global.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/60 max-w-3xl mx-auto mb-4 leading-relaxed px-4">
            {t.global.description}
          </p>
          <p className="text-sm sm:text-base text-[#1A1A1A]/50">
            {t.global.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-8 md:p-10 bg-white border border-[#D4AF37]/10">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <span className="text-xl md:text-2xl font-serif">DU</span>
            </div>
            <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-[#1A1A1A] italic">Dubai</h3>
            <p className="text-[#1A1A1A]/60 text-xs md:text-sm tracking-wide">Mercados Internacionales</p>
          </div>
          <div className="text-center p-8 md:p-10 bg-white border border-[#D4AF37]/10">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <span className="text-xl md:text-2xl font-serif">WW</span>
            </div>
            <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-[#1A1A1A] italic">Worldwide</h3>
            <p className="text-[#1A1A1A]/60 text-xs md:text-sm tracking-wide">Envíos Globales</p>
          </div>
          <div className="text-center p-8 md:p-10 bg-white border border-[#D4AF37]/10">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <span className="text-xl md:text-2xl font-serif">CO</span>
            </div>
            <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-[#1A1A1A] italic">Colombia</h3>
            <p className="text-[#1A1A1A]/60 text-xs md:text-sm tracking-wide">Origen y Artesanía</p>
          </div>
        </div>
      </div>
    </section>
  );
}
