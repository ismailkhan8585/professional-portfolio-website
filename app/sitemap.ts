import { MetadataRoute } from 'next';
import { DOMAIN } from '@/lib/constants';
import { allProjects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/work', '/about', '/resume'].map((route) => ({
    url: `${DOMAIN}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const projectRoutes = allProjects.map((project) => ({
    url: `${DOMAIN}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes];
}
