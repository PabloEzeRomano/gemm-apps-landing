import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://gemm-apps.com/sitemap.xml",
    host: "https://gemm-apps.com",
  };
}
