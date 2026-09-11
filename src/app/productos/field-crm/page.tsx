import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import s from "@/components/ProductPage/ProductPage.module.css";

export const metadata: Metadata = {
  title: "Field CRM — CRM para equipos de ventas en campo | gemm-apps",
  description:
    "Reemplazá el caos de WhatsApp y Excel con un CRM simple para vendedores en terreno. Sabés dónde está tu equipo, qué venden y qué viene.",
  alternates: {
    canonical: "https://gemm-apps.com/productos/field-crm",
  },
  openGraph: {
    title: "Field CRM — CRM para equipos de ventas en campo | gemm-apps",
    description:
      "Reemplazá el caos de WhatsApp y Excel con un CRM simple para vendedores en terreno. Sabés dónde está tu equipo, qué venden y qué viene.",
    url: "https://gemm-apps.com/productos/field-crm",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Field CRM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "99",
      priceCurrency: "USD",
      priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
    },
    {
      "@type": "Offer",
      name: "Team",
      price: "179",
      priceCurrency: "USD",
      priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
    },
  ],
  description:
    "CRM móvil para equipos de ventas en terreno. Seguimiento de visitas, clientes y resultados en tiempo real.",
  provider: { "@type": "Organization", name: "gemm-apps", url: "https://gemm-apps.com" },
};

const PROBLEMS = [
  {
    title: '"Lo mandé por WhatsApp"',
    body: "Visitas, cotizaciones, reclamos, novedades — todo mezclado en el mismo hilo. Imposible rastrear qué pasó con qué cliente.",
  },
  {
    title: "El Excel que nadie actualiza",
    body: "Versiones distintas en cinco celulares distintos. Datos duplicados, columnas que no encajan, y ninguna foto del cliente.",
  },
  {
    title: "¿Dónde está el equipo?",
    body: "Sin visibilidad real de cuántas visitas hizo cada vendedor, qué pasó en cada una, o si llegaron adonde dijeron que iban.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Onboarding en horas",
    body: "Cargás tu equipo, tus clientes y tus zonas. Nuestro equipo te acompaña. Sin migraciones complejas ni integraciones que demoran meses.",
  },
  {
    num: "02",
    title: "El vendedor registra en el campo",
    body: "Visita, fotografía, nota o pedido — en segundos desde el celular. Sin fricción, sin papeles, sin 'después te mando el resumen'.",
  },
  {
    num: "03",
    title: "Vos ves todo en tiempo real",
    body: "Mapa de actividad, resumen de visitas, clientes sin visitar. La información está cuando la necesitás, no al final del día.",
  },
  {
    num: "04",
    title: "Seguimiento del equipo",
    body: "Alertas de clientes sin visitar, tareas vencidas y métricas de performance. El equipo sabe qué hacer. Vos sabés cómo lo están haciendo.",
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
            <p className={s.eyebrow}>Field CRM · gemm-apps</p>
            <h1 className={s.title}>Tu equipo en el campo. Vos, en control.</h1>
            <p className={s.subtitle}>
              Reemplazá el caos de WhatsApp y Excel con un CRM simple para equipos de ventas en terreno. Sabés dónde está tu equipo, qué están vendiendo, y qué viene.
            </p>
            <div className={s.heroCtas}>
              <a href="/#contact" className={s.btnPrimary}>
                Agendá una demo →
              </a>
              <a href="#como-funciona" className={s.btnSecondary}>
                Ver cómo funciona
              </a>
            </div>
            <div className={s.trustList}>
              {[
                "Implementación en días, no meses",
                "Sin contratos anuales",
                "Precio especial para fundadores",
              ].map((t) => (
                <span key={t} className={s.trustItem}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* El problema */}
        <section className={s.section}>
          <div className={s.sectionInner}>
            <div className={s.sectionHead}>
              <p className={s.sectionEyebrow}>El problema</p>
              <h2 className={s.sectionTitle}>Así se gestiona el equipo de ventas hoy</h2>
              <p className={s.sectionLead}>
                Si sos dueño o gerente de ventas, sabés de qué estamos hablando. El sistema que &ldquo;funciona&rdquo; es en realidad un castillo de naipes que depende de que nadie se enferme, se vaya, o simplemente se olvide de mandar el Excel.
              </p>
            </div>
            <div className={s.problemGrid}>
              {PROBLEMS.map((p) => (
                <div key={p.title} className={s.problemCard}>
                  <h3 className={s.problemTitle}>{p.title}</h3>
                  <p className={s.problemBody}>{p.body}</p>
                </div>
              ))}
            </div>
            <blockquote className={s.quote}>
              &ldquo;Tengo diez vendedores en la calle y no sé qué está pasando hasta que me llaman. Para entonces, <strong>ya perdimos la venta.</strong>&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className={s.section}>
          <div className={s.sectionInner}>
            <div className={s.sectionHead}>
              <p className={s.sectionEyebrow}>Cómo funciona</p>
              <h2 className={s.sectionTitle}>Simple desde el primer día</h2>
              <p className={s.sectionLead}>
                No hay semanas de capacitación ni consultores. En días tu equipo ya está usando Field CRM sin fricciones.
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

        {/* Precio */}
        <section className={s.section}>
          <div className={s.sectionInner}>
            <div className={s.sectionHead}>
              <p className={s.sectionEyebrow}>Precio</p>
              <h2 className={s.sectionTitle}>Sin letra chica</h2>
              <p className={s.sectionLead}>
                Precios en dólares, factura en Argentina. Sin contrato anual. Cancelás cuando querés.
              </p>
            </div>
            <div className={s.pricingGrid}>
              <div className={s.planCard}>
                <p className={s.planName}>Starter</p>
                <div className={s.planPrice}>
                  <span className={s.planCurrency}>USD</span>
                  <span className={s.planAmount}>99</span>
                  <span className={s.planPeriod}>/mes</span>
                </div>
                <p className={s.planSetup}>+ costo único de setup</p>
                <div className={s.planDivider} />
                <ul className={s.planFeatureList}>
                  {[
                    "Hasta 10 vendedores",
                    "Registro de visitas y clientes",
                    "Mapa de actividad en tiempo real",
                    "Dashboard para el manager",
                    "Soporte por WhatsApp",
                  ].map((f) => (
                    <li key={f} className={s.planFeature}>{f}</li>
                  ))}
                </ul>
                <a href="/#contact" className={s.planCta}>Agendá una demo →</a>
              </div>

              <div className={s.planCard}>
                <div className={s.planBadge}>Más elegido</div>
                <p className={s.planName}>Team</p>
                <div className={s.planPrice}>
                  <span className={s.planCurrency}>USD</span>
                  <span className={s.planAmount}>179</span>
                  <span className={s.planPeriod}>/mes</span>
                </div>
                <p className={s.planSetup}>+ costo único de setup</p>
                <div className={s.planDivider} />
                <ul className={s.planFeatureList}>
                  {[
                    "Vendedores ilimitados",
                    "Todo lo del plan Starter",
                    "Gestión de rutas y zonas",
                    "Reportes y métricas avanzadas",
                    "Integraciones (WhatsApp, email)",
                    "Soporte prioritario + onboarding",
                  ].map((f) => (
                    <li key={f} className={s.planFeature}>{f}</li>
                  ))}
                </ul>
                <a href="/#contact" className={s.planCta}>Agendá una demo →</a>
              </div>
            </div>
            <div className={s.foundingNote}>
              ⭐ <strong>Precio fundador disponible para los primeros 3 clientes.</strong> Si estás leyendo esto, probablemente todavía llegás. Hablemos.
            </div>
          </div>
        </section>

        {/* CTA final */}
        <div className={s.cta}>
          <div className={s.ctaInner}>
            <p className={s.ctaText}>¿Tu equipo todavía reporta por WhatsApp?</p>
            <a href="/#contact" className={s.btnPrimary}>
              Agendá una demo →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
