import { getDictionary, type Dict, type Locale } from "@/i18n/config";
import { Mail, Instagram } from 'lucide-react';

type Props = { params: { locale: Locale } };

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t: Dict = await getDictionary(locale);

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F9F5EF]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 text-[#1A1A1A] italic">
            {t.contact.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/60 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 md:p-10 bg-white border border-[#D4AF37]/20">
            <h3 className="text-xl sm:text-2xl font-serif mb-6 text-[#1A1A1A] italic">Instagram</h3>
            <a 
              href="https://www.instagram.com/nativo_arte_jewelry/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-[#1A1A1A]/70 hover:text-[#D4AF37] transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@nativo_arte_jewelry</span>
            </a>
          </div>

          <div className="p-8 md:p-10 bg-white border border-[#D4AF37]/20">
            <h3 className="text-xl sm:text-2xl font-serif mb-6 text-[#1A1A1A] italic">Email</h3>
            <a 
              href="mailto:contacto@nativoarte.com"
              className="flex items-center space-x-3 text-[#1A1A1A]/70 hover:text-[#D4AF37] transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>contacto@nativoarte.com</span>
            </a>
          </div>
        </div>

        <div className="bg-white p-6 md:p-10 border border-[#D4AF37]/10">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-light text-[#1A1A1A]/70 mb-2 tracking-wide">
                {t.contact.form.name}
              </label>
              <input
                type="text"
                className="w-full px-5 py-3.5 bg-[#F9F5EF] border border-[#D4AF37]/20 focus:outline-none focus:border-[#D4AF37] transition-colors font-light"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-[#1A1A1A]/70 mb-2 tracking-wide">
                {t.contact.form.email}
              </label>
              <input
                type="email"
                className="w-full px-5 py-3.5 bg-[#F9F5EF] border border-[#D4AF37]/20 focus:outline-none focus:border-[#D4AF37] transition-colors font-light"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-[#1A1A1A]/70 mb-2 tracking-wide">
                {t.contact.form.phone}
              </label>
              <input
                type="tel"
                className="w-full px-5 py-3.5 bg-[#F9F5EF] border border-[#D4AF37]/20 focus:outline-none focus:border-[#D4AF37] transition-colors font-light"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-[#1A1A1A]/70 mb-2 tracking-wide">
                {t.contact.form.message}
              </label>
              <textarea
                rows={6}
                className="w-full px-5 py-3.5 bg-[#F9F5EF] border border-[#D4AF37]/20 focus:outline-none focus:border-[#D4AF37] transition-colors font-light resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1A1A1A] text-white px-8 sm:px-10 py-4 text-xs font-light tracking-[0.2em] uppercase hover:bg-[#D4AF37] transition-all duration-300"
            >
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
