import { NextRequest, NextResponse } from "next/server";

const rateMap = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 3;
const WINDOW = 60 * 60 * 1000; // 1 hora

function clientIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

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

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Bad request" }, { status: 400 });

  const { name, email, message, website } = body as Record<string, string>;

  // Honeypot: bots fill this, humans don't
  if (website) return NextResponse.json({ ok: true });

  if (rateLimited(clientIp(req))) {
    return NextResponse.json(
      { error: "Demasiados intentos. Intentá de nuevo en una hora." },
      { status: 429 }
    );
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Campos requeridos." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not set");
    return NextResponse.json({ error: "Error de configuración." }, { status: 500 });
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
      reply_to: email.trim(),
      subject: `Contacto: ${name.trim()}`,
      text: `Nombre: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
    return NextResponse.json({ error: "No se pudo enviar. Intentá de nuevo." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
