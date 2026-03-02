"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Collaborations.module.css";

export function Collaborations() {
  const { t } = useLanguage();

  return (
    <section
      id="collaborations"
      className={styles.section}
      aria-labelledby="collab-title"
    >
      <div className="section-inner">
        <div className={styles.grid}>
          {/* Left */}
          <div className={styles.left}>
            <p className="eyebrow">{t("collaborations.eyebrow")}</p>
            <h2 id="collab-title" className={styles.title}>
              {t("collaborations.title")}
            </h2>
          </div>

          {/* Right */}
          <div className={styles.right}>
            <p className={styles.copy}>{t("collaborations.copy1")}</p>
            <p className={`${styles.copy} ${styles.copyBold}`}>
              {t("collaborations.copy2")}
            </p>
            <a href="#contact" className={styles.cta}>
              {t("collaborations.cta")}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
