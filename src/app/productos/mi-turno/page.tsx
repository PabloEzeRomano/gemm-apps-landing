import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import styles from "@/components/ClusterPage/ClusterPage.module.css";

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
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      billingDuration: "P1M",
    },
  },
  description:
    "Sistema de turnos online para negocios de servicios. Tus clientes reservan desde tu link, vos gestionás todo desde el panel.",
  provider: {
    "@type": "Organization",
    name: "gemm-apps",
    url: "https://gemm-apps.com",
  },
};

const FEATURES = [
  {
    q: "¿Cómo funciona la agenda online?",
    a: "Tus clientes entran a tu link, eligen el servicio, ven los slots disponibles y reservan en segundos. Los turnos ocupados desaparecen solos del calendario. Vos no intervenís — el sistema calcula disponibilidad según la duración de cada servicio y los turnos ya tomados.",
  },
  {
    q: "¿Qué incluye la gestión de turnos?",
    a: "Vista semanal y diaria, ficha de cliente con un click, posibilidad de completar, cancelar o crear turnos manuales. Filtros por estado (confirmado, completado, cancelado) y rango de fechas.",
  },
  {
    q: "¿Manda recordatorios automáticos?",
    a: "Sí. WhatsApp al cliente antes del turno con botones para cancelar o reprogramar sin pasar por vos. Menos ausencias, menos llamadas perdidas.",
  },
  {
    q: "¿Tengo una página propia?",
    a: "Una URL única del tipo miturno.gemm-apps.com/tu-local. Sin logos de terceros, sin distracciones. Solo el nombre de tu local, tus servicios y el botón de reserva. Se puede compartir por WhatsApp o poner en el perfil de Instagram.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "$30.000 por mes, precio fijo. Sin comisiones por turno, sin costos ocultos. Si dejás de pagar, vos no ves la agenda — pero tus clientes siguen pudiendo reservar para no cortar el vínculo. Soporte por WhatsApp incluido.",
  },
  {
    q: "¿Para qué tipo de negocio es Mi Turno?",
    a: "Para cualquier negocio que coordine turnos: peluquerías, barberías, centros de estética, psicólogos, nutricionistas, talleres mecánicos, estudios de tatuajes. Si hoy tomás turnos por WhatsApp y perdés tiempo respondiendo, Mi Turno lo resuelve.",
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
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Mi Turno · gemm-apps</p>
            <h1 className={styles.title}>
              Tu agenda online. Tus clientes se agendan solos.
            </h1>
            <p className={styles.subtitle}>
              Para negocios que coordinan turnos por WhatsApp. Tus clientes reservan desde tu link, vos recuperás horas para atender. Sin comisiones, sin contratos.
            </p>
          </div>
        </div>
        <section className={styles.faqSection}>
          <div className={styles.faqInner}>
            {FEATURES.map(({ q, a }) => (
              <details key={q} className={styles.item}>
                <summary className={styles.question}>{q}</summary>
                <p className={styles.answer}>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <div className={styles.cta}>
          <div className={styles.ctaInner}>
            <p className={styles.ctaText}>
              Probalo 14 días gratis — sin tarjeta.
            </p>
            <a
              href="https://miturno.gemm-apps.com/signup"
              className={styles.ctaButton}
            >
              Crear mi cuenta →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
