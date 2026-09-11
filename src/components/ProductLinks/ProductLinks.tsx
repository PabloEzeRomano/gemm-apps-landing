import styles from "./ProductLinks.module.css";

const PRODUCTS = [
  {
    href: "/productos/mi-turno",
    name: "Mi Turno",
    desc: "Sistema de turnos online para negocios de servicios.",
  },
  {
    href: "/productos/field-crm",
    name: "Field CRM",
    desc: "CRM para equipos de ventas en terreno.",
  },
  {
    href: "/productos/qrtify",
    name: "QRtify",
    desc: "Menú digital y comanda para locales gastronómicos.",
  },
];

export function ProductLinks() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Nuestros productos</p>
        <div className={styles.grid}>
          {PRODUCTS.map(({ href, name, desc }) => (
            <a key={href} href={href} className={styles.card}>
              <span className={styles.name}>{name}</span>
              <span className={styles.desc}>{desc}</span>
              <span className={styles.arrow}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
