import { getDictionary, type Dict, type Locale } from "@/i18n/config";
import ContactForm from "@/components/ContactForm";

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
      
      <ContactForm t={t} locale={locale} />
    </div>
  );
}
