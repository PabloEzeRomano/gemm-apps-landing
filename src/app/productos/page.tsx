import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import s from "@/components/ClusterPage/ClusterPage.module.css";

export const metadata: Metadata = {
  title: "Productos — apps para pymes de servicios | gemm-apps",
  description:
    "Mi Turno, Field CRM y QRtify: herramientas simples para negocios que coordinan turnos, equipos de venta en campo o locales gastronómicos.",
  alternates: {
    canonical: "https://gemm-apps.com/productos",
  },
  openGraph: {
    title: "Productos — apps para pymes de servicios | gemm-apps",
    description:
      "Mi Turno, Field CRM y QRtify: herramientas simples para negocios que coordinan turnos, equipos de venta en campo o locales gastronómicos.",
    url: "https://gemm-apps.com/productos",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "gemm-apps", item: "https://gemm-apps.com" },
    { "@type": "ListItem", position: 2, name: "Productos", item: "https://gemm-apps.com/productos" },
  ],
};

const PRODUCTS = [
  {
    href: "/productos/mi-turno",
    name: "Mi Turno",
    eyebrow: "Turnos online",
    desc: "Para negocios que coordinan turnos por WhatsApp. Tus clientes se agendan solos, vos te enterás en el momento.",
    pricing: "Desde $30.000/mes · 14 días gratis",
  },
  {
    href: "/productos/field-crm",
    name: "Field CRM",
    eyebrow: "CRM de campo",
    desc: "Para equipos de ventas en terreno. Seguimiento de clientes, visitas y resultados, todo desde el celular.",
    pricing: "Desde USD 99/mes",
  },
  {
    href: "/productos/qrtify",
    name: "QRtify",
    eyebrow: "Menú digital",
    desc: "Para negocios gastronómicos. Menú digital con pedidos que llegan directo a cocina, sin papel ni intermediarios.",
    pricing: "Desde $15.000/mes · 14 días gratis",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className={s.hero}>
          <div className={s.heroInner}>
            <p className={s.eyebrow}>gemm-apps · Productos</p>
            <h1 className={s.title}>Apps que resuelven cosas reales.</h1>
            <p className={s.subtitle}>
              Herramientas simples para pymes de servicios. Cada producto ataca un problema operativo concreto — sin funcionalidades que no vas a usar.
            </p>
          </div>
        </div>
        <section className={s.faqSection}>
          <div className={s.faqInner}>
            {PRODUCTS.map(({ href, name, eyebrow, desc, pricing }) => (
              <a
                key={href}
                href={href}
                style={{
                  display: "block",
                  textDecoration: "none",
                  borderTop: "1px solid var(--color-border)",
                  padding: "2rem 0",
                  transition: "opacity 200ms",
                }}
              >
                <p style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-magenta)",
                  marginBottom: "0.5rem",
                }}>
                  {eyebrow}
                </p>
                <h2 style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--color-text)",
                  marginBottom: "0.75rem",
                }}>
                  {name} →
                </h2>
                <p style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "var(--color-text-secondary)",
                  maxWidth: "58ch",
                  marginBottom: "0.75rem",
                }}>
                  {desc}
                </p>
                <p style={{
                  fontSize: "0.82rem",
                  color: "var(--color-text-tertiary)",
                }}>
                  {pricing}
                </p>
              </a>
            ))}
            <div style={{ borderTop: "1px solid var(--color-border)" }} />
          </div>
        </section>
        <div className={s.cta}>
          <div className={s.ctaInner}>
            <p className={s.ctaText}>
              ¿No encontrás lo que necesitás? Hacemos desarrollo a medida.
            </p>
            <a href="/#contact" className={s.ctaButton}>
              Hablemos →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
