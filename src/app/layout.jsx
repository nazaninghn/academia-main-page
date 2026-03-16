import '@/styles/globals.css';
import { Providers } from '@/components/Providers';

export const metadata = {
  title: 'Academia Danışmanlık - Kurumsal Danışmanlık',
  description:
    'Academia Danışmanlık - Belgelendirme, yasal uyum, sürdürülebilirlik ve kurumsal eğitim hizmetleri',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
