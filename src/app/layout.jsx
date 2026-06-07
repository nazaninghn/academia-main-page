import '@/styles/globals.css';
import { Manrope, Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700', '800'],
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
  preload: true,
});

const SITE_URL = 'https://www.academia.net.tr';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Academia Danışmanlık – Yönetişim, Uyum ve Sürdürülebilirlik Danışmanlığı',
    template: '%s | Academia Danışmanlık',
  },
  description:
    "Academia Danışmanlık; sistem belgelendirme, yasal uyum (KVKK/GDPR), sürdürülebilirlik, AI yönetişimi (ISO 42001) ve kurumsal eğitim alanlarında Türkiye'nin lider danışmanlık firmasıdır.",
  keywords: [
    'Academia Danışmanlık', 'kurumsal danışmanlık', 'sistem belgelendirme',
    'ISO 9001', 'ISO 14001', 'ISO 42001', 'KVKK', 'GDPR', 'sürdürülebilirlik danışmanlığı',
    'ESG danışmanlık', 'AI yönetişimi', 'proje danışmanlığı', 'TÜBİTAK hibe',
    'kurumsal eğitim', 'yönetim sistemi',
  ],
  verification: {
    google: '683573c7faec815e',
  },
  authors: [{ name: 'Academia Danışmanlık', url: SITE_URL }],
  creator: 'Academia Danışmanlık',
  publisher: 'Academia Danışmanlık',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Academia Danışmanlık – Kurumsal Dönüşüm İçin Yapısal Çözümler',
    description: 'Yönetişim, düzenleyici uyum, kalite ve sürdürülebilirlik çerçeveleri ile kurumsal güç ve ölçülebilir uzun vadeli etki.',
    url: SITE_URL,
    siteName: 'Academia Danışmanlık',
    locale: 'tr_TR',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Academia Danışmanlık' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academia Danışmanlık – Kurumsal Dönüşüm',
    description: 'Yönetişim, uyum, sürdürülebilirlik ve AI yönetişimi alanlarında danışmanlık.',
    images: ['/opengraph-image'],
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
        <script dangerouslySetInnerHTML={{ __html: `if('scrollRestoration' in history)history.scrollRestoration='manual';if(location.hash)history.replaceState(null,'',location.pathname+location.search);window.scrollTo(0,0);` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Academia Danışmanlık',
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@academia.net.tr',
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
