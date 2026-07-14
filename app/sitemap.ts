import { getAllBlogPosts } from "@/lib/blog";
import { getAllWritings, getWritingPath } from "@/lib/writings";
import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const posts = getAllBlogPosts();
  const writings = getAllWritings();

  const staticRoutes = ["", "/research", "/outputs", "/writings", "/blog"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    }),
  );

  const blogRoutes = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const writingRoutes = writings.map((writing) => ({
    url: `${siteUrl}${getWritingPath(writing)}`,
    lastModified: writing.date ? new Date(writing.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...writingRoutes];
}
