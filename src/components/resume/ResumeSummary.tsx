"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./ResumeSummary.module.css";

export function ResumeSummary() {
  const { t } = useLanguage();

  const items = [
    t("resume.summary.item1"),
    t("resume.summary.item2"),
    t("resume.summary.item3"),
    t("resume.summary.item4"),
  ];

  return (
    <section id="resume-summary" className={styles.section}>
      <div className={`section-inner ${styles.inner}`}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">{t("resume.summary.title")}</span>
        </motion.h2>

        <ul className={styles.list}>
          {items.map((item, i) => (
            <motion.li
              key={i}
              className={styles.item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
