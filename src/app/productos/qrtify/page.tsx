import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import styles from "@/components/ClusterPage/ClusterPage.module.css";

export const metadata: Metadata = {
  title: "QRtify — menú digital y comanda para restaurantes | gemm-apps",
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
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        billingDuration: "P1M",
      },
    },
    {
      "@type": "Offer",
      name: "Plan Comanda",
      price: "30000",
      priceCurrency: "ARS",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        billingDuration: "P1M",
      },
    },
  ],
  description:
    "Menú digital QR con sistema de comanda integrado para restaurantes, bares y cafeterías. Mesa, mozo y cocina sincronizados.",
  provider: {
    "@type": "Organization",
    name: "gemm-apps",
    url: "https://gemm-apps.com",
  },
};

const FEATURES = [
  {
    q: "¿El cliente tiene que bajarse una app?",
    a: "No. Solo escanea el QR de la mesa y ve el menú en el navegador. Sin instalar nada, sin crear cuenta, sin fricción. El cliente ve los productos, agrega al pedido y listo.",
  },
  {
    q: "¿Cómo se actualizan los precios y la disponibilidad?",
    a: "Desde el panel de administración, en tiempo real. Si terminaste las milanesas del día, las marcás como no disponibles y desaparecen del menú de los clientes al instante. Sin imprimir nada, sin pizarras.",
  },
  {
    q: "¿Qué es la comanda integrada?",
    a: "El plan Comanda conecta el menú del cliente con la cocina: el pedido viaja directo desde la mesa al panel de cocina. El mozo lo acepta desde su pantalla, la cocina sabe qué preparar, y el cliente no necesita repetirle nada a nadie. Mesa, mozo y cocina sincronizados.",
  },
  {
    q: "¿Qué incluye el panel de administración?",
    a: "Gestión de productos, categorías y precios. Mesas activas y estado de pedidos. Historial. Todo desde el mismo lugar, sin hojas de cálculo.",
  },
  {
    q: "¿Cuáles son los planes y precios?",
    a: "Plan Menú: $15.000/mes — carta digital QR para todas las mesas, actualizaciones ilimitadas, tu logo, link compartible por WhatsApp y soporte. Plan Comanda: $30.000/mes — incluye todo lo anterior más el sistema de comanda integrado con pedidos a cocina en tiempo real, gestión de estado de mesas e historial de pedidos. 14 días de prueba gratis, sin tarjeta.",
  },
  {
    q: "¿Para qué tipo de local es QRtify?",
    a: "Para restaurantes, bares, cafeterías, parrillas, cervecerías o cualquier local gastronómico que quiera reemplazar la carta impresa y eliminar el papel en el proceso de pedido. Funciona en cualquier dispositivo con cámara.",
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
            <p className={styles.eyebrow}>QRtify · gemm-apps</p>
            <h1 className={styles.title}>
              El menú que habla con tu cocina.
            </h1>
            <p className={styles.subtitle}>
              Mesa, mozo y cocina sincronizados. Sin papel, sin errores, sin comisiones. Precio fijo mensual para restaurantes, bares y cafeterías.
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
              href="https://qrtify.gemm-apps.com/signup"
              className={styles.ctaButton}
            >
              Empezar gratis →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
