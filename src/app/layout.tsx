import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nativo Arte Jewelry - Joyería Artesanal de Autor',
  description: 'Descubre la esencia del arte en joyería. Piezas únicas diseñadas con pasión y artesanía excepcional para mercados internacionales.',
  keywords: "joyería artesanal, joyas únicas, arte joyero, Dubai, joyería de autor",
  authors: [{ name: "Nativo Arte Jewelry" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nativo Arte",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Nativo Arte",
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#000000',
    viewportFit: 'cover',
    interactiveWidget: 'resizes-content',
    colorScheme: 'dark',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
