import type { MetadataRoute } from "next";
import { CONFIG } from "./config/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${CONFIG.BASE_URL}cart`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
