import { MetadataRoute } from "next";

/**
 * Generates /sitemap.xml automatically at build time.
 * Update `baseUrl` to match your production domain.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://afterconcept.io";

  const routes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/work", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
