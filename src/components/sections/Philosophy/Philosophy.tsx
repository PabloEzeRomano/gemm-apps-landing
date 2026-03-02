"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Philosophy.module.css";

const PAIRS = ["pair1", "pair2", "pair3"] as const;

export function Philosophy() {
  const { t } = useLanguage();

  return (
    <section
      id="philosophy"
      className={styles.section}
      aria-labelledby="philosophy-title"
    >
      <div className="section-inner">
        <div className={styles.inner}>
          <p className="eyebrow">{t("philosophy.eyebrow")}</p>

          <h2 id="philosophy-title" className={styles.title}>
            {t("philosophy.titlePrefix")}{" "}
            <span className={styles.titleAccent}>{t("philosophy.titleAccent")}</span>
          </h2>

          {/* <div className={styles.decorator} aria-hidden="true">
            <span className={styles.decoratorDot} />
            <span className={styles.decoratorLine} />
          </div> */}

          <div className={styles.pairs}>
            {PAIRS.map((pair) => (
              <div key={pair} className={styles.pair}>
                <p className={styles.pairA}>{t(`philosophy.${pair}a`)}</p>
                <p className={styles.pairB}>{t(`philosophy.${pair}b`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
