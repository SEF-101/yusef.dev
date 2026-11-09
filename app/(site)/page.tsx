import Hero from "@/components/hero";
import { MobileReadySection } from "@/components/device-showcase";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import ServicesMarquee from "@/components/sections/services-marquee";
import { CtaBand } from "@/components/page-shell";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <ServicesMarquee />

      <section className="container mx-auto px-4 py-24">
        <MobileReadySection cta />
      </section>

      <section className="py-24">
        <HowItWorksSection />
      </section>

      <CtaBand />
    </div>
  );
}
