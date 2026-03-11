"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./ResumeFooter.module.css";

export function ResumeFooter() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`section-inner ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Info */}
          <motion.div
            className={styles.col}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.colTitle}>{t("resume.footer.title")}</p>
            <p className={styles.colSubtitle}>{t("resume.footer.subtitle")}</p>
            <a
              href="/resume/Pablo-Romano-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdfLink}
            >
              {t("resume.footer.downloadPDF")}
            </a>
          </motion.div>

          {/* Sections */}
          <motion.div
            className={styles.col}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className={styles.colLabel}>{t("resume.footer.sections")}</p>
            <ul className={styles.navList}>
              <li>
                <a href="#resume-experience" className={styles.navLink}>
                  {t("resume.footer.experience")}
                </a>
              </li>
              <li>
                <a href="#resume-stack" className={styles.navLink}>
                  {t("resume.footer.stack")}
                </a>
              </li>
              <li>
                <a href="#resume-contact" className={styles.navLink}>
                  {t("resume.footer.contact")}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className={styles.col}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={styles.colLabel}>{t("resume.footer.contactNav")}</p>
            <ul className={styles.navList}>
              <li>
                <Link href="/" className={styles.navLink}>
                  {t("resume.footer.backToPortfolio")}
                </Link>
              </li>
              <li>
                <a href="#resume-top" className={styles.navLink}>
                  ↑ Top
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {currentYear} gemm-apps. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
