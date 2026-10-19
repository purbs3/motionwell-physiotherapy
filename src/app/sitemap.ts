import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/services", "/areas", "/pricing", "/faqs", "/about", "/contact", "/blog"];
  const servicePaths = site.services.map((service) => `/services/${service.slug}`);
  const articles = blogPosts.map((post) => ({ url: absoluteUrl(`/blog/${post.slug}`), lastModified: new Date(`${post.updatedAt}T09:00:00+05:30`), changeFrequency: "monthly" as const, priority: 0.65 }));
  const pages = [...fixed, ...servicePaths].map((path) => ({ url: absoluteUrl(path || "/"), lastModified: new Date(), changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : ["/contact", "/areas", "/services"].includes(path) ? 0.8 : 0.7 }));
  return [...pages, ...articles];
}
