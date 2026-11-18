import { NextRequest, NextResponse } from "next/server";
import es from "@/i18n/es.json";
import { normalize, validate, type IntakeValues } from "@/components/IntakeForm/intakeValidation";

const rateMap = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 5;
const WINDOW = 60 * 60 * 1000;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW });
    return false;
  }
  if (entry.count >= LIMIT) return true;
  entry.count++;
  return false;
}

function emailBody(v: IntakeValues, lang: string): string {
  const opts = es.intake.options;
  const source =
    v.source === "other"
      ? `Otro: ${v.sourceOther}`
      : opts.source[v.source as keyof typeof opts.source];

  const rows: [string, string][] = [
    ["Nombre", v.fullName],
    ["Rol", v.role],
    ["Empresa o proyecto", v.company],
    ["Web o redes", v.website || "-"],
    ["Cómo nos conoció", source],
    ["Inversión estimada", opts.budget[v.budget as keyof typeof opts.budget]],
    ["Plazo de lanzamiento", opts.timeline[v.timeline as keyof typeof opts.timeline]],
    ["Idea validada", opts.validated[v.validated as keyof typeof opts.validated]],
    ["Email", v.email],
    ["WhatsApp o teléfono", v.phone || "-"],
    ["Horario para llamada", v.callTime || "-"],
    ["Idioma del formulario", lang],
  ];

  return `${rows.map(([k, val]) => `${k}: ${val}`).join("\n")}\n\nProyecto:\n${v.description}`;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  // Honeypot: bots get a fake success so they don't retry.
  if (typeof body.fax === "string" && body.fax) return NextResponse.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) return NextResponse.json({ error: "rate_limit" }, { status: 429 });

  const values = normalize(body);
  const fields = validate(values);
  if (Object.keys(fields).length > 0) {
    return NextResponse.json({ error: "validation", fields }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not set");
    return NextResponse.json({ error: "server" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "gemm-apps <noreply@send.gemm-apps.com>",
      to: ["info@gemm-apps.com"],
      reply_to: values.email,
      subject: `Relevamiento: ${values.fullName} (${values.company})`,
      text: emailBody(values, body.lang === "en" ? "en" : "es"),
    }),
  });

  if (!res.ok) {
    console.error("Resend error:", await res.text());
    return NextResponse.json({ error: "server" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
