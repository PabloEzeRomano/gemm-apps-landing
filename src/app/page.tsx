import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import { Statement } from "@/components/sections/Statement/Statement";
import { About } from "@/components/sections/About/About";
import { Products } from "@/components/sections/Products/Products";
import { FromTheStudio } from "@/components/sections/FromTheStudio/FromTheStudio";
import { Philosophy } from "@/components/sections/Philosophy/Philosophy";
import { Collaborations } from "@/components/sections/Collaborations/Collaborations";
import { Founder } from "@/components/sections/Founder/Founder";
import { Contact } from "@/components/sections/Contact/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Statement />
        <About />
        <Products />
        <FromTheStudio />
        <Philosophy />
        <Collaborations />
        <Founder />
        <Contact />
      </main>
    </>
  );
}
