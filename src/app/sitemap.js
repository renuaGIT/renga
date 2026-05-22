export default function sitemap() {
  const baseUrl = 'https://renua.one';

  const pages = [
    { url: '', priority: 1.0, changefreq: 'daily' },
    { url: '/work', priority: 0.8, changefreq: 'weekly' },
    { url: '/about', priority: 0.7, changefreq: 'monthly' },
    { url: '/clients', priority: 0.7, changefreq: 'monthly' },
    { url: '/contact', priority: 0.8, changefreq: 'weekly' },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
