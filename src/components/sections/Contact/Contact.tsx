"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Contact.module.css";

type FormState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<FormState>("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    // Placeholder: no backend
    await new Promise((r) => setTimeout(r, 900));
    setFormState("success");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className="section-inner">
        <div className={styles.grid}>
          {/* Left: headline + meta */}
          <div className={styles.left}>
            <p className="eyebrow">{t("contact.eyebrow")}</p>
            <h2 id="contact-title" className={styles.headline}>
              {t("contact.headline")}
            </h2>
            <p className={styles.sub}>{t("contact.subheadline")}</p>

            <div className={styles.meta}>
              <a
                href={`mailto:${t("contact.email")}`}
                className={styles.emailLink}
                aria-label={`Enviar email a ${t("contact.email")}`}
              >
                {t("contact.email")}
              </a>

              <a
                href={t("contact.whatsapp.url")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              >
                {t("contact.whatsapp.label")}
              </a>

              <div className={styles.socials}>
                <a
                  href="https://www.instagram.com/gemm.apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {t("contact.social.instagram")}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/gemm-apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {t("contact.social.linkedin")}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className={styles.right}>
            {formState === "success" ? (
              <div className={styles.successMsg} role="status">
                <span className={styles.successIcon} aria-hidden="true">✓</span>
                <p>{t("contact.form.success")}</p>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulario de contacto"
              >
                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>
                    {t("contact.form.name")}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder={t("contact.form.name")}
                    value={values.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    disabled={formState === "sending"}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>
                    {t("contact.form.email")}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder={t("contact.form.email")}
                    value={values.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    disabled={formState === "sending"}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder={t("contact.form.message")}
                    value={values.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={formState === "sending"}
                  />
                </div>

                {formState === "error" && (
                  <p className={styles.errorMsg} role="alert">
                    {t("contact.form.error")}
                  </p>
                )}

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={formState === "sending"}
                >
                  {formState === "sending"
                    ? t("contact.form.sending")
                    : t("contact.form.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className="section-inner">
          <div className={styles.footerInner}>
            <span className={styles.footerBrand}>gemm-apps</span>
            <span className={styles.footerSep} aria-hidden="true">·</span>
            <span className={styles.footerStudio}>{t("footer.studio")}</span>
            <span className={styles.footerRights}>
              © {new Date().getFullYear()} {t("footer.rights")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
