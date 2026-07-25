import { MetadataRoute } from "next";

/**
 * Generates /robots.txt automatically at build time.
 * Update `host` to match your production domain.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://afterconcept.io";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
