export const SOURCES = ["googleMaps", "referral", "linkedin", "social", "other"] as const;
export const BUDGETS = ["under5k", "from5to15k", "from15to30k", "over30k", "onCall"] as const;
export const TIMELINES = ["under2m", "from2to4m", "from4to6m", "over6m", "noDate"] as const;
export const VALIDATIONS = ["users", "partners", "notYet"] as const;

export const FIELDS = [
  "fullName",
  "role",
  "company",
  "website",
  "source",
  "sourceOther",
  "description",
  "budget",
  "timeline",
  "validated",
  "email",
  "phone",
  "callTime",
] as const;

export type IntakeField = (typeof FIELDS)[number];
export type IntakeValues = Record<IntakeField, string>;
export type IntakeErrorCode = "required" | "invalidEmail" | "invalidOption" | "tooLong";
export type IntakeErrors = Partial<Record<IntakeField, IntakeErrorCode>>;

export const EMPTY_VALUES = Object.fromEntries(FIELDS.map((f) => [f, ""])) as IntakeValues;

const MAX_TEXT = 200;
const MAX_DESCRIPTION = 3000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const REQUIRED: IntakeField[] = [
  "fullName",
  "role",
  "company",
  "source",
  "description",
  "budget",
  "timeline",
  "validated",
  "email",
];

const OPTIONS: Partial<Record<IntakeField, readonly string[]>> = {
  source: SOURCES,
  budget: BUDGETS,
  timeline: TIMELINES,
  validated: VALIDATIONS,
};

export function normalize(input: unknown): IntakeValues {
  const raw = (input ?? {}) as Record<string, unknown>;
  const values = { ...EMPTY_VALUES };
  for (const field of FIELDS) {
    const v = raw[field];
    values[field] = typeof v === "string" ? v.trim() : "";
  }
  if (values.source !== "other") values.sourceOther = "";
  return values;
}

export function validate(values: IntakeValues): IntakeErrors {
  const errors: IntakeErrors = {};

  for (const field of FIELDS) {
    const value = values[field];
    const required =
      REQUIRED.includes(field) || (field === "sourceOther" && values.source === "other");

    if (!value) {
      if (required) errors[field] = "required";
      continue;
    }

    const options = OPTIONS[field];
    if (options) {
      if (!options.includes(value)) errors[field] = "invalidOption";
      continue;
    }

    const max = field === "description" ? MAX_DESCRIPTION : MAX_TEXT;
    if (value.length > max) errors[field] = "tooLong";
    else if (field === "email" && !EMAIL_RE.test(value)) errors[field] = "invalidEmail";
  }

  return errors;
}
