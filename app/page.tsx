import Hero from "@/components/hero";
import Contact from "@/components/sections/contact-section";
import About from "@/components/sections/experience-section";
import Services from "@/components/sections/services-section";
import ITServices from "@/components/sections/it-services-section";
import HowItWorks from "@/components/sections/how-it-works-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      <section id="services" className="py-24">
        <Services />
      </section>

      <section id="process" className="py-24 relative overflow-hidden">
        <HowItWorks />
      </section>

      <section id="it-services" className="py-24">
        <ITServices />
      </section>

      <section id="about" className="py-24">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
