import Hero from "@/components/hero";
import { IconCloudDemo } from "@/components/language-icons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      <section className="py-12 bg-[var(--card)] text-center">
        <h2 className="text-4xl font-bold mb-8">Technologies I Work With</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <IconCloudDemo />
        </div>
      </section>
    </div>
  );
}