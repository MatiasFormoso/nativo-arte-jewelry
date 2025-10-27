'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';
import LocaleSwitcher from './LocaleSwitcher';
import type { Dict, Locale } from '@/i18n/config';

type HeaderProps = { 
  t: Dict; 
  locale: Locale;
  isOnHero?: boolean;
};

export default function Header({ t, locale, isOnHero = true }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.about, href: `/${locale}/sobre-nosotros` },
    { name: t.nav.collection, href: `/${locale}/coleccion` },
    { name: t.nav.contact, href: `/${locale}/contacto` },
  ];

  // Show white header when scrolling or on non-hero pages
  const showWhiteHeader = hasScrolled || !isOnHero;

  return (
    <nav id="site-nav" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      showWhiteHeader 
        ? 'bg-white/95 backdrop-blur-md border-b border-[#D4AF37]/10 shadow-sm' 
        : 'bg-white/5 backdrop-blur-md border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={`/${locale}`}
              className={`text-xl sm:text-2xl transition-all duration-200 ${
                showWhiteHeader
                  ? 'text-[#1A1A1A] hover:text-[#D4AF37]'
                  : 'text-white hover:text-white/90'
              }`}
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              <motion.span
                style={{ fontFamily: "'Great Vibes', cursive" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Nativo Arte
              </motion.span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex items-center space-x-6 lg:space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`transition-all duration-200 text-sm tracking-wide ${
                    showWhiteHeader
                      ? 'text-[#1A1A1A]/70 hover:text-[#D4AF37]'
                      : 'text-white/80 hover:text-white'
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
                >
                  <motion.span 
                    whileHover={{ y: -0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
            <LocaleSwitcher />
            <a
              href="https://www.instagram.com/nativo_arte_jewelry/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 transition-all duration-200 ${
                showWhiteHeader
                  ? 'text-[#1A1A1A]/70 hover:text-[#D4AF37]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={`/${locale}/contacto`}
              className={`px-6 lg:px-8 py-2.5 text-sm tracking-wide transition-all duration-200 ${
                showWhiteHeader
                  ? 'border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#1A1A1A] hover:text-[#D4AF37]'
                  : 'border border-white/30 hover:border-white/60 text-white/90 hover:text-white'
              }`}
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
            >
              Contactar
            </a>
          </motion.div>

          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              showWhiteHeader ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
            aria-label="Abrir menú"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  showWhiteHeader ? 'bg-[#1A1A1A]' : 'bg-white'
                } ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 transition-all duration-300 mt-1 ${
                  showWhiteHeader ? 'bg-[#1A1A1A]' : 'bg-white'
                } ${isMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 transition-all duration-300 mt-1 ${
                  showWhiteHeader ? 'bg-[#1A1A1A]' : 'bg-white'
                } ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              />
            </div>
          </button>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-[#1A1A1A] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 py-3 px-3 text-sm tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              href={`/${locale}/contacto`}
              className="block border border-[#D4AF37]/40 text-[#1A1A1A] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 py-3 px-3 mx-3 rounded-sm text-sm tracking-wide border mt-4"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contactar
            </Link>
            
            <div className="px-3 pt-4 border-t border-[#D4AF37]/10">
              <LocaleSwitcher />
            </div>

            <div className="px-3 pt-4 flex items-center space-x-6">
              <a
                href="https://www.instagram.com/nativo_arte_jewelry/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-[#1A1A1A]/70 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
