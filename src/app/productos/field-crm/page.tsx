import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import styles from "@/components/ClusterPage/ClusterPage.module.css";

export const metadata: Metadata = {
  title: "Field CRM — CRM para equipos de ventas en campo | gemm-apps",
  description:
    "Reemplazá el caos de WhatsApp y Excel con un CRM simple para vendedores en terreno. Sabés dónde está tu equipo, qué venden y qué viene.",
  alternates: {
    canonical: "https://gemm-apps.com/productos/field-crm",
  },
  openGraph: {
    title: "Field CRM — CRM para equipos de ventas en campo | gemm-apps",
    description:
      "Reemplazá el caos de WhatsApp y Excel con un CRM simple para vendedores en terreno. Sabés dónde está tu equipo, qué venden y qué viene.",
    url: "https://gemm-apps.com/productos/field-crm",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Field CRM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "99",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        billingDuration: "P1M",
      },
    },
    {
      "@type": "Offer",
      name: "Team",
      price: "179",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        billingDuration: "P1M",
      },
    },
  ],
  description:
    "CRM móvil para equipos de ventas en terreno. Seguimiento de visitas, clientes y resultados en tiempo real.",
  provider: {
    "@type": "Organization",
    name: "gemm-apps",
    url: "https://gemm-apps.com",
  },
};

const FEATURES = [
  {
    q: "¿Cuánto tarda en implementarse?",
    a: "Días, no meses. Cargás tu equipo, tus clientes y tus zonas. El equipo de gemm-apps te acompaña en el onboarding. Sin migraciones complejas ni integraciones que demoran meses.",
  },
  {
    q: "¿Cómo registra el vendedor desde el campo?",
    a: "Desde el celular, en segundos: visita, fotografía, nota o pedido. Sin papeles, sin 'después te mando el resumen'. La información queda en el sistema al instante.",
  },
  {
    q: "¿Qué ve el manager en tiempo real?",
    a: "Mapa de actividad del equipo, resumen de visitas del día, clientes sin visitar y alertas de tareas vencidas. La información está cuando la necesitás, no al final del día en un Excel.",
  },
  {
    q: "¿Qué incluye el seguimiento del equipo?",
    a: "Alertas de clientes sin visitar, tareas vencidas y métricas de performance individual. El equipo sabe qué hacer. Vos sabés cómo lo están haciendo. Sin micromanagement, con visibilidad real.",
  },
  {
    q: "¿Cuáles son los planes y precios?",
    a: "Starter: USD 99/mes — hasta 10 vendedores, registro de visitas y clientes, mapa de actividad en tiempo real, dashboard para el manager y soporte por WhatsApp. Team (más elegido): USD 179/mes — vendedores ilimitados, gestión de rutas y zonas, reportes y métricas avanzadas, integraciones (WhatsApp, email) y soporte prioritario con onboarding. Ambos tienen costo único de setup. Sin contrato anual.",
  },
  {
    q: "¿Para qué tipo de empresa es Field CRM?",
    a: "Para empresas con equipos de ventas que visitan clientes en terreno: distribuidoras, laboratorios, empresas de consumo masivo, seguros, telecomunicaciones, cualquier rubro con fuerza de venta externa. Si tu equipo hoy reporta por WhatsApp o Excel, Field CRM reemplaza ese caos.",
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
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Field CRM · gemm-apps</p>
            <h1 className={styles.title}>
              Tu equipo en el campo. Vos, en control.
            </h1>
            <p className={styles.subtitle}>
              Reemplazá el caos de WhatsApp y Excel con un CRM simple para equipos de ventas en terreno. Sabés dónde está tu equipo, qué están vendiendo, y qué viene.
            </p>
          </div>
        </div>
        <section className={styles.faqSection}>
          <div className={styles.faqInner}>
            {FEATURES.map(({ q, a }) => (
              <details key={q} className={styles.item}>
                <summary className={styles.question}>{q}</summary>
                <p className={styles.answer}>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <div className={styles.cta}>
          <div className={styles.ctaInner}>
            <p className={styles.ctaText}>
              ¿Tu equipo todavía reporta por WhatsApp?
            </p>
            <a href="/#contact" className={styles.ctaButton}>
              Agendá una demo →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
