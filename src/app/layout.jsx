import '@/styles/globals.css';
import { Providers } from '@/components/Providers';

export const metadata = {
  title: 'Academia Danışmanlık - Kurumsal Danışmanlık',
  description: 'Academia Danışmanlık - Belgelendirme, yasal uyum, sürdürülebilirlik ve kurumsal eğitim hizmetleri',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preload" href="/logo.png" as="image" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
