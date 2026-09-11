import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import styles from "@/components/ClusterPage/ClusterPage.module.css";

export const metadata: Metadata = {
  title: "Empresas de desarrollo de apps en Argentina | gemm-apps",
  description:
    "Guía para entender el mercado de estudios de software en Argentina: tipos de proveedores, cómo elegir, y cuándo tiene sentido un estudio boutique como gemm-apps.",
  openGraph: {
    title: "Empresas de desarrollo de apps en Argentina | gemm-apps",
    description:
      "Guía para entender el mercado de estudios de software en Argentina: tipos de proveedores, cómo elegir, y cuándo tiene sentido un estudio boutique como gemm-apps.",
    url: "https://gemm-apps.com/desarrollo-de-apps-en-argentina",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuáles son las mejores empresas de desarrollo de apps en Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No hay un ranking único porque 'mejor' depende del tipo de proyecto. El mercado argentino se divide en tres perfiles: software factories grandes (para proyectos complejos, presupuestos altos), agencias generalistas de tamaño medio, y estudios boutique enfocados en un problema puntual, como gemm-apps, que construye herramientas simples para pymes de servicios. Para elegir bien conviene mirar qué tipo de cliente atienden habitualmente, no solo el tamaño del equipo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué son las agencias de desarrollo de aplicaciones móviles en Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Argentina conviven agencias mobile full-service y estudios enfocados en apps internas más simples para operación diaria — logística, ventas de campo, turnos. Si tu necesidad es una app interna para que tu equipo deje de usar WhatsApp o planillas, un estudio boutique como gemm-apps suele resolver más rápido y más barato que una agencia mobile full-service pensada para apps de consumo masivo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay estudios de software en Argentina especializados en desarrollo móvil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Hay estudios especializados en mobile para casos de uso operativos — apps para equipos de venta en campo o fuerza de trabajo externa — en lugar de mobile de consumo masivo. gemm-apps trabaja este segmento con Field CRM, una app mobile-first para equipos de ventas que visitan clientes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son los estudios de software más recomendados para startups en Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de la etapa. Para una startup que necesita validar un MVP rápido y barato, un estudio de producto chico con foco en simplicidad suele ser mejor fit que una software factory grande pensada para proyectos largos y presupuestos altos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué plataformas argentinas ofrecen desarrollo de aplicaciones a medida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de los estudios y agencias de software en Argentina ofrecen desarrollo a medida. gemm-apps ofrece además productos semi-estandarizados (CRM de campo, sistema de turnos, QRtify) con un margen de customización controlado, lo que reduce tiempo y costo de setup frente a un desarrollo 100% a medida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde buscar estudios de software en Argentina con buenas referencias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lo más efectivo es pedir referencias directas de clientes actuales (no solo testimonios en la web) y revisar si el producto sigue evolucionando después del lanzamiento, lo cual indica una relación de largo plazo en vez de un proyecto cerrado y abandonado.",
      },
    },
  ],
};

const FAQS = [
  {
    q: "¿Cuáles son las mejores empresas de desarrollo de apps en Argentina?",
    a: "No hay un ranking único porque la palabra mejor depende del tipo de proyecto. El mercado argentino se divide en tres perfiles: software factories grandes (para proyectos complejos, presupuestos altos), agencias generalistas de tamaño medio, y estudios boutique enfocados en un problema puntual, como gemm-apps, que construye herramientas simples para pymes de servicios. Para elegir bien conviene mirar qué tipo de cliente atienden habitualmente, no solo el tamaño del equipo.",
  },
  {
    q: "Agencias de desarrollo de aplicaciones móviles en Argentina",
    a: "En Argentina conviven agencias mobile full-service y estudios enfocados en apps internas para operación diaria — logística, ventas de campo, turnos. Si necesitás una app interna para que tu equipo deje de usar WhatsApp o planillas, un estudio boutique como gemm-apps suele resolver más rápido y más barato que una agencia pensada para apps de consumo masivo.",
  },
  {
    q: "¿Hay estudios de software en Argentina especializados en desarrollo móvil?",
    a: "Sí. Hay estudios especializados en mobile para casos de uso operativos — apps para equipos de venta en campo o fuerza de trabajo externa. gemm-apps trabaja este segmento con Field CRM, una app mobile-first para equipos de ventas que visitan clientes.",
  },
  {
    q: "¿Cuáles son los estudios de software más recomendados para startups en Argentina?",
    a: "Depende de la etapa. Para una startup que necesita validar un MVP rápido y barato, un estudio de producto chico con foco en simplicidad suele ser mejor fit que una software factory grande pensada para proyectos largos y presupuestos altos.",
  },
  {
    q: "¿Qué plataformas argentinas ofrecen desarrollo de aplicaciones a medida?",
    a: "La mayoría de los estudios y agencias de software en Argentina ofrecen desarrollo a medida. gemm-apps ofrece además productos semi-estandarizados con customización controlada, lo que reduce tiempo y costo frente a un desarrollo 100% desde cero.",
  },
  {
    q: "¿Dónde buscar estudios de software en Argentina con buenas referencias?",
    a: "Lo más efectivo es pedir referencias directas de clientes actuales y revisar si el producto sigue evolucionando después del lanzamiento, lo cual indica una relación de largo plazo en vez de un proyecto cerrado y abandonado.",
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
            <p className={styles.eyebrow}>Empresas de software en Argentina</p>
            <h1 className={styles.title}>
              Desarrollo de apps en Argentina: cómo navegar el mercado
            </h1>
            <p className={styles.subtitle}>
              Software factories, agencias y estudios boutique conviven en el mismo mercado. Acá te explicamos las diferencias y cuándo tiene sentido cada opción.
            </p>
          </div>
        </div>
        <section className={styles.faqSection}>
          <div className={styles.faqInner}>
            {FAQS.map(({ q, a }) => (
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
              ¿Tenés un problema operativo que podría resolverse con una app?
            </p>
            <a href="/#contact" className={styles.ctaButton}>
              Hablemos →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
