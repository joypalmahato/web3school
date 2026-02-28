import type { MetadataRoute } from "next";
import { INITIAL_ROLES } from "@/data/roles";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://web3school.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const roles = INITIAL_ROLES.map((role) => ({
    url: `${APP_URL}/roles/${role.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: APP_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${APP_URL}/roles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...roles,
    {
      url: `${APP_URL}/signup`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${APP_URL}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
