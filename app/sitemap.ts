import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getSiteUrl(),
      lastModified: "2026-11-07",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
