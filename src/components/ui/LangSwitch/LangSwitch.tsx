"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./LangSwitch.module.css";

export function LangSwitch() {
  const { currentLang, setLang } = useLanguage();

  return (
    <div className={styles.switch} role="group" aria-label="Idioma / Language">
      <button
        className={`${styles.btn} ${currentLang === "es" ? styles.active : ""}`}
        onClick={() => setLang("es")}
        aria-pressed={currentLang === "es"}
        lang="es"
      >
        ES
      </button>
      <span className={styles.divider} aria-hidden="true">/</span>
      <button
        className={`${styles.btn} ${currentLang === "en" ? styles.active : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={currentLang === "en"}
        lang="en"
      >
        EN
      </button>
    </div>
  );
}
