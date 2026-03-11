"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import styles from "./ResumeContact.module.css";

export function ResumeContact() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const email = "hola@gemm-apps.com";

  const glowAnimate =
    theme === "dark"
      ? {
          opacity: 1,
          y: 0,
          textShadow: [
            "0 0 10px #b50b81, 0 0 20px #b50b81, 0 0 40px #b50b81",
            "0 0 20px #b50b81, 0 0 40px #b50b81, 0 0 70px #b50b81",
            "0 0 10px #b50b81, 0 0 20px #b50b81, 0 0 40px #b50b81",
          ],
        }
      : {
          opacity: 1,
          y: 0,
          textShadow: [
            "0 0 6px rgba(181,11,129,0.45), 0 0 14px rgba(181,11,129,0.2)",
            "0 0 10px rgba(181,11,129,0.65), 0 0 22px rgba(181,11,129,0.3)",
            "0 0 6px rgba(181,11,129,0.45), 0 0 14px rgba(181,11,129,0.2)",
          ],
        };

  return (
    <section id="resume-contact" className={styles.section}>
      <div className={`section-inner ${styles.inner}`}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 24 }}
          animate={glowAnimate}
          transition={{
            opacity: { duration: 0.7 },
            y: { duration: 0.7 },
            textShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {t("resume.contact.title")}
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t("resume.contact.subtitle")}{" "}
          <span className={styles.big}>{t("resume.contact.big")}</span>?
        </motion.p>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {t("resume.contact.description")}
        </motion.p>

        <motion.div
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.a
            href={t("resume.contact.whatsappUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {t("resume.contact.cta")}
          </motion.a>
          <motion.a
            href={`mailto:${email}`}
            className={styles.ctaPrimary}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {t("resume.contact.mailCTA")}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
