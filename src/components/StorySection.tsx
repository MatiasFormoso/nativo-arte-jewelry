import type { Dict, Locale } from '@/i18n/config';

type StorySectionProps = { t: Dict; locale: Locale };

export default function StorySection({ t, locale }: StorySectionProps) {
  return (
    <section className="py-20 sm:py-28 md:py-32 bg-[#F9F5EF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6 italic">
              {t.story.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/70 mb-6 leading-relaxed tracking-wide">
              {t.story.description}
            </p>
            <p className="text-sm sm:text-base text-[#1A1A1A]/50 italic">
              {t.story.subtitle}
            </p>
          </div>
          
          <div className="aspect-square bg-gray-200/50 border border-[#D4AF37]/10">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[#1A1A1A]/30 text-xs tracking-widest uppercase">Imagen por agregar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
