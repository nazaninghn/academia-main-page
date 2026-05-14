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
  title: 'Academia Danışmanlık – Kurumsal Danışmanlık',
  description: 'Belgelendirme, yasal uyum, sürdürülebilirlik ve kurumsal eğitim hizmetleri',
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
        <script dangerouslySetInnerHTML={{ __html: `if('scrollRestoration' in history) history.scrollRestoration = 'manual'; if(location.hash) history.replaceState(null,'',location.pathname+location.search); window.scrollTo(0,0);` }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
