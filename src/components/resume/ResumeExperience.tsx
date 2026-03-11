"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./ResumeExperience.module.css";

export function ResumeExperience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t("resume.experience.gemmapps.company"),
      role: t("resume.experience.gemmapps.role"),
      period: t("resume.experience.gemmapps.period"),
      achievements: [
        t("resume.experience.gemmapps.achievement1"),
        t("resume.experience.gemmapps.achievement2"),
        t("resume.experience.gemmapps.achievement3"),
        t("resume.experience.gemmapps.achievement4"),
      ],
    },
    {
      company: t("resume.experience.numi.company"),
      role: t("resume.experience.numi.role"),
      period: t("resume.experience.numi.period"),
      achievements: [
        t("resume.experience.numi.achievement1"),
        t("resume.experience.numi.achievement2"),
        t("resume.experience.numi.achievement3"),
        t("resume.experience.numi.achievement4"),
      ],
    },
    {
      company: t("resume.experience.blockfi.company"),
      role: t("resume.experience.blockfi.role"),
      period: t("resume.experience.blockfi.period"),
      achievements: [
        t("resume.experience.blockfi.achievement1"),
        t("resume.experience.blockfi.achievement2"),
        t("resume.experience.blockfi.achievement3"),
        t("resume.experience.blockfi.achievement4"),
      ],
    },
    {
      company: t("resume.experience.phinx.company"),
      role: t("resume.experience.phinx.role"),
      period: t("resume.experience.phinx.period"),
      achievements: [
        t("resume.experience.phinx.achievement1"),
        t("resume.experience.phinx.achievement2"),
        t("resume.experience.phinx.achievement3"),
      ],
    },
    {
      company: t("resume.experience.mural.company"),
      role: t("resume.experience.mural.role"),
      period: t("resume.experience.mural.period"),
      achievements: [
        t("resume.experience.mural.achievement1"),
        t("resume.experience.mural.achievement2"),
        t("resume.experience.mural.achievement3"),
      ],
    },
    {
      company: t("resume.experience.quadminds.company"),
      role: t("resume.experience.quadminds.role"),
      period: t("resume.experience.quadminds.period"),
      achievements: [
        t("resume.experience.quadminds.achievement1"),
        t("resume.experience.quadminds.achievement2"),
      ],
    },
    {
      company: t("resume.experience.tekii.company"),
      role: t("resume.experience.tekii.role"),
      period: t("resume.experience.tekii.period"),
      achievements: [
        t("resume.experience.tekii.achievement1"),
        t("resume.experience.tekii.achievement2"),
      ],
    },
    {
      company: t("resume.experience.globant.company"),
      role: t("resume.experience.globant.role"),
      period: t("resume.experience.globant.period"),
      achievements: [
        t("resume.experience.globant.achievement1"),
        t("resume.experience.globant.achievement2"),
      ],
    },
  ];

  return (
    <section id="resume-experience" className={styles.section}>
      <div className={`section-inner ${styles.inner}`}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">{t("resume.experience.title")}</span>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.company}>{exp.company}</span>
                <span className={styles.meta}>
                  {exp.role} · {exp.period}
                </span>
              </div>
              <ul className={styles.achievements}>
                {exp.achievements.map((ach, j) => (
                  <li key={j} className={styles.achievement}>
                    {ach}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
