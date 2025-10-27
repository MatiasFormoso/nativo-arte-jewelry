import type { Dict, Locale } from '@/i18n/config';

type PhilosophySectionProps = { t: Dict; locale: Locale };

export default function PhilosophySection({ t, locale }: PhilosophySectionProps) {
  return (
    <section className="py-20 sm:py-28 md:py-32 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 italic">
            {t.philosophy.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
            {t.philosophy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {t.philosophy.items.map((item, index) => (
            <div key={index} className="p-8 md:p-10 bg-white/5 border border-white/10">
              <h3 className="text-lg sm:text-xl font-serif mb-3 md:mb-4 text-white italic">{item.title}</h3>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed tracking-wide">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
