import { Contact } from "@/components/Contact";
import { Design } from "@/components/Design";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Ribbon } from "@/components/Ribbon";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Ribbon />
        <Services />
        <Pricing />
        <Work />
        <Design />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
