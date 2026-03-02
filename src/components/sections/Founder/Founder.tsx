"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import styles from "./Founder.module.css";

export function Founder() {
  const { t } = useLanguage();

  return (
    <section
      id="founder"
      className={styles.section}
      aria-labelledby="founder-title"
    >
      <div className="section-inner">
        <div className={styles.inner}>
          <p className="eyebrow">{t("founder.eyebrow")}</p>

          <div className={styles.content}>
            {/* Avatar placeholder */}
            <div className={styles.avatar} aria-hidden="true">
              {/* <span className={styles.avatarInitials}>PR</span> */}
              <Image src="/assets/founder.jpg" alt="" width={400} height={400} className=""/>
            </div>

            <div className={styles.bio}>
              <h2 id="founder-title" className={styles.title}>
                {t("founder.title")}
              </h2>
              <p className={styles.role}>{t("founder.role")}</p>
              <div className={styles.bioText}>
                <p className={styles.bioStrong}>{t("founder.bio1")}</p>
                <p>{t("founder.bio2")}</p>
                <p>{t("founder.bio3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
