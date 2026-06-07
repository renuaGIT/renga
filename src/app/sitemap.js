import { worksSeoConfig, allWorks } from "@/lib/works";

export default function sitemap() {
  const baseUrl = "https://renua.one";

  const staticPages = [
    { url: "", priority: 1.0, changefreq: "daily" },
    { url: "/work", priority: 0.8, changefreq: "daily" },
    { url: "/services", priority: 0.8, changefreq: "daily" },
    { url: "/about", priority: 0.7, changefreq: "daily" },
    { url: "/clients", priority: 0.7, changefreq: "daily" },
    { url: "/contact-us", priority: 0.8, changefreq: "daily" },
  ];

  const staticRoutes = staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));

  const categoryRoutes = Object.keys(worksSeoConfig)
    .filter((category) => category !== "all")
    .map((category) => ({
      url: `${baseUrl}/work/${category}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.7,
    }));

  const caseRoutes = allWorks
    .filter((work) => work.isReady)
    .map((work) => ({
      url: `${baseUrl}/work/${work.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.6,
    }));

  return [...staticRoutes, ...categoryRoutes, ...caseRoutes];
}
