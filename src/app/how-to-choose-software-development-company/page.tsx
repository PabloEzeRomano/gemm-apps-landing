import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { ProductLinks } from "@/components/ProductLinks/ProductLinks";
import styles from "@/components/ClusterPage/ClusterPage.module.css";

export const metadata: Metadata = {
  title: "How to Choose a Software Development Company",
  description:
    "The real signals that matter when choosing a software partner: direct contact, post-launch commitment, written scope. No marketing fluff.",
  alternates: {
    canonical: "https://gemm-apps.com/how-to-choose-software-development-company",
    languages: {
      en: "https://gemm-apps.com/how-to-choose-software-development-company",
      es: "https://gemm-apps.com/como-elegir-empresa-de-software",
      "x-default": "https://gemm-apps.com/how-to-choose-software-development-company",
    },
  },
  openGraph: {
    title: "How to Choose a Software Development Company | gemm-apps",
    description:
      "The real signals that matter when choosing a software partner: direct contact, post-launch commitment, written scope. No marketing fluff.",
    url: "https://gemm-apps.com/how-to-choose-software-development-company",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I choose the best software development provider?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most reliable signals are not team size or portfolio size, but: whether you will speak directly with the person building the product (not just a salesperson), whether the scope is written clearly before the project starts, and whether there is a commitment to support after launch. A provider that disappears after delivery typically costs more in the long run than a smaller but more involved one.",
      },
    },
    {
      "@type": "Question",
      name: "How do I evaluate an Argentine software studio for outsourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Argentine studios, including gemm-apps, work fully remotely with clients worldwide. What matters most is communication closeness: direct contact with the person developing, no account manager layers, and real visibility into project progress.",
      },
    },
    {
      "@type": "Question",
      name: "How do I compare software studios in Argentina by experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compare by type of client served (SMBs vs. enterprise), type of product (internal tools vs. consumer apps), and evidence of post-launch continuity — rather than years founded or number of projects in the portfolio. A studio with few but highly focused clients in your problem space is usually a better bet than a large generalist.",
      },
    },
    {
      "@type": "Question",
      name: "What are best practices for outsourcing software development to Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Define scope in writing before starting. Avoid adding features mid-project (the most common cause of cost overruns). Prefer providers willing to say no to requests that complicate the product without real need. These three practices have the highest impact on whether an outsourced project goes well.",
      },
    },
  ],
};

const FAQS = [
  {
    q: "How do I choose the best software development provider?",
    a: "The most reliable signals are not team size or portfolio, but: whether you speak directly with the person building the product, whether the scope is written clearly before the project starts, and whether there is a commitment to support after launch. A provider that disappears after delivery typically costs more in the long run.",
  },
  {
    q: "How do I evaluate an Argentine software studio for outsourcing?",
    a: "Most Argentine studios — including gemm-apps — work fully remotely with clients worldwide. What matters most is communication closeness: direct contact with the developer, no account manager layers, and real visibility into project progress.",
  },
  {
    q: "How do I compare software studios in Argentina by experience?",
    a: "Compare by type of client served (SMBs vs. enterprise), type of product (internal tools vs. consumer apps), and evidence of post-launch continuity — not years founded or number of projects. A studio with few but focused clients in your problem space usually beats a large generalist.",
  },
  {
    q: "What are best practices for outsourcing software development to Argentina?",
    a: "Define scope in writing before starting. Avoid adding features mid-project (the most common cause of cost overruns). Prefer providers willing to push back on requests that add complexity without real value. These three practices have the highest impact on whether an outsourced project goes well.",
  },
];


const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "gemm-apps", item: "https://gemm-apps.com" },
    { "@type": "ListItem", position: 2, name: "How to Choose a Software Company", item: "https://gemm-apps.com/how-to-choose-software-development-company" },
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
            <p className={styles.eyebrow}>Choosing right</p>
            <h1 className={styles.title}>
              How to choose a software development company
            </h1>
            <p className={styles.subtitle}>
              The signals that actually matter: direct contact with who builds, written scope, post-launch commitment. No marketing.
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
              Talk directly with the person who will build your app.
            </p>
            <a href="/#contact" className={styles.ctaButton}>
              Get in touch →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
