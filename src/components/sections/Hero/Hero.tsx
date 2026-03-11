"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className={styles.hero}
      aria-labelledby="hero-headline"
    >
      {/* Atmospheric iso — structural background only */}
      <div className={styles.isoBack} aria-hidden="true">
        <Image
          src="/brand/logo.svg"
          alt=""
          width={553}
          height={535}
          className={styles.isoImg}
        />
      </div>

      {/* ── Meta bar ───────────────────────────────── */}
      <div className={styles.metaBar} aria-hidden="true">
        <span className={styles.metaItem}>{t("hero.eyebrow")}</span>
        <span className={styles.metaDash} />
        <span className={styles.metaItem}>gemm-apps.com</span>
      </div>

      {/* ── Copy — right half (cols 7–12) ──────────── */}
      <div className={styles.grid}>
        <div className={styles.copy}>
          <h1 id="hero-headline" className={styles.headline}>
            <span className={styles.line}>{`${t("hero.headline.line1")} ${t("hero.headline.line2")}`}</span>
            {/* <span className={`${styles.line} ${styles.lineGray}`}>
              {t("hero.headline.line2")}
            </span> */}
            <span className={styles.line}>{t("hero.headline.line3")}</span>
            <span className={styles.line}>{t("hero.headline.line4")}</span>
            <span className={`${styles.line} ${styles.lineDriftAccent}`}>
              {t("hero.headline.line5")}
            </span>
          </h1>

          <p className={styles.sub}>{t("hero.subheadline")}</p>

          <div className={styles.ctaGroup}>
            <a href="#from-the-studio" className={styles.ctaPrimary}>
              {t("hero.cta.primary")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <a href="#contact" className={styles.ctaSecondary}>
              {t("hero.cta.secondary")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
