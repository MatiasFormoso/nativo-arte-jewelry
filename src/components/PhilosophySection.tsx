import type { Dict, Locale } from '@/i18n/config';

type PhilosophySectionProps = { t: Dict; locale: Locale };

export default function PhilosophySection({ t, locale }: PhilosophySectionProps) {
  return (
    <section className="py-20 sm:py-28 md:py-32 bg-white relative overflow-hidden">
      {/* Textura de pinceladas sutiles */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 right-0 w-[30%] h-[40%] bg-gradient-to-bl from-[#D4AF37]/15 via-transparent to-transparent blur-2xl"></div>
      </div>
      
      {/* Línea dorada decorativa superior elegante */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 italic text-[#8B6914] font-medium">
            {t.philosophy.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/60 max-w-3xl mx-auto leading-relaxed px-4">
            {t.philosophy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {t.philosophy.items.map((item, index) => (
            <div key={index} className="p-8 md:p-10 bg-[#F9F5EF]/40 border-2 border-[#D4AF37]/25 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-[#D4AF37] to-[#B8941F]"></div>
                <h3 className="text-lg sm:text-xl font-serif text-[#D4AF37] italic font-medium group-hover:text-[#B8941F] transition-colors">{item.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed tracking-wide pl-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
