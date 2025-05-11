import Hero from "@/components/hero";
import { MorphingText } from "@/components/magicui/morphing-text";
import About from "@/components/sections/about-section";
import Contact from "@/components/sections/contact-section";
import Experience from "@/components/sections/experience-section";
import Projects from "@/components/sections/projects-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* landing page */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* experience */}
      <section id="technologies" className="py-16 bg-[var(--card)]">
        <div className="container mx-auto px-4">
          <Experience />
        </div>
      </section>

      {/* projects */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <Projects />
        </div>
      </section>

      {/* about */}
      <section id="about" className="py-16 bg-[var(--card)]">
        <div className="container mx-auto px-4">
          <About />
        </div>
      </section>

      {/* contact */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}