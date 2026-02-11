import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://factorinc.com',
      lastModified: new Date(),
    },
    {
      url: 'https://factorinc.com/contracts',
      lastModified: new Date(),
    },
  ];
}
