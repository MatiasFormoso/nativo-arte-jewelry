import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import PhilosophySection from "@/components/PhilosophySection";

import { getDictionary, type Dict, type Locale } from "@/i18n/config";

type Props = { params: { locale: Locale } };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t: Dict = await getDictionary(locale);

  return (
    <div className="pt-20 sm:pt-24">
      <PhilosophySection t={t} locale={locale} />
      <StorySection t={t} locale={locale} />
    </div>
  );
}
