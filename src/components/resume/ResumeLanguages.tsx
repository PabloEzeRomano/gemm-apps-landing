"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./ResumeLanguages.module.css";

export function ResumeLanguages() {
  const { t } = useLanguage();

  const languages = [
    { name: t("resume.languages.spanish"), level: t("resume.languages.native") },
    { name: t("resume.languages.english"), level: t("resume.languages.advanced") },
    { name: t("resume.languages.portuguese"), level: t("resume.languages.basic") },
    { name: t("resume.languages.italian"), level: t("resume.languages.basic") },
  ];

  const highlights = [
    t("resume.languages.highlight1"),
    t("resume.languages.highlight2"),
    t("resume.languages.highlight3"),
    t("resume.languages.highlight4"),
    t("resume.languages.highlight5"),
  ];

  return (
    <section id="resume-languages" className={styles.section}>
      <div className={`section-inner ${styles.inner}`}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">{t("resume.languages.title")}</span>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={styles.cardTitle}>{t("resume.languages.languages")}</h3>
            <ul className={styles.langList}>
              {languages.map((lang, i) => (
                <li key={i} className={styles.langRow}>
                  <span className={styles.langName}>{lang.name}</span>
                  <span className={styles.langLevel}>{lang.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.cardTitle}>{t("resume.languages.highlights")}</h3>
            <ul className={styles.highlightList}>
              {highlights.map((item, i) => (
                <li key={i} className={styles.highlightItem}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
