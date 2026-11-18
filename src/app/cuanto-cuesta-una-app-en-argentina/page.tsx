import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { ProductLinks } from "@/components/ProductLinks/ProductLinks";
import styles from "@/components/ClusterPage/ClusterPage.module.css";

export const metadata: Metadata = {
  title: "¿Cuánto cuesta desarrollar una app en Argentina?",
  description:
    "Rangos de precios reales para desarrollo de apps en Argentina: desde MVPs hasta plataformas complejas. Incluye alternativas semi-estandarizadas desde USD 1.000.",
  alternates: {
    canonical: "https://gemm-apps.com/cuanto-cuesta-una-app-en-argentina",
    languages: {
      es: "https://gemm-apps.com/cuanto-cuesta-una-app-en-argentina",
      en: "https://gemm-apps.com/app-development-cost-argentina",
      "x-default": "https://gemm-apps.com/cuanto-cuesta-una-app-en-argentina",
    },
  },
  openGraph: {
    title: "¿Cuánto cuesta desarrollar una app en Argentina? | gemm-apps",
    description:
      "Rangos de precios reales para desarrollo de apps en Argentina: desde MVPs hasta plataformas complejas. Incluye alternativas semi-estandarizadas desde USD 1.000.",
    url: "https://gemm-apps.com/cuanto-cuesta-una-app-en-argentina",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta desarrollar una app personalizada en Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un desarrollo a medida en Argentina puede arrancar en unos pocos miles de dólares para un proyecto simple y superar los USD 20.000–50.000 en proyectos complejos con múltiples integraciones. Como alternativa, un producto semi-estandarizado como los de gemm-apps tiene un costo de entrada desde USD 1.000 porque parte de una base ya construida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta contratar desarrollo de apps en Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El valor hora de un desarrollador senior en Argentina suele ubicarse entre USD 35 y 65. El costo final depende directamente de las horas que insuma el alcance definido. Por eso un MVP simple y una plataforma compleja pueden diferir en un orden de magnitud de precio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son los precios de desarrollo de aplicaciones móviles en Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los rangos típicos van desde USD 3.000–5.000 para un MVP básico hasta USD 50.000 o más para una app compleja con integraciones múltiples. El factor que más mueve el precio no es la plataforma en sí, sino la cantidad de funcionalidades y si hay que construir para iOS y Android en simultáneo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué precios manejan los estudios de software en Argentina para proyectos medianos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un proyecto de complejidad media en Argentina suele ubicarse en un rango de USD 5.000 a 20.000, dependiendo del número de pantallas, integraciones y si requiere backend propio. Los modelos de suscripción mensual están ganando terreno porque reparten ese costo en el tiempo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo pedir un presupuesto para desarrollo de MVP en Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para pedir un presupuesto de MVP conviene llegar con un alcance mínimo definido: qué problema resuelve, qué pantallas necesita y qué integraciones son imprescindibles desde el día uno. Un MVP acotado en Argentina suele arrancar en USD 2.500–5.000 si se construye desde cero; con un producto semi-estandarizado el costo puede ser sensiblemente menor.",
      },
    },
  ],
};

const FAQS = [
  {
    q: "¿Cuánto cuesta desarrollar una app personalizada en Argentina?",
    a: "Un desarrollo a medida puede arrancar en unos pocos miles de dólares para un proyecto simple y superar los USD 20.000–50.000 en proyectos complejos. Como alternativa, un producto semi-estandarizado como los de gemm-apps arranca en USD 1.000 porque parte de una base ya construida en vez de arrancar de cero.",
  },
  {
    q: "¿Cuánto cuesta contratar desarrollo de apps en Argentina?",
    a: "El valor hora de un desarrollador senior en Argentina suele ubicarse entre USD 35 y 65. El costo final depende directamente de las horas que insuma el alcance definido. Por eso un MVP simple y una plataforma compleja pueden diferir en un orden de magnitud de precio.",
  },
  {
    q: "Precios de desarrollo de aplicaciones móviles en Argentina",
    a: "Los rangos típicos van desde USD 3.000–5.000 para un MVP básico hasta USD 50.000 o más para una app compleja con múltiples integraciones. El factor que más mueve el precio no es la plataforma en sí, sino la cantidad de funcionalidades y si hay que construir para iOS y Android en simultáneo.",
  },
  {
    q: "¿Qué precios manejan los estudios de software en Argentina para proyectos medianos?",
    a: "Un proyecto de complejidad media suele ubicarse en USD 5.000 a 20.000, dependiendo del número de pantallas, integraciones y si requiere backend propio. Los modelos de suscripción mensual están ganando terreno porque reparten ese costo en el tiempo y lo hacen más accesible para pymes.",
  },
  {
    q: "¿Cómo pedir un presupuesto para un MVP en Argentina?",
    a: "Conviene llegar con un alcance mínimo definido: qué problema resuelve, qué pantallas necesita y qué integraciones son imprescindibles desde el día uno. Sin ese alcance, cualquier presupuesto va a ser una estimación muy amplia. Un MVP acotado arranca en USD 2.500–5.000 desde cero; con un producto semi-estandarizado puede ser sensiblemente menor.",
  },
];


const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "gemm-apps", item: "https://gemm-apps.com" },
    { "@type": "ListItem", position: 2, name: "¿Cuánto cuesta una app?", item: "https://gemm-apps.com/cuanto-cuesta-una-app-en-argentina" },
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
            <p className={styles.eyebrow}>Precios y presupuestos</p>
            <h1 className={styles.title}>
              ¿Cuánto cuesta desarrollar una app en Argentina?
            </h1>
            <p className={styles.subtitle}>
              Rangos reales de precio para MVPs, apps medianas y plataformas complejas. Más cuándo tiene sentido un producto ya construido en lugar de arrancar desde cero.
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
              ¿Querés saber qué opción tiene sentido para tu caso?
            </p>
            <a href="/#contact" className={styles.ctaButton}>
              Pedí un presupuesto →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
