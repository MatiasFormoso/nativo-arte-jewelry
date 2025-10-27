'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import type { Dict, Locale } from '@/i18n/config';

type LayoutWrapperProps = { 
  children: React.ReactNode;
  t: Dict; 
  locale: Locale; 
};

export default function LayoutWrapper({ children, t, locale }: LayoutWrapperProps) {
  const pathname = usePathname();
  const [isOnHero, setIsOnHero] = useState(true);

  useEffect(() => {
    // Pages with hero sections (only home now)
    const heroPages = [`/${locale}`];
    setIsOnHero(heroPages.includes(pathname));
  }, [pathname, locale]);

  return (
    <>
      <Header t={t} locale={locale} isOnHero={isOnHero || pathname === `/${locale}`} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer t={t} locale={locale} />
      <WhatsAppButton locale={locale} />
    </>
  );
}
