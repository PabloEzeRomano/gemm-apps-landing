import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { IntakeForm } from "@/components/IntakeForm/IntakeForm";
import { IntakeIntro } from "@/components/IntakeForm/IntakeIntro";
import styles from "@/components/IntakeForm/IntakeForm.module.css";

export const metadata: Metadata = {
  title: "Relevamiento de proyecto",
  description: "Contanos de tu proyecto en 5 minutos y te armamos un presupuesto.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://gemm-apps.com/relevamiento" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <IntakeIntro />
        <IntakeForm />
      </main>
    </>
  );
}
