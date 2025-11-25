'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Locale } from '@/i18n/config';

type WhatsAppButtonProps = {
  locale: Locale;
};

export default function WhatsAppButton({ locale }: WhatsAppButtonProps) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById('hero');
    
    // Si no hay hero, mostrar el botón inmediatamente
    if (!heroElement) {
      setHasScrolled(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHasScrolled(!entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0
      }
    );
    
    observer.observe(heroElement);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const phoneNumber = '971555770098';
  
  const messages = {
    es: '¡Hola! Me interesa conocer más sobre las joyas exclusivas de Nativo Arte Jewelry. ¿Podríais brindarme más información sobre vuestras colecciones?',
    en: 'Hello! I am interested in learning more about the exclusive jewelry from Nativo Arte Jewelry. Could you provide me with more information about your collections?'
  };
  
  const message = encodeURIComponent(messages[locale] || messages.es);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <AnimatePresence mode="wait">
      {hasScrolled && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.4
          }}
        >
          <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
          <span className="sr-only">Contáctanos por WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

