import Hero from "@/components/hero";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import { CtaBand } from "@/components/page-shell";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <section className="py-24">
        <HowItWorksSection />
      </section>

      <CtaBand />
    </div>
  );
}
