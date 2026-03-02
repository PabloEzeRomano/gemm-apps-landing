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
    default: "gemm-apps — Estudio Boutique de Producto Digital",
    template: "%s | gemm-apps",
  },
  description:
    "gemm-apps es un estudio boutique de producto digital fundado por Pablo Romano. Construimos productos internos con estructura, identidad y alma.",
  keywords: [
    "producto digital",
    "estudio boutique",
    "software interno",
    "Pablo Romano",
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
    title: "gemm-apps — Estudio Boutique de Producto Digital",
    description:
      "Construimos productos digitales con estructura, identidad y alma.",
    images: [
      {
        url: "/brand/wordmark-white.svg",
        width: 2241,
        height: 1070,
        alt: "gemm-apps — Boutique Product Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "gemm-apps — Estudio Boutique de Producto Digital",
    description:
      "Construimos productos digitales con estructura, identidad y alma.",
    images: ["/brand/wordmark-white.svg"],
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
