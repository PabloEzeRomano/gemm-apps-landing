"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./ResumeStack.module.css";

export function ResumeStack() {
  const { t } = useLanguage();

  const categories = [
    {
      name: t("resume.stack.frontend"),
      technologies: ["React", "TypeScript", "Next.js", "CSS Modules"],
    },
    {
      name: t("resume.stack.backend"),
      technologies: ["Node.js", "Python", "PostgreSQL", "Redis"],
    },
    {
      name: t("resume.stack.devops"),
      technologies: ["Docker", "AWS", "GitHub Actions", "CI/CD"],
    },
    {
      name: t("resume.stack.tools"),
      technologies: ["Git", "PostHog", "Datadog", "Figma", "Jira"],
    },
  ];

  return (
    <section id="resume-stack" className={styles.section}>
      <div className={`section-inner ${styles.inner}`}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">{t("resume.stack.title")}</span>
        </motion.div>

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className={styles.catName}>{cat.name}</h3>
              <div className={styles.tags}>
                {cat.technologies.map((tech, j) => (
                  <span key={j} className={styles.tag}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
