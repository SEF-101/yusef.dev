import Hero from "@/components/hero";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { IconCloudTechnologies } from "@/components/language-icons";
import { MorphingText } from "@/components/magicui/morphing-text";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import { WarpBackground } from "@/components/magicui/warp-background";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* hero */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* experience */}
      <section id="technologies" className="py-16 bg-[var(--card)]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
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
            <p className="text-lg mb-6">
              With a focus on creating responsive, user-friendly interfaces, I strive to build
              applications that are both functionally robust and aesthetically pleasing.
              I enjoy learning new technologies and continuously improving my skills.
            </p>
            <div className="mt-8 flex flex-col items-center">
              <div className="flex flex-col items-center mb-4">
                <p className="text-lg font-semibold text-[var(--primary)]">Scratch this!</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[var(--primary)] animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <ScratchToReveal
                width={300}
                height={200}
                minScratchPercentage={50}
                gradientColors={["#3B82F6", "#1B2A41", "#334155"]}
                className="flex items-center justify-center overflow-hidden rounded-2xl bg-black border-2"
              >
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold text-center text-[var(--primary)] mb-10">
                    Heres my social security number
                  </h3>
                  <h3 className="text-2xl font-bold text-[var(--primary)]">
                    581-30-0142
                  </h3>
                </div>
              </ScratchToReveal>
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="">
        <WarpBackground className="">
          <div className="container mx-auto px-4 flex justify-center">
            <Card className="w-full max-w-md bg-[var(--card)] shadow-lg">
              <CardContent className="flex flex-col gap-4 p-6">
                <CardTitle className="text-4xl font-bold text-center text-[var(--primary)]">
                  Get in Touch
                </CardTitle>
                <CardDescription className="text-lg text-center text-[var(--foreground)]">
                  Feel free to reach out to me via email. I'd love to hear from you!
                </CardDescription>
                <a
                  href="mailto:yusef8000@gmail.com"
                  className="text-xl text-center text-[var(--primary)] hover:underline"
                >
                  yusef8000@gmail.com
                </a>
              </CardContent>
            </Card>
          </div>
        </WarpBackground>
      </section>
    </div>
  );
}