import type { MetadataRoute } from "next";

const base = "https://gemm-apps.com";

const clusterPages = [
  "/desarrollo-de-apps-en-argentina",
  "/cuanto-cuesta-una-app-en-argentina",
  "/como-elegir-empresa-de-software",
  "/desarrollo-a-medida",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          es: base,
          en: `${base}?lang=en`,
        },
      },
    },
    ...clusterPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
