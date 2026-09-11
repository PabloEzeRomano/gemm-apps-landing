import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import s from "@/components/ProductPage/ProductPage.module.css";

export const metadata: Metadata = {
  title: "Mi Turno — sistema de turnos online para negocios | gemm-apps",
  description:
    "Tus clientes se agendan solos desde tu link. Sin WhatsApp, sin comisiones, sin apps que bajar. $30.000/mes precio fijo.",
  alternates: {
    canonical: "https://gemm-apps.com/productos/mi-turno",
  },
  openGraph: {
    title: "Mi Turno — sistema de turnos online para negocios | gemm-apps",
    description:
      "Tus clientes se agendan solos desde tu link. Sin WhatsApp, sin comisiones, sin apps que bajar. $30.000/mes precio fijo.",
    url: "https://gemm-apps.com/productos/mi-turno",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Mi Turno",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "30000",
    priceCurrency: "ARS",
    priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
  },
  description:
    "Sistema de turnos online para negocios de servicios. Tus clientes reservan desde tu link, vos gestionás todo desde el panel.",
  provider: { "@type": "Organization", name: "gemm-apps", url: "https://gemm-apps.com" },
};

const STEPS = [
  {
    num: "01 · REGISTRO",
    title: "Creá tu cuenta",
    body: "Email, contraseña, nombre del local. Listo. Sin tarjeta de crédito ni planilla larga.",
  },
  {
    num: "02 · SETUP",
    title: "Configurá tus servicios",
    body: "Cargás precios, duración y horarios. Bloqueás los días que estás de vacaciones. Cambios en vivo, cuando quieras.",
  },
  {
    num: "03 · COMPARTÍ",
    title: "Mandá tu link",
    body: "Tus clientes reservan solos. Vos ves todo desde la agenda. Sin idas y vueltas por WhatsApp.",
  },
];

const FEATURES = [
  {
    title: "Agenda online 24/7",
    body: "Tus clientes reservan desde el celular mientras vos atendés. Slots calculados según la duración del servicio y los turnos ya tomados.",
  },
  {
    title: "Gestión de turnos",
    body: "Vista semanal y diaria, ficha de cliente con un click. Completá, cancelá o creá turnos manuales. Filtros por estado y rango de fechas.",
  },
  {
    title: "Recordatorios automáticos",
    body: "WhatsApp al cliente antes del turno, con botones para cancelar o reprogramar sin pasar por vos. Menos ausencias, menos llamadas.",
  },
  {
    title: "Tu página propia",
    body: "Una URL única, fácil de dictar. Sin logos de terceros, sin distracciones. Solo el nombre de tu local y los servicios que ofrecés.",
  },
];

const FAQS = [
  {
    q: "¿Mis clientes tienen que bajarse una app?",
    a: "No. Abren tu link y reservan en 30 segundos desde el navegador. Funciona en cualquier celular.",
  },
  {
    q: "¿Puedo bloquear días de vacaciones?",
    a: "Sí. Desde Disponibilidad cargás fechas bloqueadas con un motivo opcional. Esos días no aparecen disponibles para reservar.",
  },
  {
    q: "¿Qué pasa si un cliente no aparece?",
    a: "Lo marcás como cancelado desde el turno y queda registrado. Los recordatorios automáticos por WhatsApp bajan fuerte las ausencias.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "$30.000 por mes, precio fijo. Sin contrato mínimo, sin cargos por turno ni por cliente. Soporte por WhatsApp incluido.",
  },
  {
    q: "¿Y si dejo de pagar?",
    a: "Tu agenda se bloquea para vos, pero tu link público sigue activo para no perder reservas. Cuando reactivás, todo vuelve a estar donde lo dejaste.",
  },
  {
    q: "¿Para qué tipo de negocio es Mi Turno?",
    a: "Para cualquier negocio que coordine turnos: peluquerías, barberías, centros de estética, psicólogos, nutricionistas, talleres. Si hoy tomás turnos por WhatsApp y perdés tiempo respondiendo, Mi Turno lo resuelve.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Hero */}
        <div className={s.hero}>
          <div className={s.heroInner}>
            <p className={s.eyebrow}>Mi Turno · gemm-apps</p>
            <h1 className={s.title}>Tu agenda online. Tus clientes se agendan solos.</h1>
            <p className={s.subtitle}>
              Para negocios que coordinan turnos por WhatsApp. Tus clientes reservan desde tu link, vos recuperás horas para atender. Sin comisiones, sin contratos.
            </p>
            <div className={s.heroCtas}>
              <a href="https://miturno.gemm-apps.com/signup" className={s.btnPrimary}>
                Crear mi cuenta gratis →
              </a>
              <a href="#como-funciona" className={s.btnSecondary}>
                Ver cómo funciona
              </a>
            </div>
          </div>
        </div>

        {/* Cómo funciona */}
        <section id="como-funciona" className={s.section}>
          <div className={s.sectionInner}>
            <div className={s.sectionHead}>
              <p className={s.sectionEyebrow}>Cómo funciona</p>
              <h2 className={s.sectionTitle}>Tres pasos, y empezás a recibir reservas.</h2>
              <p className={s.sectionLead}>
                Configurar Mi Turno toma menos que atender al primer cliente del día. Tu link queda listo y lo compartís donde quieras: Instagram, WhatsApp, o impreso en el local.
              </p>
            </div>
            <div className={s.steps}>
              {STEPS.map((step) => (
                <div key={step.num} className={s.step}>
                  <p className={s.stepNum}>{step.num}</p>
                  <h3 className={s.stepTitle}>{step.title}</h3>
                  <p className={s.stepBody}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Funciones */}
        <section className={s.section}>
          <div className={s.sectionInner}>
            <div className={s.sectionHead}>
              <h2 className={s.sectionTitle}>Lo necesario, nada que sobre.</h2>
              <p className={s.sectionLead}>
                Construido a partir de lo que te falta cuando tomás turnos por WhatsApp: una sola agenda viva, tu propia página, recordatorios que no se olvidan, y total control de tu calendario.
              </p>
            </div>
            <div className={s.featGrid}>
              {FEATURES.map((f, i) => (
                <div key={f.title} className={s.featCard}>
                  <p className={s.featNum}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 className={s.featTitle}>{f.title}</h3>
                  <p className={s.featBody}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precio */}
        <section className={s.section}>
          <div className={s.sectionInner}>
            <div className={s.sectionHead}>
              <p className={s.sectionEyebrow}>Precio</p>
              <h2 className={s.sectionTitle}>Simple, transparente, sin sorpresas.</h2>
              <p className={s.sectionLead}>
                Sin contratos largos ni costos por turno. Un precio fijo mensual para que puedas enfocarte en lo tuyo.
              </p>
            </div>
            <div className={s.pricingGrid} style={{ maxWidth: "400px" }}>
              <div className={s.planCard}>
                <p className={s.planName}>Plan único</p>
                <div className={s.planPrice}>
                  <span className={s.planCurrency}>$</span>
                  <span className={s.planAmount}>30.000</span>
                  <span className={s.planPeriod}>/mes</span>
                </div>
                <p className={s.planDesc}>Precio fijo en pesos. Sin comisiones, sin costos ocultos.</p>
                <div className={s.planDivider} />
                <ul className={s.planFeatureList}>
                  {[
                    "Agenda online 24/7",
                    "Gestión de turnos y clientes",
                    "Recordatorios por WhatsApp",
                    "Tu página propia con URL única",
                    "Soporte por WhatsApp",
                    "0% comisión por turno",
                  ].map((f) => (
                    <li key={f} className={s.planFeature}>{f}</li>
                  ))}
                </ul>
                <a href="https://miturno.gemm-apps.com/signup" className={s.planCta}>
                  Crear mi cuenta →
                </a>
                <p className={s.planNote}>14 días gratis · Sin tarjeta</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div className={s.faqSection}>
          <div className={s.faqInner}>
            <div className={s.faqHead}>
              <h2 className={s.sectionTitle}>Lo que siempre nos preguntan.</h2>
            </div>
            <div className={s.faqItems}>
              {FAQS.map(({ q, a }) => (
                <details key={q} className={s.faqItem}>
                  <summary className={s.faqQ}>{q}</summary>
                  <p className={s.faqA}>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className={s.cta}>
          <div className={s.ctaInner}>
            <p className={s.ctaText}>Probalo 14 días gratis — sin tarjeta.</p>
            <a href="https://miturno.gemm-apps.com/signup" className={s.btnPrimary}>
              Crear mi cuenta →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
