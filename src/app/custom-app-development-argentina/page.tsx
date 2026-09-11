import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import styles from "@/components/ClusterPage/ClusterPage.module.css";

export const metadata: Metadata = {
  title: "Custom App Development in Argentina | gemm-apps",
  description:
    "gemm-apps builds custom apps when the problem does not fit any existing product. Direct contact with who builds it — no account manager layers.",
  alternates: {
    canonical: "https://gemm-apps.com/custom-app-development-argentina",
    languages: {
      en: "https://gemm-apps.com/custom-app-development-argentina",
      es: "https://gemm-apps.com/desarrollo-a-medida",
      "x-default": "https://gemm-apps.com/custom-app-development-argentina",
    },
  },
  openGraph: {
    title: "Custom App Development in Argentina | gemm-apps",
    description:
      "gemm-apps builds custom apps when the problem does not fit any existing product. Direct contact with who builds it — no account manager layers.",
    url: "https://gemm-apps.com/custom-app-development-argentina",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does gemm-apps do custom app development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. gemm-apps has two lines: semi-standardized products (Mi Turno for appointments, Field CRM for field sales, QRtify for digital menus and catalogs) and custom development when a business problem does not fit any of those products. In both cases you deal directly with the person building it — no account manager layers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire gemm-apps for a custom project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Custom development makes sense when the problem is specific and does not fit any existing product; when it does fit, a pre-built product resolves it faster and at lower cost. gemm-apps takes custom projects for SMBs and startups whose needs are genuinely unique.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does gemm-apps use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobile apps are built with Expo and React Native. Web products and custom projects use Next.js. This keeps the team fast and consistent across different types of work.",
      },
    },
    {
      "@type": "Question",
      name: "Is there post-launch support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. gemm-apps own products are updated continuously. Custom projects also receive post-launch follow-up rather than being treated as closed deliverables once handed over.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact gemm-apps for a custom project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Via WhatsApp or the contact form at gemm-apps.com. You deal directly with the person who will build the project — no commercial intermediaries.",
      },
    },
  ],
};

const FAQS = [
  {
    q: "Does gemm-apps do custom app development?",
    a: "Yes. gemm-apps has two lines: semi-standardized products (Mi Turno for appointments, Field CRM for field sales, QRtify for digital menus and catalogs) and custom development when a business problem does not fit any of those products. In both cases you deal directly with the person building it.",
  },
  {
    q: "Can I hire gemm-apps for a custom project?",
    a: "Yes. Custom development makes sense when the problem is specific and does not fit any existing product; when it does fit, a pre-built product resolves it faster and cheaper. gemm-apps takes custom projects for SMBs and startups with genuinely unique needs.",
  },
  {
    q: "What technologies does gemm-apps use?",
    a: "Mobile apps are built with Expo and React Native. Web products and custom projects use Next.js. This keeps the team fast and consistent across different types of work.",
  },
  {
    q: "Is there post-launch support?",
    a: "Yes. gemm-apps own products are updated continuously. Custom projects also get post-launch follow-up rather than being treated as closed deliverables once handed over.",
  },
  {
    q: "How do I contact gemm-apps for a custom project?",
    a: "Via WhatsApp or the contact form at gemm-apps.com. You deal directly with the person who will build the project — no commercial intermediaries.",
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
            <p className={styles.eyebrow}>Custom development</p>
            <h1 className={styles.title}>
              Custom app development in Argentina
            </h1>
            <p className={styles.subtitle}>
              When your business problem does not fit any existing product, gemm-apps builds it from scratch. Direct contact with who builds it — no account manager layers.
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
              Does your problem not fit any standard product?
            </p>
            <a href="/#contact" className={styles.ctaButton}>
              Tell us about it →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
