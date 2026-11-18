"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./IntakeForm.module.css";

export function IntakeIntro() {
  const { t } = useLanguage();
  return (
    <>
      <p className={styles.eyebrow}>{t("intake.eyebrow")}</p>
      <h1 className={styles.title}>{t("intake.title")}</h1>
      <p className={styles.lead}>{t("intake.lead")}</p>
    </>
  );
}
