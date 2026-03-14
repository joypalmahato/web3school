import type { MetadataRoute } from "next";
import { PUBLISHED_BLOG_POSTS } from "@/data/blog";
import { INITIAL_ROLES } from "@/data/roles";
import { absoluteUrl } from "@/lib/seo";

const LAST_MODIFIED = new Date("2026-03-14T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/roles"),
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/how-it-works"),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/product-roadmap"),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: absoluteUrl("/terms"),
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const roles = INITIAL_ROLES.map((role) => ({
    url: absoluteUrl(`/roles/${role.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogIndex =
    PUBLISHED_BLOG_POSTS.length > 0
      ? [
          {
            url: absoluteUrl("/blog"),
            lastModified: LAST_MODIFIED,
            changeFrequency: "weekly" as const,
            priority: 0.6,
          },
        ]
      : [];

  const blogPosts = PUBLISHED_BLOG_POSTS.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(`${post.date}T00:00:00.000Z`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...roles, ...blogIndex, ...blogPosts];
}
