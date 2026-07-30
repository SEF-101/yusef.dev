"use client";

import { useState } from "react";
import { Globe, List, GraduationCap, Briefcase } from "lucide-react";
import { IconCloudTechnologies } from "../language-icons";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "../ui/button";

const technicalSkills = [
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Python", icon: "python" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Express", icon: "express" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Firebase", icon: "firebase" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "Vercel", icon: "vercel" },
  { name: "Figma", icon: "figma" },
];

const getIconColor = (iconName: string) => {
  const whiteIcons = ["nextdotjs", "vercel", "express"];
  return whiteIcons.includes(iconName) ? "FFFFFF" : iconName;
};

export default function About() {
  const [showGridView, setShowGridView] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <BlurFade delay={0.1} inView>
        <h2 className="text-4xl md:text-5xl font-anton text-primary tracking-wide mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-primary mb-12" />
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BlurFade delay={0.2} inView>
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 h-full">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-300">B.S. Software Engineering</h4>
                  <p className="text-sm font-lato text-gray-500">Iowa State University</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-300">3+ Years in IT</h4>
                  <p className="text-sm font-lato text-gray-500">Professional IT support & software development</p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6">
                <p className="text-gray-400 font-lato leading-relaxed">
                  I studied software engineering at Iowa State and have been working
                  in IT professionally since 2022. I build websites and fix tech
                  problems because I genuinely enjoy it — not because I watched a
                  YouTube tutorial and decided to freelance.
                </p>
                <p className="text-gray-400 font-lato leading-relaxed mt-4">
                  When you work with me, you&apos;re getting someone who actually
                  understands what&apos;s happening under the hood.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-primary">Tech I Work With</h3>
              <Button
                onClick={() => setShowGridView(!showGridView)}
                size="sm"
                variant="outline"
                className="border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
              >
                {showGridView ? (
                  <>
                    <Globe className="mr-1.5 h-3.5 w-3.5" />
                    3D View
                  </>
                ) : (
                  <>
                    <List className="mr-1.5 h-3.5 w-3.5" />
                    List View
                  </>
                )}
              </Button>
            </div>

            <div className="relative h-[320px] w-full">
              {showGridView ? (
                <div className="h-full overflow-y-auto pr-2">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {technicalSkills.map((skill) => (
                      <div
                        key={skill.icon}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                      >
                        <img
                          src={`https://cdn.simpleicons.org/${skill.icon}/${getIconColor(skill.icon)}`}
                          alt={skill.name}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-sm font-lato text-gray-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <IconCloudTechnologies />
              )}
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
