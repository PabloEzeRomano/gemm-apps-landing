"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Products.module.css";

const PRODUCTS = [
  { key: "miTurno", url: "https://miturno.gemm-apps.com" },
  { key: "fieldCrm", url: "https://field-crm.gemm-apps.com" },
  { key: "qrtify", url: "https://qrtify.gemm-apps.com" },
] as const;

export function Products() {
  const { t } = useLanguage();

  return (
    <section
      id="products"
      className={styles.section}
      aria-labelledby="products-title"
    >
      <div className="section-inner">
        {/* Header */}
        <div className={styles.header}>
          {/*<p className="eyebrow">{t("products.eyebrow")}</p>*/}
          <h2 id="products-title" className={styles.title}>
            {t("products.title")}
          </h2>
        </div>

        {/* Cards grid */}
        <ul className={styles.grid} aria-label="Apps de gemm-apps">
          {PRODUCTS.map(({ key, url }, i) => (
            <li key={key} className={styles.card}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardInner}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardIndex} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.cardName}>{t(`products.${key}.name`)}</h3>
                </div>
                <p className={styles.cardDesc}>{t(`products.${key}.description`)}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardTag}>Conocé más →</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
