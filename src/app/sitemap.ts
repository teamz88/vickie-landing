import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: 'https://vickievoiceai.com',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://vickievoiceai.com/terms-and-conditions/',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://vickievoiceai.com/privacy-policy/',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}