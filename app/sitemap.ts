import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://operaxon.com';
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/apply`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/onboarding`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/audit`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/workflows`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/ai-agent-for-small-business`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/mac-mini-ai-setup`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ai-morning-brief`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/done-for-you-ai-setup`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ai-agent-for-car-dealership`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
