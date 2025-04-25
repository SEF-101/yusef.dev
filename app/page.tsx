import Hero from "@/components/hero";
import { IconCloudTechnologies } from "@/components/language-icons";
import { MorphingText } from "@/components/magicui/morphing-text";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* hero */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      
      {/* technologies */}
      <section id="technologies" className="py-16 bg-[var(--card)]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Technologies</h2>
          <div className="h-[400px] w-full max-w-5xl mx-auto">
            <IconCloudTechnologies />
          </div>
        </div>
      </section>

      {/* projects */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <ProjectsSection />
        </div>
      </section>
      
      {/* about */}
      <section id="about" className="py-16 bg-[var(--card)]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              I'm a passionate developer with expertise in modern web technologies. 
              My journey in software development has equipped me with a diverse skill set 
              and a problem-solving mindset.
            </p>
            <p className="text-lg">
              With a focus on creating responsive, user-friendly interfaces, I strive to build 
              applications that are both functionally robust and aesthetically pleasing. 
              I enjoy learning new technologies and continuously improving my skills.
            </p>
          </div>
        </div>
      </section>
      
      {/* contact */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="max-w-md mx-auto text-center">
            <p className="text-lg mb-8">
              Feel free to reach out to me via email. I'd love to hear from you!
            </p>
            <a
              href="mailto:yusef8000@gmail.com"
              className="text-xl text-[var(--primary)] hover:underline"
            >
              yusef8000@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}