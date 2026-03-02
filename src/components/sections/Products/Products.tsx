"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Products.module.css";

const PRODUCT_KEYS = [
  "kairo",
  "crmPilar",
  "menuQr",
  "discountEngine",
  "scamRadar",
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
          <p className="eyebrow">{t("products.eyebrow")}</p>
          <h2 id="products-title" className={styles.title}>
            {t("products.title")}
          </h2>
          <p className={styles.intro}>{t("products.intro")}</p>
        </div>

        {/* Cards grid */}
        <ul className={styles.grid} aria-label="Productos del estudio">
          {PRODUCT_KEYS.map((key, i) => (
            <li key={key} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.cardTop}>
                  <span className={styles.cardIndex} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.cardName}>{t(`products.${key}.name`)}</h3>
                </div>
                <p className={styles.cardDesc}>{t(`products.${key}.description`)}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardTag}>{t("products.tag")}</span>
                </div>
              </div>
            </li>
          ))}

          {/* Studio slot — links to collaborations */}
          <li className={`${styles.card} ${styles.cardStudio}`}>
            <a href="#collaborations" className={styles.cardInner}>
              <div className={styles.cardTop}>
                <span className={styles.cardIndex} aria-hidden="true">06</span>
                <h3 className={styles.cardName}>{t("products.studioSlot.name")}</h3>
              </div>
              <p className={styles.cardDesc}>{t("products.studioSlot.description")}</p>
              <div className={styles.cardFooter}>
                <span className={styles.cardTag}>{t("products.studioSlot.tag")}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
