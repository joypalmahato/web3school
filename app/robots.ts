import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/callback",
          "/dashboard",
          "/discover",
          "/learn/",
          "/notifications",
          "/progress",
          "/results",
          "/roadmap",
          "/settings",
        ],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
