'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Locale } from '@/i18n/config';

type WhatsAppButtonProps = {
  locale: Locale;
};

export default function WhatsAppButton({ locale }: WhatsAppButtonProps) {
  const phoneNumber = '971555770098';
  
  const messages = {
    es: '¡Hola! Me interesa conocer más sobre las joyas exclusivas de Nativo Arte Jewelry. ¿Podríais brindarme más información sobre vuestras colecciones?',
    en: 'Hello! I am interested in learning more about the exclusive jewelry from Nativo Arte Jewelry. Could you provide me with more information about your collections?'
  };
  
  const message = encodeURIComponent(messages[locale] || messages.es);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
      <span className="sr-only">Contáctanos por WhatsApp</span>
    </motion.a>
  );
}

