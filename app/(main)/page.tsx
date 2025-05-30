"use client";
import Hero from "@/components/hero";
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

      {/* experience section */}
      <section id="experience" className="py-20 px-4 md:px-6 lg:px-8">
        <Experience />
      </section>

      {/* project section */}
      <section id="projects" className="py-20 px-4 md:px-6 lg:px-8">
        <Projects />
      </section>

      {/* about section */}
      <section id="about" className="py-20 px-4 md:px-6 lg:px-8">
        <About />
      </section>

      {/* contact section */}
      <section id="contact" className="py-20 px-4 md:px-6 lg:px-8">
        <Contact />
      </section>
    </div>
  );
}
