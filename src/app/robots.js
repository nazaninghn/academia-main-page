export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.academia.net.tr/sitemap.xml',
    host: 'https://www.academia.net.tr',
  };
}
