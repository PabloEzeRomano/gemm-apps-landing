"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Statement.module.css";

export function Statement() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} aria-label={t("statement.line1")}>
      <div className="section-inner">
        <div className={styles.inner}>
          <p className={styles.line}>{t("statement.line1")}</p>
          <p className={styles.line}>
            {t("statement.line2prefix")}{" "}
            <span className={styles.accent}>{t("statement.line2accent")}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
