"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./FromTheStudio.module.css";

const POST_INDICES = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const;

const TAG_STYLES: Record<string, string> = {
  "Pensamiento": styles.tagThought,
  "Thought": styles.tagThought,
  "Build Log": styles.tagBuildLog,
  "Experimento": styles.tagExperiment,
  "Experiment": styles.tagExperiment,
};

export function FromTheStudio() {
  const { t } = useLanguage();

  return (
    <section
      id="from-the-studio"
      className={styles.section}
      aria-labelledby="studio-title"
    >
      <div className="section-inner">
        {/* Header */}
        <div className={styles.header}>
          <p className="eyebrow">{t("studio.eyebrow")}</p>
          <div className={styles.headerRow}>
            <h2 id="studio-title" className={styles.title}>
              {t("studio.title")}
            </h2>
            <a
              href="https://www.instagram.com/gemm.apps"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramCta}
              aria-label={t("studio.cta")}
            >
              <span>{t("studio.cta")}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
          <p className={styles.description}>{t("studio.description")}</p>
        </div>

        {/* Posts grid */}
        <ul className={styles.grid} aria-label="Entradas del estudio">
          {POST_INDICES.map((i) => {
            const tag = t(`studio.post${i}.tag`);
            return (
              <li key={i} className={styles.post}>
                <article className={styles.postInner}>
                  <span
                    className={`${styles.tag} ${TAG_STYLES[tag] ?? ""}`}
                  >
                    {tag}
                  </span>
                  <h3 className={styles.postTitle}>
                    {t(`studio.post${i}.title`)}
                  </h3>
                  <p className={styles.postExcerpt}>
                    {t(`studio.post${i}.excerpt`)}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
