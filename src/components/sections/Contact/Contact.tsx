"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Contact.module.css";

type FormState = "idle" | "sending" | "success" | "error" | "rate_limit";

export function Contact() {
  const { t, currentLang } = useLanguage();

  const clusterLinks = currentLang === "en"
    ? [
        { href: "/app-development-companies-argentina", label: "App development companies in Argentina" },
        { href: "/app-development-cost-argentina",      label: "How much does an app cost?" },
        { href: "/how-to-choose-software-development-company", label: "How to choose a provider" },
        { href: "/custom-app-development-argentina",    label: "Custom development" },
      ]
    : [
        { href: "/desarrollo-de-apps-en-argentina",     label: "Empresas de desarrollo en Argentina" },
        { href: "/cuanto-cuesta-una-app-en-argentina",  label: "¿Cuánto cuesta una app?" },
        { href: "/como-elegir-empresa-de-software",     label: "Cómo elegir proveedor" },
        { href: "/desarrollo-a-medida",                 label: "Desarrollo a medida" },
      ];

  const productLinks = [
    { href: "/productos/mi-turno",   label: "Mi Turno" },
    { href: "/productos/field-crm",  label: "Field CRM" },
    { href: "/productos/qrtify",     label: "QRtify" },
  ];
  const [formState, setFormState] = useState<FormState>("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "", website: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.status === 429) { setFormState("rate_limit"); return; }
      if (!res.ok) { setFormState("error"); return; }
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className="section-inner">
        <div className={styles.grid}>
          {/* Left: headline + meta */}
          <div className={styles.left}>
            <h2 id="contact-title" className={styles.headline}>
              {t("contact.headline")}
            </h2>
            <p className={styles.sub}>{t("contact.subheadline")}</p>

            <div className={styles.meta}>
              <a
                href={t("contact.whatsapp.url")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              >
                {t("contact.whatsapp.label")}
              </a>

              <a
                href={`mailto:${t("contact.email")}`}
                className={styles.emailLink}
                aria-label={`Enviar email a ${t("contact.email")}`}
              >
                {t("contact.email")}
              </a>

              <div className={styles.socials}>
                <a
                  href="https://www.instagram.com/gemmapps"
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
                {/* Honeypot — invisible for humans, bots fill it */}
                <div className={styles.honeypot} aria-hidden="true">
                  <input
                    name="website"
                    type="text"
                    value={values.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

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

                {formState === "rate_limit" && (
                  <p className={styles.errorMsg} role="alert">
                    Demasiados intentos. Intentá de nuevo en una hora.
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
          <nav className={styles.footerNav} aria-label="Recursos">
            {clusterLinks.map(({ href, label }) => (
              <a key={href} href={href} className={styles.footerNavLink}>{label}</a>
            ))}
            {productLinks.map(({ href, label }) => (
              <a key={href} href={href} className={styles.footerNavLink}>{label}</a>
            ))}
          </nav>
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
