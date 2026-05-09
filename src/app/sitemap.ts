import type { MetadataRoute } from 'next';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://mateusnogueira.com.br';

type SitemapEntry = MetadataRoute.Sitemap[number];

const BUILD_DATE = new Date();

const ROUTES: ReadonlyArray<{
  path: string;
  changeFrequency: SitemapEntry['changeFrequency'];
  priority: number;
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/sobre', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/palestras', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/livros', changeFrequency: 'monthly', priority: 0.8 },
  {
    path: '/livros/avaliacao-metabolica',
    changeFrequency: 'weekly',
    priority: 0.95,
  },
  {
    path: '/livros/nova-medicina',
    changeFrequency: 'weekly',
    priority: 0.95,
  },
  { path: '/contato', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/midia', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacidade', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/termos', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: BUILD_DATE,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
