import '@/styles/globals.css';
import { Manrope, Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.academiadanismanlik.com'),
  title: {
    default: 'Academia Danışmanlık – Yönetişim, Uyum ve Sürdürülebilirlik Danışmanlığı',
    template: '%s | Academia Danışmanlık',
  },
  description:
    'Academia Danışmanlık; sistem belgelendirme, yasal uyum (KVKK/GDPR), sürdürülebilirlik, AI yönetişimi (ISO 42001) ve kurumsal eğitim alanlarında Türkiye\'nin lider danışmanlık firmasıdır.',
  keywords: [
    'Academia Danışmanlık', 'kurumsal danışmanlık', 'sistem belgelendirme',
    'ISO 9001', 'ISO 14001', 'ISO 42001', 'KVKK', 'GDPR', 'sürdürülebilirlik danışmanlığı',
    'ESG danışmanlık', 'AI yönetişimi', 'proje danışmanlığı', 'TÜBİTAK hibe',
    'kurumsal eğitim', 'yönetim sistemi',
  ],
  verification: {
    google: '683573c7faec815e',
  },
  authors: [{ name: 'Academia Danışmanlık', url: 'https://www.academiadanismanlik.com' }],
  creator: 'Academia Danışmanlık',
  publisher: 'Academia Danışmanlık',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: '/',
    languages: { 'tr-TR': '/', 'en-US': '/' },
  },
  openGraph: {
    title: 'Academia Danışmanlık – Kurumsal Dönüşüm İçin Yapısal Çözümler',
    description: 'Yönetişim, düzenleyici uyum, kalite ve sürdürülebilirlik çerçeveleri ile kurumsal güç ve ölçülebilir uzun vadeli etki.',
    url: 'https://www.academiadanismanlik.com',
    siteName: 'Academia Danışmanlık',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academia Danışmanlık – Kurumsal Dönüşüm',
    description: 'Yönetişim, uyum, sürdürülebilirlik ve AI yönetişimi alanlarında danışmanlık.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${manrope.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script dangerouslySetInnerHTML={{ __html: `if('scrollRestoration' in history) history.scrollRestoration = 'manual'; if(location.hash) history.replaceState(null,'',location.pathname+location.search); window.scrollTo(0,0);` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Academia Danışmanlık',
              url: 'https://www.academiadanismanlik.com',
              logo: 'https://www.academiadanismanlik.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@academiadanismanlik.com',
                contactType: 'customer service',
                availableLanguage: ['Turkish', 'English'],
              },
              sameAs: [
                'https://www.carbonless.network',
                'https://www.klexai.com',
                'https://www.sustindex.com',
              ],
              description: 'Yönetişim, düzenleyici uyum, kalite ve sürdürülebilirlik danışmanlığı.',
              areaServed: 'TR',
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
