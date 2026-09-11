import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

// ─── Fonts ───────────────────────────────────────────────────────────────────
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

import localFont from "next/font/local";
const driftline = localFont({
  src: "../../public/fonts/Driftline.woff2",
  variable: "--font-drift",
  display: "swap",
});

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://gemm-apps.com"),
  title: {
    default: "gemm-apps, apps que te devuelven el tiempo",
    template: "%s | gemm-apps",
  },
  description:
    "Hacemos apps con alma para negocios que ya funcionan y quieren dejar de hacer cosas a mano.",
  keywords: [
    "app para turnos",
    "CRM para vendedores",
    "app para negocios",
    "automatizar procesos",
    "gemm-apps",
  ],
  authors: [{ name: "Pablo Romano", url: "https://gemm-apps.com" }],
  creator: "gemm-apps",
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    url: "https://gemm-apps.com",
    siteName: "gemm-apps",
    title: "gemm-apps, apps que te devuelven el tiempo",
    description:
      "Hacemos apps con alma para negocios que ya funcionan y quieren dejar de hacer cosas a mano.",
    images: [
      {
        url: "/brand/wordmark-white.png",
        width: 2241,
        height: 1070,
        alt: "gemm-apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "gemm-apps, apps que te devuelven el tiempo",
    description:
      "Hacemos apps con alma para negocios que ya funcionan y quieren dejar de hacer cosas a mano.",
    images: ["/brand/wordmark-white.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // favicon: handled by src/app/favicon.ico (App Router convention)
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
};

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-theme="dark"  className={`${spaceGrotesk.variable} ${driftline.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "gemm-apps",
              url: "https://gemm-apps.com",
              logo: "https://gemm-apps.com/brand/logo-horizontal-white.svg",
              description:
                "Hacemos apps con alma para negocios que ya funcionan y quieren dejar de hacer cosas a mano.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://gemm-apps.com/#contact",
              },
              sameAs: [
                "https://www.instagram.com/gemmapps",
                "https://www.linkedin.com/company/gemm-apps",
              ],
            }),
          }}
        />
        {/* Prevent FOUC: set theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('gemm-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
