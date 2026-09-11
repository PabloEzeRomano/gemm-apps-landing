"use client";
import styles from "./FAQ.module.css";
import { useLanguage } from "@/context/LanguageContext";

const ITEMS = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
  { q: "faq.q5", a: "faq.a5" },
] as const;

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿gemm-apps hace desarrollo a medida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. gemm-apps tiene dos líneas: productos semi-estandarizados (Mi Turno, Field CRM, QRtify) y desarrollo a medida cuando el problema de un negocio no encaja en ninguno de esos productos. En ambos casos el trato es directo con quien construye, sin capas de gerentes de cuenta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el setup de un producto de gemm-apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El setup arranca en USD 1.000, significativamente menor al de un desarrollo desde cero. Los productos parten de una base ya construida, lo que reduce tiempo y costo frente a una solución 100% a medida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tecnologías usan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las apps móviles se construyen con Expo y React Native. Los productos web y los desarrollos a medida usan Next.js.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay soporte después del lanzamiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Los productos propios se actualizan de forma continua. Los proyectos a medida también tienen seguimiento post-lanzamiento en lugar de tratarse como trabajos cerrados una vez entregados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con clientes fuera de Buenos Aires?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "gemm-apps opera 100% de forma remota y atiende clientes en todo el país.",
      },
    },
  ],
};

export function FAQ() {
  const { t } = useLanguage();
  return (
    <section className={styles.section} id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <div className={`section-inner ${styles.inner}`}>
        <header className={styles.header}>
          <p className="eyebrow">{t("faq.eyebrow")}</p>
          <h2 className={styles.title}>{t("faq.title")}</h2>
        </header>
        <div className={styles.list}>
          {ITEMS.map(({ q, a }) => (
            <details key={q} className={styles.item}>
              <summary className={styles.question}>{t(q)}</summary>
              <p className={styles.answer}>{t(a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
