import type { MetadataRoute } from "next";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://web3school.study";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/callback", "/dashboard", "/learn/", "/roadmap", "/progress", "/passport", "/settings", "/notifications", "/discover", "/results"],
      },
    ],
    sitemap: `${APP_URL}/sitemap.xml`,
  };
}
