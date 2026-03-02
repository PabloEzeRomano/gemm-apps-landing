"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./About.module.css";

export function About() {
  const { t } = useLanguage();

  const bullets = [
    t("about.bullet1"),
    t("about.bullet2"),
    t("about.bullet3"),
  ];

  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className="section-inner">
        <div className={styles.grid}>
          {/* Left: eyebrow + title */}
          <div className={styles.titleCol}>
            <p className="eyebrow">{t("about.eyebrow")}</p>
            <h2 id="about-title" className={styles.title}>
              {t("about.title")}
            </h2>
          </div>

          {/* Right: bullets + description */}
          <div className={styles.contentCol}>
            <ul className={styles.bullets} aria-label="Principios del estudio">
              {bullets.map((b, i) => (
                <li key={i} className={styles.bulletItem}>
                  <span className={styles.bulletMark} aria-hidden="true">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className={styles.description}>{t("about.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
