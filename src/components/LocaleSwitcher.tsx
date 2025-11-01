'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

type LocaleSwitcherProps = {
  variant?: 'desktop' | 'mobile';
  showWhiteHeader?: boolean;
};

export default function LocaleSwitcher({ variant = 'desktop', showWhiteHeader = false }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = pathname?.startsWith('/en') ? 'es' : 'en';
    const newPath = pathname?.replace(/^\/(es|en)/, `/${newLocale}`) || `/${newLocale}`;
    router.push(newPath);
  };

  // Determinar colores según el contexto
  const getColorClasses = () => {
    if (variant === 'mobile') {
      return showWhiteHeader
        ? 'text-[#8B7355]/70 hover:text-[#8B7355]'
        : 'text-[#5A4535] hover:text-[#4A3829]';
    } else {
      // Desktop
      return showWhiteHeader
        ? 'text-[#8B7355]/70 hover:text-[#8B7355]'
        : 'text-white/90 hover:text-white';
    }
  };

  return (
    <motion.button
      onClick={toggleLocale}
      className={`p-2 transition-all duration-200 ${getColorClasses()}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Globe className="w-5 h-5" />
    </motion.button>
  );
}
