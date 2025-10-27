import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import PhilosophySection from "@/components/PhilosophySection";
import GlobalSection from "@/components/GlobalSection";
import CTASection from "@/components/CTASection";

import { getDictionary, type Dict, type Locale } from "@/i18n/config";
import type { Metadata } from "next";

export const dynamic = "force-static";

// For the home page with hero, Header should be white/transparent
export const isOnHero = true;

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getDictionary(locale);
  
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en" }
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}

export default async function HomeByLocale({ params }: Props) {
  const { locale } = await params;
  const t: Dict = await getDictionary(locale);

  return (
    <>
      <HeroSection t={t} locale={locale} />
      <StorySection t={t} locale={locale} />
      <PhilosophySection t={t} locale={locale} />
      <GlobalSection t={t} locale={locale} />
      <CTASection t={t} locale={locale} />
    </>
  );
}
