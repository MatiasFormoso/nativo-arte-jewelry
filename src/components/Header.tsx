'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Alternativa 3: Usar Intersection Observer para detectar cuando salimos del hero
  useEffect(() => {
    const heroElement = document.getElementById('hero');
    if (!heroElement || !isOnHero) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si el hero está fuera de la vista (isIntersecting = false), estamos scrolleando
          setHasScrolled(!entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: '-80px 0px 0px 0px', // Offset para el header
        threshold: 0
      }
    );
    
    observer.observe(heroElement);
    
    return () => {
      observer.disconnect();
    };
  }, [isOnHero]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.about, href: `/${locale}/sobre-nosotros` },
    { name: t.nav.collection, href: `/${locale}/coleccion` },
    { name: t.nav.contact, href: `/${locale}/contacto` },
  ];

  // Header debe ser blanco:
  // - Si scrolleamos en cualquier página
  // - Si estamos en una página sin hero
  const showWhiteHeader = hasScrolled || !isOnHero;

  return (
    <nav id="site-nav" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      showWhiteHeader 
        ? 'bg-[#F9F5EF]/95 md:backdrop-blur-md border-b border-[#8B7355]/15 shadow-sm' 
        : isMenuOpen
          ? 'bg-white/60 backdrop-blur-lg border-b border-white/30'
          : 'bg-white/50 md:backdrop-blur-md border-b border-white/20'
    }`} style={isMobile && !showWhiteHeader && isMenuOpen ? { 
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)'
    } : isMobile && !showWhiteHeader ? { 
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)'
    } : {}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={`/${locale}`}
              className="transition-all duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative"
                style={{
                  filter: showWhiteHeader 
                    ? 'brightness(0.68) contrast(1.28)'
                    : 'brightness(0.68) contrast(1.28) drop-shadow(0 0 4px rgba(255,255,255,0.4))'
                }}
              >
                <Image
                  src="/images/logo/logoNativo.png"
                  alt="Nativo Arte"
                  width={200}
                  height={50}
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
                  style={{ objectFit: 'contain' }}
                  priority
                  quality={90}
                />
              </motion.div>
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
                  className={`transition-all duration-300 text-sm tracking-wide font-light ${
                    showWhiteHeader
                      ? 'text-[#8B7355]/80 hover:text-[#8B7355]'
                      : 'text-white/90 hover:text-white'
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', backdropFilter: 'none', WebkitBackdropFilter: 'none' }}
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
            <LocaleSwitcher showWhiteHeader={showWhiteHeader} />
            <a
              href="https://www.instagram.com/nativo_arte_jewelry/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 transition-all duration-300 ${
                showWhiteHeader
                  ? 'text-[#8B7355]/70 hover:text-[#8B7355]'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={`/${locale}/contacto`}
              className={`px-6 lg:px-8 py-2.5 text-sm tracking-[0.15em] uppercase transition-all duration-300 font-light ${
                showWhiteHeader
                  ? 'border border-[#8B7355]/50 hover:border-[#8B7355] bg-[#C9A85A]/8 hover:bg-[#C9A85A]/15 text-[#8B7355]'
                  : 'border border-white/40 hover:border-white/70 text-white/95 hover:text-white md:backdrop-blur-sm'
              }`}
              style={{ 
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '0.15em',
                ...(isMobile ? { backdropFilter: 'none', WebkitBackdropFilter: 'none' } : {})
              }}
            >
              Contactar
            </a>
          </motion.div>

          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              showWhiteHeader ? 'hover:bg-[#8B7355]/10' : 'hover:bg-white/10'
            }`}
            aria-label="Abrir menú"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className="block w-5 h-0.5 transition-all duration-300"
                style={{ 
                  backgroundColor: showWhiteHeader ? '#8B7355' : '#FFFFFF',
                  transform: isMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none'
                }}
              />
              <span
                className="block w-5 h-0.5 mt-1 transition-all duration-300"
                style={{ 
                  backgroundColor: showWhiteHeader ? '#8B7355' : '#FFFFFF',
                  opacity: isMenuOpen ? 0 : 1
                }}
              />
              <span
                className="block w-5 h-0.5 mt-1 transition-all duration-300"
                style={{ 
                  backgroundColor: showWhiteHeader ? '#8B7355' : '#FFFFFF',
                  transform: isMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
                }}
              />
            </div>
          </button>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 right-0 shadow-lg transition-all duration-300 ${
            showWhiteHeader 
              ? 'bg-[#F9F5EF]/98 border-b border-[#8B7355]/10' 
              : 'bg-black/30 backdrop-blur-lg border-b border-white/20'
          } ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={isMobile && !showWhiteHeader ? { 
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          } : isMobile ? { backdropFilter: 'none', WebkitBackdropFilter: 'none' } : {}}
        >
          <div className="px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block transition-all duration-300 py-3 px-3 text-sm tracking-wide font-light ${
                  showWhiteHeader
                    ? 'text-[#8B7355]/80 hover:text-[#8B7355] hover:bg-[#C9A85A]/10'
                    : 'text-white/95 hover:text-white hover:bg-white/10'
                }`}
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              href={`/${locale}/contacto`}
              className={`block transition-all duration-300 py-3 px-3 text-sm tracking-wide font-light ${
                showWhiteHeader
                  ? 'text-[#8B7355]/80 hover:text-[#8B7355] hover:bg-[#C9A85A]/10'
                  : 'text-white/95 hover:text-white hover:bg-white/10'
              }`}
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contactar
            </Link>
            
            <div className={`px-3 pt-4 border-t flex items-center justify-between ${
              showWhiteHeader ? 'border-[#8B7355]/15' : 'border-white/20'
            }`}>
              <a
                href="https://www.instagram.com/nativo_arte_jewelry/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 ${
                  showWhiteHeader
                    ? 'text-[#8B7355]/70 hover:text-[#8B7355] hover:bg-[#C9A85A]/10'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <LocaleSwitcher variant="mobile" showWhiteHeader={showWhiteHeader} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
