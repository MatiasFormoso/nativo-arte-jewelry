'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = pathname?.startsWith('/en') ? 'es' : 'en';
    const newPath = pathname?.replace(/^\/(es|en)/, `/${newLocale}`) || `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <motion.button
      onClick={toggleLocale}
      className="p-2 text-white/80 hover:text-white transition-all duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Globe className="w-5 h-5" />
    </motion.button>
  );
}
