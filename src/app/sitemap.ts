import type { MetadataRoute } from "next";

const base = "https://gemm-apps.com";

const clusterPages = [
  "/desarrollo-de-apps-en-argentina",
  "/cuanto-cuesta-una-app-en-argentina",
  "/como-elegir-empresa-de-software",
  "/desarrollo-a-medida",
  "/app-development-companies-argentina",
  "/app-development-cost-argentina",
  "/how-to-choose-software-development-company",
  "/custom-app-development-argentina",
];

const productPages = [
  "/productos/mi-turno",
  "/productos/qrtify",
  "/productos/field-crm",
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
    ...productPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
