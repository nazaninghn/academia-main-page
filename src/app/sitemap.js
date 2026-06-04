export default function sitemap() {
  const base = 'https://www.academiadanismanlik.com';
  const now = new Date();

  return [
    { url: base,              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/about`,   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,   lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ];
}
