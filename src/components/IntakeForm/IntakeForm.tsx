"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  BUDGETS,
  EMPTY_VALUES,
  FIELDS,
  SOURCES,
  TIMELINES,
  VALIDATIONS,
  normalize,
  validate,
  type IntakeErrors,
  type IntakeField,
} from "./intakeValidation";
import styles from "./IntakeForm.module.css";

type FormState = "idle" | "sending" | "success" | "error" | "rate_limit";

const OPTIONAL: IntakeField[] = ["website", "phone", "callTime"];

export function IntakeForm() {
  const { t, currentLang } = useLanguage();
  const [values, setValues] = useState(EMPTY_VALUES);
  const [fax, setFax] = useState("");
  const [errors, setErrors] = useState<IntakeErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const sending = formState === "sending";
  const hasErrors = Object.keys(errors).length > 0;

  useEffect(() => {
    if (formState === "success") successRef.current?.focus();
  }, [formState]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const field = e.target.name as IntakeField;
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors(({ [field]: _removed, ...rest }) => rest);
  };

  const showErrors = (found: IntakeErrors) => {
    setErrors(found);
    const first = FIELDS.find((f) => found[f]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const clean = normalize(values);
    const found = validate(clean);
    if (Object.keys(found).length > 0) {
      setFormState("idle");
      showErrors(found);
      return;
    }

    setFormState("sending");
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...clean, fax, lang: currentLang }),
      });

      if (res.ok) return setFormState("success");
      if (res.status === 429) return setFormState("rate_limit");

      const data = await res.json().catch(() => null);
      if (res.status === 400 && data?.fields) {
        setFormState("idle");
        showErrors(data.fields as IntakeErrors);
        return;
      }
      setFormState("error");
    } catch {
      setFormState("error");
    }
  };

  const fieldProps = (name: IntakeField) => ({
    id: `intake-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    disabled: sending,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `intake-${name}-error` : undefined,
  });

  const renderField = (name: IntakeField, control: React.ReactNode) => (
    <div className={styles.field}>
      <label htmlFor={`intake-${name}`} className={styles.label}>
        {t(`intake.fields.${name}`)}
        {OPTIONAL.includes(name) && (
          <span className={styles.optional}> {t("intake.optional")}</span>
        )}
      </label>
      {control}
      {errors[name] && (
        <p id={`intake-${name}-error`} className={styles.fieldError}>
          {t(`intake.errors.${errors[name]}`)}
        </p>
      )}
    </div>
  );

  const renderSelect = (name: IntakeField, options: readonly string[]) =>
    renderField(
      name,
      <select {...fieldProps(name)} className={`${styles.input} ${styles.select}`}>
        <option value="" disabled>
          {t("intake.selectPlaceholder")}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {t(`intake.options.${name}.${o}`)}
          </option>
        ))}
      </select>
    );

  if (formState === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className={styles.success}>
        <span className={styles.successIcon} aria-hidden="true">✓</span>
        <h2 className={styles.successTitle}>{t("intake.success.title")}</h2>
        <p>{t("intake.success.body")}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.honeypot} aria-hidden="true">
        <input
          name="fax"
          type="text"
          value={fax}
          onChange={(e) => setFax(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <fieldset className={styles.group}>
        <legend className={styles.legend}>{t("intake.groups.you")}</legend>
        {renderField(
          "fullName",
          <input {...fieldProps("fullName")} type="text" className={styles.input} autoComplete="name" />
        )}
        {renderField(
          "role",
          <input
            {...fieldProps("role")}
            type="text"
            className={styles.input}
            autoComplete="organization-title"
            placeholder={t("intake.placeholders.role")}
          />
        )}
        {renderField(
          "company",
          <input {...fieldProps("company")} type="text" className={styles.input} autoComplete="organization" />
        )}
        {renderField(
          "website",
          <input
            {...fieldProps("website")}
            type="text"
            inputMode="url"
            autoCapitalize="none"
            className={styles.input}
            placeholder={t("intake.placeholders.website")}
          />
        )}
        {renderSelect("source", SOURCES)}
        {values.source === "other" &&
          renderField(
            "sourceOther",
            <input {...fieldProps("sourceOther")} type="text" className={styles.input} />
          )}
      </fieldset>

      <fieldset className={styles.group}>
        <legend className={styles.legend}>{t("intake.groups.project")}</legend>
        {renderField(
          "description",
          <textarea
            {...fieldProps("description")}
            rows={5}
            className={`${styles.input} ${styles.textarea}`}
            placeholder={t("intake.placeholders.description")}
          />
        )}
        {renderSelect("budget", BUDGETS)}
        {renderSelect("timeline", TIMELINES)}
        {renderSelect("validated", VALIDATIONS)}
      </fieldset>

      <fieldset className={styles.group}>
        <legend className={styles.legend}>{t("intake.groups.contact")}</legend>
        {renderField(
          "email",
          <input
            {...fieldProps("email")}
            type="email"
            inputMode="email"
            autoCapitalize="none"
            className={styles.input}
            autoComplete="email"
          />
        )}
        {renderField(
          "phone",
          <input {...fieldProps("phone")} type="tel" className={styles.input} autoComplete="tel" />
        )}
        {renderField(
          "callTime",
          <input
            {...fieldProps("callTime")}
            type="text"
            className={styles.input}
            placeholder={t("intake.placeholders.callTime")}
          />
        )}
      </fieldset>

      <div role="alert" className={styles.formMessage}>
        {hasErrors && <p>{t("intake.errors.summary")}</p>}
        {formState === "error" && <p>{t("intake.errors.server")}</p>}
        {formState === "rate_limit" && <p>{t("intake.errors.rateLimit")}</p>}
      </div>

      <button type="submit" className={styles.submit} disabled={sending}>
        {sending ? t("intake.sending") : t("intake.submit")}
      </button>
    </form>
  );
}
