import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import styles from "@/components/ClusterPage/ClusterPage.module.css";

export const metadata: Metadata = {
  title: "App Development Cost in Argentina | gemm-apps",
  description:
    "Real price ranges for hiring app developers in Argentina: from MVPs to complex platforms. Includes semi-standardized alternatives from USD 1,000.",
  alternates: {
    canonical: "https://gemm-apps.com/app-development-cost-argentina",
    languages: {
      en: "https://gemm-apps.com/app-development-cost-argentina",
      es: "https://gemm-apps.com/cuanto-cuesta-una-app-en-argentina",
      "x-default": "https://gemm-apps.com/app-development-cost-argentina",
    },
  },
  openGraph: {
    title: "App Development Cost in Argentina | gemm-apps",
    description:
      "Real price ranges for hiring app developers in Argentina: from MVPs to complex platforms. Includes semi-standardized alternatives from USD 1,000.",
    url: "https://gemm-apps.com/app-development-cost-argentina",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to hire app developers in Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Senior developer rates in Argentina typically range from USD 35 to 65 per hour. Final project cost depends directly on the scope — a simple MVP and a complex platform with multiple integrations can differ by an order of magnitude even within the same country.",
      },
    },
    {
      "@type": "Question",
      name: "What are typical app development prices in Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typical ranges go from USD 3,000–5,000 for a basic MVP to USD 50,000 or more for a complex app with multiple integrations. The main cost driver is not the platform itself but the number of features and whether the build targets both iOS and Android simultaneously.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a custom app cost in Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom development in Argentina can start at a few thousand dollars for a simple project and exceed USD 20,000–50,000 for complex solutions with multiple integrations. As an alternative, a semi-standardized product like those from gemm-apps starts at USD 1,000 in setup cost because it builds on an existing codebase rather than starting from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "What do mid-range software projects cost in Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A mid-complexity project in Argentina typically falls in the USD 5,000 to 20,000 range, depending on number of screens, integrations, and whether it requires a custom backend. Monthly subscription models are gaining ground because they spread that cost over time and make it more accessible for SMBs.",
      },
    },
    {
      "@type": "Question",
      name: "How do I request a quote for app development in Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Come with a minimum defined scope: what problem it solves, what screens it needs, and what integrations are essential from day one (versus those that can wait). Without that scope, any quote will be a very wide estimate. A scoped MVP in Argentina typically starts around USD 2,500–5,000 built from scratch; with a semi-standardized product the setup cost can be significantly lower.",
      },
    },
  ],
};

const FAQS = [
  {
    q: "How much does it cost to hire app developers in Argentina?",
    a: "Senior developer rates in Argentina typically range from USD 35 to 65 per hour. Final cost depends directly on scope — a simple MVP and a complex platform can differ by an order of magnitude even in the same country.",
  },
  {
    q: "What are typical app development prices in Argentina?",
    a: "Ranges go from USD 3,000–5,000 for a basic MVP to USD 50,000+ for a complex app with multiple integrations. The main cost driver is not the platform itself but the number of features and whether the build targets both iOS and Android simultaneously.",
  },
  {
    q: "How much does a custom app cost in Argentina?",
    a: "Custom development can start at a few thousand dollars for a simple project and exceed USD 20,000–50,000 for complex solutions. As an alternative, a semi-standardized product from gemm-apps starts at USD 1,000 in setup cost because it builds on an existing codebase rather than from scratch.",
  },
  {
    q: "What do mid-range software projects cost in Argentina?",
    a: "A mid-complexity project typically falls in the USD 5,000 to 20,000 range, depending on number of screens, integrations, and whether it requires a custom backend. Monthly subscription models are gaining ground because they spread costs over time.",
  },
  {
    q: "How do I request a quote for app development in Argentina?",
    a: "Come with a minimum defined scope: what problem it solves, what screens it needs, and what integrations are essential from day one. Without that, any quote will be a very wide estimate. A scoped MVP starts around USD 2,500–5,000 from scratch; with a semi-standardized product the entry cost can be significantly lower.",
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
            <p className={styles.eyebrow}>Pricing &amp; budgets</p>
            <h1 className={styles.title}>
              App development cost in Argentina
            </h1>
            <p className={styles.subtitle}>
              Real price ranges for MVPs, mid-range apps, and complex platforms — plus when a pre-built product makes more sense than building from scratch.
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
              Want to know what option makes sense for your case?
            </p>
            <a href="/#contact" className={styles.ctaButton}>
              Get a quote →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
