"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle/ThemeToggle";
import { LangSwitch } from "@/components/ui/LangSwitch/LangSwitch";
import styles from "./Header.module.css";

export function Header() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const logoSrc =
    theme === "dark"
      ? "/brand/logo-horizontal-white.svg"
      : "/brand/logo-horizontal-black.svg";

  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#top" className={styles.logoLink} aria-label={t("header.logoAlt")}>
          <Image
            src={logoSrc}
            alt={t("header.logoAlt")}
            width={150}
            height={100}
            priority
            className={styles.logo}
          />
        </a>

        {/* Nav + Controls */}
        <nav className={styles.nav} aria-label="Navegación principal">
          <a href="#about" className={styles.navLink}>
            {t("about.eyebrow").replace(/^─+\s*/, "").split("·")[0].trim()}
          </a>
          <a href="#products" className={styles.navLink}>
            {t("products.eyebrow").replace(/^─+\s*/, "").split("·")[0].trim()}
          </a>
          <a href="#contact" className={styles.navLink}>
            {t("contact.eyebrow").replace(/^─+\s*/, "")}
          </a>
        </nav>

        <div className={styles.controls}>
          <LangSwitch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
