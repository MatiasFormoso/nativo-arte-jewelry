'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Instagram } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';
import { easings, durations, delays, transitions, hoverEffects, tapEffects } from '@/lib/animations';

type ContactFormProps = {
  t: Dict;
  locale: Locale;
};

export default function ContactForm({ t, locale }: ContactFormProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 relative z-10">
      <motion.div 
        className="text-center mb-12 md:mb-16 px-4"
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: durations.medium, ease: easings.smooth }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 text-[#8B6914] italic font-medium"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.small }}
        >
          {t.contact.title}
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-[#8B7355]/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.small * 2 }}
        >
          {t.contact.subtitle}
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <motion.div 
          className="p-8 md:p-10 bg-white border border-[#8B7355]/20 shadow-sm hover:shadow-lg transition-all duration-300 group"
          initial={{ opacity: 0, x: -20, scale: 0.96 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -20, scale: 0.96 }}
          transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.medium }}
          whileHover={hoverEffects.lift}
        >
          <h3 className="text-xl sm:text-2xl font-serif mb-6 text-[#8B6914] italic font-medium">Instagram</h3>
          <motion.a 
            href="https://www.instagram.com/nativo_arte_jewelry/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-[#8B7355]/70 hover:text-[#8B7355] transition-colors duration-300"
            whileHover={{ x: 4 }}
            transition={transitions.fast}
          >
            <Instagram className="w-5 h-5" />
            <span>@nativo_arte_jewelry</span>
          </motion.a>
        </motion.div>

        <motion.div 
          className="p-8 md:p-10 bg-white border border-[#8B7355]/20 shadow-sm hover:shadow-lg transition-all duration-300 group"
          initial={{ opacity: 0, x: 20, scale: 0.96 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 20, scale: 0.96 }}
          transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.medium }}
          whileHover={hoverEffects.lift}
        >
          <h3 className="text-xl sm:text-2xl font-serif mb-6 text-[#8B6914] italic font-medium">Email</h3>
          <motion.a 
            href="mailto:trujilloclaudia2@gmail.com"
            className="flex items-center space-x-3 text-[#8B7355]/70 hover:text-[#8B7355] transition-colors duration-300"
            whileHover={{ x: 4 }}
            transition={transitions.fast}
          >
            <Mail className="w-5 h-5" />
            <span>trujilloclaudia2@gmail.com</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        className="bg-white p-6 md:p-10 border border-[#8B7355]/20 shadow-sm"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: durations.slow, ease: easings.smooth, delay: delays.medium * 2 }}
      >
        <form className="space-y-6">
          {[
            { key: 'name', type: 'text', label: t.contact.form.name },
            { key: 'email', type: 'email', label: t.contact.form.email },
            { key: 'phone', type: 'tel', label: t.contact.form.phone },
          ].map((field, index) => (
            <motion.div
              key={field.key}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.medium * 2 + (index * delays.small) }}
            >
              <label className="block text-sm font-light text-[#8B7355]/70 mb-2 tracking-wide">
                {field.label}
              </label>
              <input
                type={field.type}
                className="w-full px-5 py-3.5 bg-[#F9F5EF] border border-[#8B7355]/20 focus:outline-none focus:border-[#8B7355] transition-all duration-300 font-light focus:shadow-md focus:shadow-[#8B7355]/10"
              />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.medium * 2 + (3 * delays.small) }}
          >
            <label className="block text-sm font-light text-[#8B7355]/70 mb-2 tracking-wide">
              {t.contact.form.message}
            </label>
            <textarea
              rows={6}
              className="w-full px-5 py-3.5 bg-[#F9F5EF] border border-[#8B7355]/20 focus:outline-none focus:border-[#8B7355] transition-all duration-300 font-light resize-none focus:shadow-md focus:shadow-[#8B7355]/10"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: durations.medium, ease: easings.smooth, delay: delays.medium * 2 + (4 * delays.small) }}
          >
            <motion.button
              type="submit"
              className="w-full bg-[#8B7355] text-white px-8 sm:px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#9B8365] transition-all duration-300 relative overflow-hidden group"
              style={{
                fontWeight: 200,
                fontFamily: "'Inter', sans-serif",
                boxShadow: '0 4px 20px rgba(139,115,85,0.3)'
              }}
              whileHover={hoverEffects.lift}
              whileTap={tapEffects.press}
            >
              <span className="relative z-10">{t.contact.form.submit}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: easings.smooth }}
              />
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}

