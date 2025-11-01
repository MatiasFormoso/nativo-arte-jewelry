import { getDictionary, type Dict, type Locale } from "@/i18n/config";
import { Mail, Instagram } from 'lucide-react';

type Props = { params: { locale: Locale } };

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t: Dict = await getDictionary(locale);

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F9F5EF] relative overflow-hidden">
      {/* Textura de pinceladas sutiles en el fondo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-[40%] h-[60%] bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[35%] h-[50%] bg-gradient-to-tl from-[#D4AF37]/8 via-transparent to-transparent blur-3xl"></div>
      </div>
      
      {/* Línea dorada decorativa superior elegante */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 text-[#8B6914] italic font-medium">
            {t.contact.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#8B7355]/80 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 md:p-10 bg-white border border-[#8B7355]/20 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-serif mb-6 text-[#8B6914] italic font-medium">Instagram</h3>
            <a 
              href="https://www.instagram.com/nativo_arte_jewelry/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-[#8B7355]/70 hover:text-[#8B7355] transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
              <span>@nativo_arte_jewelry</span>
            </a>
          </div>

          <div className="p-8 md:p-10 bg-white border border-[#8B7355]/20 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-serif mb-6 text-[#8B6914] italic font-medium">Email</h3>
            <a 
              href="mailto:trujilloclaudia2@gmail.com"
              className="flex items-center space-x-3 text-[#8B7355]/70 hover:text-[#8B7355] transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>trujilloclaudia2@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="bg-white p-6 md:p-10 border border-[#8B7355]/20 shadow-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-light text-[#8B7355]/70 mb-2 tracking-wide">
                {t.contact.form.name}
              </label>
              <input
                type="text"
                className="w-full px-5 py-3.5 bg-[#F9F5EF] border border-[#8B7355]/20 focus:outline-none focus:border-[#8B7355] transition-colors font-light"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-[#8B7355]/70 mb-2 tracking-wide">
                {t.contact.form.email}
              </label>
              <input
                type="email"
                className="w-full px-5 py-3.5 bg-[#F9F5EF] border border-[#8B7355]/20 focus:outline-none focus:border-[#8B7355] transition-colors font-light"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-[#8B7355]/70 mb-2 tracking-wide">
                {t.contact.form.phone}
              </label>
              <input
                type="tel"
                className="w-full px-5 py-3.5 bg-[#F9F5EF] border border-[#8B7355]/20 focus:outline-none focus:border-[#8B7355] transition-colors font-light"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-[#8B7355]/70 mb-2 tracking-wide">
                {t.contact.form.message}
              </label>
              <textarea
                rows={6}
                className="w-full px-5 py-3.5 bg-[#F9F5EF] border border-[#8B7355]/20 focus:outline-none focus:border-[#8B7355] transition-colors font-light resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#8B7355] text-white px-8 sm:px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#9B8365] transition-all duration-300"
              style={{
                fontWeight: 200,
                fontFamily: "'Inter', sans-serif"
              }}
            >
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
