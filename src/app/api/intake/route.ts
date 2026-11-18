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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmail(v: IntakeValues, lang: string): { text: string; html: string } {
  const opts = es.intake.options;
  const source =
    v.source === "other"
      ? `Otro: ${v.sourceOther}`
      : opts.source[v.source as keyof typeof opts.source];

  const highlights: [string, string][] = [
    ["Inversión", opts.budget[v.budget as keyof typeof opts.budget]],
    ["Plazo", opts.timeline[v.timeline as keyof typeof opts.timeline]],
    ["Idea validada", opts.validated[v.validated as keyof typeof opts.validated]],
  ];

  const details: [string, string][] = [
    ["Rol", v.role],
    ["Empresa o proyecto", v.company],
    ["Web o redes", v.website || "-"],
    ["Cómo nos conoció", source],
    ["Email", v.email],
    ["WhatsApp o teléfono", v.phone || "-"],
    ["Horario para llamada", v.callTime || "-"],
    ["Idioma del formulario", lang],
  ];

  const text = [
    `Nombre: ${v.fullName}`,
    ...[...details, ...highlights].map(([k, val]) => `${k}: ${val}`),
    "",
    "Proyecto:",
    v.description,
  ].join("\n");

  const font = "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;";
  const label = `${font}font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#8a8a8a;`;
  const phoneDigits = v.phone.replace(/\D/g, "");

  const highlightCells = highlights
    .map(
      ([k, val]) => `
        <td width="33%" valign="top" style="padding:14px 12px;background:#1c1c1c;border-top:3px solid #b50b81;">
          <div style="${label}color:#9a9a9a;">${escapeHtml(k)}</div>
          <div style="${font}font-size:15px;font-weight:700;line-height:1.35;color:#ffffff;padding-top:6px;">${escapeHtml(val)}</div>
        </td>`
    )
    .join('<td width="8" style="font-size:0;">&nbsp;</td>');

  const detailRows = details
    .map(
      ([k, val]) => `
        <tr>
          <td valign="top" width="42%" style="${label}padding:12px 12px 12px 0;border-bottom:1px solid #ececec;">${escapeHtml(k)}</td>
          <td valign="top" style="${font}font-size:15px;line-height:1.5;color:#121212;padding:12px 0;border-bottom:1px solid #ececec;">${escapeHtml(val)}</td>
        </tr>`
    )
    .join("");

  const button = (href: string, text: string, bg: string) =>
    `<a href="${escapeHtml(href)}" style="${font}display:inline-block;margin:0 8px 8px 0;padding:13px 22px;background:${bg};color:#ffffff;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;text-decoration:none;">${text}</a>`;

  const html = `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:0;background:#f2f2f2;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f2f2;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
            <tr>
              <td style="background:#121212;padding:28px 28px 24px;">
                <div style="${label}color:#b50b81;">Nuevo relevamiento</div>
                <div style="${font}font-size:26px;font-weight:700;line-height:1.2;color:#ffffff;padding-top:10px;">${escapeHtml(v.fullName)}</div>
                <div style="${font}font-size:15px;line-height:1.5;color:#a8a8a8;padding-top:4px;">${escapeHtml(v.role)} en ${escapeHtml(v.company)}</div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding-top:22px;">
                  <tr>${highlightCells}</tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background:#ffffff;padding:28px;">
                <div style="${label}">El proyecto</div>
                <div style="${font}font-size:16px;line-height:1.65;color:#121212;padding:10px 0 4px 16px;margin-top:10px;border-left:3px solid #fc691f;white-space:pre-wrap;">${escapeHtml(v.description)}</div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">${detailRows}
                </table>
                <div style="padding-top:26px;">
                  ${button(`mailto:${v.email}`, "Responder por mail", "#fc691f")}
                  ${phoneDigits.length >= 8 ? button(`https://wa.me/${phoneDigits}`, "Abrir WhatsApp", "#121212") : ""}
                </div>
              </td>
            </tr>
            <tr>
              <td style="${font}padding:16px 28px;font-size:12px;color:#8a8a8a;">Enviado desde gemm-apps.com/relevamiento</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { text, html };
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
      ...buildEmail(values, body.lang === "en" ? "en" : "es"),
    }),
  });

  if (!res.ok) {
    console.error("Resend error:", await res.text());
    return NextResponse.json({ error: "server" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
