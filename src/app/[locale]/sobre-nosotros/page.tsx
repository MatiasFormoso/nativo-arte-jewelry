import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import PhilosophySection from "@/components/PhilosophySection";

import { getDictionary, type Dict, type Locale } from "@/i18n/config";

type Props = { params: { locale: Locale } };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t: Dict = await getDictionary(locale);

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F9F5EF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 text-[#1A1A1A] italic">
            {t.story.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/60 leading-relaxed mb-12">
            {t.story.description}
          </p>
        </div>
      </div>
      
      <StorySection t={t} locale={locale} />
      <PhilosophySection t={t} locale={locale} />
    </div>
  );
}
