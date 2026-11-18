import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import s from "@/components/ProductPage/ProductPage.module.css";

export const metadata: Metadata = {
  title: "QRtify — menú digital y comanda para restaurantes",
  description:
    "Menú QR sin app, pedidos que llegan directo a cocina, precio fijo mensual. Para restaurantes, bares y cafeterías. 14 días gratis.",
  alternates: {
    canonical: "https://gemm-apps.com/productos/qrtify",
  },
  openGraph: {
    title: "QRtify — menú digital y comanda para restaurantes | gemm-apps",
    description:
      "Menú QR sin app, pedidos que llegan directo a cocina, precio fijo mensual. Para restaurantes, bares y cafeterías. 14 días gratis.",
    url: "https://gemm-apps.com/productos/qrtify",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "gemm-apps", item: "https://gemm-apps.com" },
    { "@type": "ListItem", position: 2, name: "Productos", item: "https://gemm-apps.com/productos" },
    { "@type": "ListItem", position: 3, name: "QRtify", item: "https://gemm-apps.com/productos/qrtify" },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "QRtify",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "Plan Menú",
      price: "15000",
      priceCurrency: "ARS",
      priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
    },
    {
      "@type": "Offer",
      name: "Plan Comanda",
      price: "30000",
      priceCurrency: "ARS",
      priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
    },
  ],
  description:
    "Menú digital QR con sistema de comanda integrado para restaurantes, bares y cafeterías. Mesa, mozo y cocina sincronizados.",
  provider: { "@type": "Organization", name: "gemm-apps", url: "https://gemm-apps.com" },
};

const STEPS = [
  {
    num: "01",
    title: "Cargá tu carta",
    body: "Subís tus productos, fotos y precios al panel. Te ayudamos a pasarla si ya tenés una.",
  },
  {
    num: "02",
    title: "El cliente escanea el QR",
    body: "Sin apps, sin registro. Escanea el QR de la mesa y ve la carta actualizada en su celu.",
  },
  {
    num: "03",
    title: "Llega a cocina",
    body: "Con el Plan Comanda, el pedido llega directo. Mesa → Mozo acepta → Cocina cocina.",
  },
];

const FEATURES = [
  {
    title: "Menú QR sin app",
    body: "El cliente solo escanea. Sin instalar nada, sin crear cuenta, sin fricción. La carta carga en el navegador.",
  },
  {
    title: "Actualizaciones en tiempo real",
    body: "Precios y disponibilidad al instante desde el panel. Si se terminó un plato, lo marcás y desaparece del menú de todos los clientes.",
  },
  {
    title: "Comanda integrada",
    body: "Mesa, mozo y cocina sincronizados. El pedido viaja desde la mesa al panel de cocina en segundos. Sin papel, sin errores.",
  },
  {
    title: "Panel de administración",
    body: "Productos, mesas y pedidos desde un mismo lugar. Sin hojas de cálculo, sin anotaciones en papel.",
  },
];

const FAQS = [
  {
    q: "¿Mis clientes necesitan descargar una app?",
    a: "No. El cliente solo escanea el QR con la cámara del celu y la carta se abre en el navegador. Sin descargas, sin registros, sin fricción.",
  },
  {
    q: "¿Puedo cambiar precios cuando quiero?",
    a: "Sí, en cualquier momento desde el celular. Los cambios se ven al instante en todos los QRs. Sin reimprimir nada.",
  },
  {
    q: "¿Cómo funciona la comanda?",
    a: "El cliente pide desde la mesa. El mozo recibe la alerta y la acepta. Automáticamente llega a la cocina. Todo en segundos, sin papel.",
  },
  {
    q: "¿Hay contrato o comisiones?",
    a: "No hay contrato ni comisiones. Precio fijo mensual, cancelás cuando querés.",
  },
  {
    q: "¿Qué pasa si no tengo buena señal?",
    a: "La carta carga rápido incluso con señal moderada. Todas las imágenes están optimizadas para que no consuman datos innecesarios.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />

        {/* Hero */}
        <div className={s.hero}>
          <div className={s.heroInner}>
            <p className={s.eyebrow}>QRtify · gemm-apps</p>
            <h1 className={s.title}>El menú que habla con tu cocina.</h1>
            <p className={s.subtitle}>
              Mesa, mozo y cocina sincronizados. Sin papel, sin errores, sin comisiones. Precio fijo mensual para restaurantes, bares y cafeterías.
            </p>
            <div className={s.heroCtas}>
              <a href="https://qrtify.gemm-apps.com/signup" className={s.btnPrimary}>
                Probalo 14 días gratis →
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
              <h2 className={s.sectionTitle}>Tres pasos. Tu local, digitalizado.</h2>
              <p className={s.sectionLead}>Sin técnicos, sin complicaciones. Empezás hoy.</p>
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
              <h2 className={s.sectionTitle}>Todo lo que tu local necesita.</h2>
              <p className={s.sectionLead}>
                Diseñado para restaurantes, bares y cafeterías que quieren ofrecer una experiencia moderna sin complicarse.
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
              <h2 className={s.sectionTitle}>Precio fijo. Sin sorpresas.</h2>
              <p className={s.sectionLead}>Sin comisiones. Sin contrato. Cancelás cuando querés.</p>
            </div>
            <div className={s.pricingGrid}>
              <div className={s.planCard}>
                <p className={s.planName}>Plan Menú</p>
                <div className={s.planPrice}>
                  <span className={s.planCurrency}>$</span>
                  <span className={s.planAmount}>15.000</span>
                  <span className={s.planPeriod}>/mes</span>
                </div>
                <p className={s.planDesc}>Carta digital QR para tu local.</p>
                <div className={s.planDivider} />
                <ul className={s.planFeatureList}>
                  {[
                    "Menú QR para cada mesa",
                    "Actualizaciones ilimitadas",
                    "Tu logo y personalización",
                    "Link compartible por WhatsApp",
                    "Panel de administración",
                    "Soporte por WhatsApp",
                  ].map((f) => (
                    <li key={f} className={s.planFeature}>{f}</li>
                  ))}
                </ul>
                <a href="https://qrtify.gemm-apps.com/signup" className={s.planCta}>
                  Empezar gratis →
                </a>
                <p className={s.planNote}>14 días gratis · Sin tarjeta</p>
              </div>

              <div className={s.planCard}>
                <div className={s.planBadge}>PRO</div>
                <p className={s.planName}>Plan Comanda</p>
                <div className={s.planPrice}>
                  <span className={s.planCurrency}>$</span>
                  <span className={s.planAmount}>30.000</span>
                  <span className={s.planPeriod}>/mes</span>
                </div>
                <p className={s.planDesc}>Plan Menú + sistema de comanda integrado.</p>
                <div className={s.planDivider} />
                <ul className={s.planFeatureList}>
                  {[
                    "Todo lo del Plan Menú",
                    "Sistema de comanda integrado",
                    "Pedidos a cocina en tiempo real",
                    "El mozo acepta desde su pantalla",
                    "Gestión de estado de mesas",
                    "Historial de pedidos",
                  ].map((f) => (
                    <li key={f} className={s.planFeature}>{f}</li>
                  ))}
                </ul>
                <a href="https://qrtify.gemm-apps.com/signup" className={s.planCta}>
                  Empezar con Comanda →
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
              <h2 className={s.sectionTitle}>Preguntas frecuentes</h2>
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
            <a href="https://qrtify.gemm-apps.com/signup" className={s.btnPrimary}>
              Empezar gratis →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
