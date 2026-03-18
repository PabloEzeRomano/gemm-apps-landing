"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import styles from "./ResumeHero.module.css";

export function ResumeHero() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const glowAnimate = {
    opacity: 1,
    y: 0,
  };

  return (
    <section id="resume-top" className={styles.section}>
      <div className={styles.inner}>
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 30 }}
          animate={glowAnimate}
          transition={{
            opacity: { duration: 0.8 },
            y: { duration: 0.8 },
          }}
        >
          {t("resume.hero.name")}
        </motion.h1>

        <motion.p
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {t("resume.hero.title")}
        </motion.p>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          {t("resume.hero.subtitle")}
        </motion.p>

        <motion.div
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <Link href="/" className={styles.ctaPrimary}>
            {t("resume.hero.gemmAppsButton")}
          </Link>
          <a href="#resume-contact" className={styles.ctaSecondary}>
            {t("resume.hero.contactButton")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
