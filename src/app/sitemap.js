export default function sitemap() {
  const base = 'https://www.academia.net.tr';

  return [
    { url: base,              lastModified: new Date('2025-06-01'), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/about`,   lastModified: new Date('2025-05-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date('2025-05-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy`, lastModified: new Date('2025-01-01'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,   lastModified: new Date('2025-01-01'), changeFrequency: 'yearly',  priority: 0.3 },
  ];
}
