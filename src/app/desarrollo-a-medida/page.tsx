import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import styles from "@/components/ClusterPage/ClusterPage.module.css";

export const metadata: Metadata = {
  title: "Desarrollo de aplicaciones a medida en Argentina | gemm-apps",
  description:
    "gemm-apps hace desarrollo a medida cuando el problema no encaja en ningún producto existente. Trato directo con quien construye, sin capas intermedias.",
  openGraph: {
    title: "Desarrollo de aplicaciones a medida en Argentina | gemm-apps",
    description:
      "gemm-apps hace desarrollo a medida cuando el problema no encaja en ningún producto existente. Trato directo con quien construye, sin capas intermedias.",
    url: "https://gemm-apps.com/desarrollo-a-medida",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puedo contratar un estudio de software en Argentina para proyectos a medida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. gemm-apps ofrece desarrollo a medida como una de sus dos líneas de trabajo (la otra son productos propios semi-estandarizados). Tiene sentido encarar un proyecto a medida cuando el problema del negocio es específico y no encaja en ningún producto existente; cuando sí encaja, un producto ya construido suele resolver más rápido y más barato.",
      },
    },
    {
      "@type": "Question",
      name: "¿Existen empresas especializadas en desarrollo de apps para startups en Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hay estudios que trabajan con startups en etapa temprana, priorizando velocidad sobre alcance completo. gemm-apps toma proyectos a medida para startups y pymes cuando el problema es específico, y también ofrece productos ya definidos para los casos donde no hace falta construir desde cero.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué servicios ofrecen los estudios de desarrollo de software en Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varían bastante: desde desarrollo 100% a medida hasta productos SaaS semi-estandarizados y consultoría tecnológica. gemm-apps combina las dos primeras — productos propios para problemas comunes de pymes, y desarrollo a medida cuando el cliente tiene una necesidad puntual que no encaja en ninguno.",
      },
    },
    {
      "@type": "Question",
      name: "¿Existen estudios de software en Argentina que trabajen con tecnologías específicas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, cada estudio suele tener un stack definido. gemm-apps construye apps móviles con Expo y React Native, y proyectos web con Next.js, tanto en productos propios como en desarrollos a medida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay estudios de software en Argentina que ofrezcan soporte post-desarrollo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, aunque no es universal. gemm-apps mantiene seguimiento después del lanzamiento tanto en sus productos propios como en los proyectos a medida, en lugar de tratarlos como trabajos cerrados una vez entregados.",
      },
    },
  ],
};

const FAQS = [
  {
    q: "¿Puedo contratar a gemm-apps para un proyecto a medida?",
    a: "Sí. gemm-apps ofrece desarrollo a medida como una de sus dos líneas de trabajo (la otra son productos propios semi-estandarizados). Tiene sentido cuando el problema del negocio es específico y no encaja en ningún producto existente; cuando sí encaja, un producto ya construido suele resolver más rápido y más barato.",
  },
  {
    q: "¿gemm-apps trabaja con startups?",
    a: "Sí. gemm-apps toma proyectos a medida para startups y pymes cuando el problema es específico, y también ofrece productos ya definidos para los casos donde no hace falta construir desde cero. La decisión depende de qué tan genérico o único sea el problema.",
  },
  {
    q: "¿Qué servicios ofrece gemm-apps exactamente?",
    a: "Dos líneas: productos semi-estandarizados (Mi Turno para turnos, Field CRM para ventas de campo, QRtify para menús y catálogos digitales) y desarrollo a medida cuando el problema del cliente no encaja en ninguno. En ambos casos, el trato es directo con quien construye.",
  },
  {
    q: "¿Qué tecnologías usa gemm-apps?",
    a: "Apps móviles con Expo y React Native. Productos web y desarrollos a medida con Next.js. Eso permite mantener velocidad y consistencia entre distintos tipos de trabajo.",
  },
  {
    q: "¿Hay soporte después de que el proyecto se lanza?",
    a: "Sí. Los productos propios se actualizan de forma continua. Los proyectos a medida también tienen seguimiento post-lanzamiento, en lugar de tratarse como trabajos cerrados una vez entregados.",
  },
  {
    q: "¿Cómo contactar con gemm-apps para un proyecto a medida?",
    a: "Por WhatsApp o por el formulario de contacto en gemm-apps.com. El trato es directo con quien va a construir el proyecto, sin intermediarios comerciales.",
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
            <p className={styles.eyebrow}>Desarrollo a medida</p>
            <h1 className={styles.title}>
              Desarrollo de aplicaciones a medida en Argentina
            </h1>
            <p className={styles.subtitle}>
              Cuando el problema de tu negocio no encaja en ningún producto existente, gemm-apps lo construye desde cero. Trato directo con quien construye, sin capas de gerentes de cuenta.
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
              ¿Tu problema no encaja en ningún producto estándar?
            </p>
            <a href="/#contact" className={styles.ctaButton}>
              Contanos el problema →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
