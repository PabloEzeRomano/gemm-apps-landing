import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { ProductLinks } from "@/components/ProductLinks/ProductLinks";
import styles from "@/components/ClusterPage/ClusterPage.module.css";

export const metadata: Metadata = {
  title: "Cómo elegir una empresa de desarrollo de software",
  description:
    "Las señales reales para elegir bien un proveedor de software: trato directo, compromiso post-lanzamiento, alcance por escrito. Sin marketing.",
  alternates: {
    canonical: "https://gemm-apps.com/como-elegir-empresa-de-software",
    languages: {
      es: "https://gemm-apps.com/como-elegir-empresa-de-software",
      en: "https://gemm-apps.com/how-to-choose-software-development-company",
      "x-default": "https://gemm-apps.com/como-elegir-empresa-de-software",
    },
  },
  openGraph: {
    title: "Cómo elegir una empresa de desarrollo de software | gemm-apps",
    description:
      "Las señales reales para elegir bien un proveedor de software: trato directo, compromiso post-lanzamiento, alcance por escrito. Sin marketing.",
    url: "https://gemm-apps.com/como-elegir-empresa-de-software",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo elegir el mejor proveedor de desarrollo de software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las señales más confiables no son el tamaño del equipo ni el portfolio, sino: si vas a hablar directamente con quien construye el producto, si el alcance queda claro por escrito antes de arrancar, y si hay compromiso de soporte después del lanzamiento. Un proveedor que desaparece apenas entrega el proyecto suele salir más caro a largo plazo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo elegir un proveedor de software a medida en Buenos Aires?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Más allá de la ubicación (la mayoría de los estudios argentinos trabajan de forma remota), lo que más importa es la cercanía en la comunicación: contacto directo con quien desarrolla, sin capas de gerentes de cuenta, y visibilidad real del progreso del proyecto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo comparar estudios de software en Argentina según su experiencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conviene comparar por tipo de cliente atendido (pymes vs. corporativos), tipo de producto (herramientas internas vs. apps de consumo) y evidencia de continuidad post-lanzamiento, más que por años de fundado o cantidad de proyectos en el portfolio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son las mejores prácticas para externalizar el desarrollo de software en Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definir el alcance por escrito antes de arrancar, evitar agregar funcionalidades sobre la marcha (la causa más común de sobrecostos), y preferir proveedores que muestren disposición a decir 'no' a pedidos que compliquen el producto sin necesidad real.",
      },
    },
  ],
};

const FAQS = [
  {
    q: "¿Cómo elegir el mejor proveedor de desarrollo de software?",
    a: "Las señales más confiables no son el tamaño del equipo ni el portfolio, sino: si vas a hablar directamente con quien construye el producto, si el alcance queda claro por escrito antes de arrancar, y si hay compromiso de soporte después del lanzamiento. Un proveedor que desaparece apenas entrega el proyecto suele salir más caro a largo plazo.",
  },
  {
    q: "¿Cómo elegir un proveedor de software a medida en Buenos Aires?",
    a: "La mayoría de los estudios argentinos, incluido gemm-apps, trabajan de forma remota con clientes en todo el país. Lo que más importa es la cercanía en la comunicación: contacto directo con quien desarrolla, sin capas de gerentes de cuenta, y visibilidad real del progreso.",
  },
  {
    q: "¿Cómo comparar estudios de software en Argentina según su experiencia?",
    a: "Comparar por tipo de cliente atendido (pymes vs. corporativos), tipo de producto (herramientas internas vs. apps de consumo) y evidencia de continuidad post-lanzamiento, más que por años de fundado o cantidad de proyectos en el portfolio.",
  },
  {
    q: "Mejores prácticas para externalizar el desarrollo de software en Argentina",
    a: "Definir el alcance por escrito antes de arrancar. Evitar agregar funcionalidades sobre la marcha (la causa más común de sobrecostos). Preferir proveedores que muestren disposición a decir 'no' a pedidos que compliquen el producto sin necesidad real.",
  },
];


const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "gemm-apps", item: "https://gemm-apps.com" },
    { "@type": "ListItem", position: 2, name: "Cómo elegir empresa de software", item: "https://gemm-apps.com/como-elegir-empresa-de-software" },
  ],
};
export default function Page() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Cómo elegir bien</p>
            <h1 className={styles.title}>
              Cómo elegir una empresa de desarrollo de software
            </h1>
            <p className={styles.subtitle}>
              Las señales reales que importan al elegir proveedor: trato directo, alcance por escrito, compromiso post-lanzamiento. Sin marketing.
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
        <ProductLinks />
        <div className={styles.cta}>
          <div className={styles.ctaInner}>
            <p className={styles.ctaText}>
              Hablá directo con quien va a construir tu app.
            </p>
            <a href="/#contact" className={styles.ctaButton}>
              Escribinos →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
