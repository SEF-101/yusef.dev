"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { ArrowRight, Briefcase, School, Globe, List, Cpu } from "lucide-react";
import { BorderBeam } from "../magicui/border-beam";
import { IconCloudTechnologies } from "../language-icons";
import { BoxReveal } from "../magicui/box-reveal";
import { Button } from "../ui/button";

// experience
const workExperiences = [
  {
    title: "Senior Technician",
    company: "Iowa State University ITS Endpoint",
    location: "Ames, IA",
    period: "Oct 2022 – Present",
    description: [
      "Act as a bridge between student technicians and admins, sharing updates and supporting workflows",
      "Troubleshoot complex IT issues remotely and onsite for university employees",
      "Manage IT equipment setup, imaging, and lifecycle using MECM and Active Directory",
      "Develop training materials and mentor new hires to enhance technical skills",
      "Coordinate equipment installation and repairs across campus facilities"
    ],
    skills: ["MECM", "Active Directory", "Team Leadership", "Technical Support", "Windows Administration", "Software/Hardware Troubleshooting"]
  },
  {
    title: "Software Developer",
    company: "Automated Code Generation, Inc.",
    location: "Remote / Ames, IA",
    period: "May 2025 – Present",
    description: [
      "First hire at an early-stage startup building a video analytics platform for AI-powered media workflows.",
      "Collaborate directly with founders in Agile to define product direction and technical strategy.",
      "Design and implement dynamic UI features in Expo/React Native with TypeScript, including navigation and video playback.",
      "Integrate frontend with Django backend and AWS S3 for secure media delivery and structured content loading.",
      "Contribute across the full stack, balancing UI development with backend/API integration."
    ],
    skills: ["Expo", "React Native", "TypeScript", "Django", "Playwright" ,"AWS", "UI/UX Design", "Agile", "GitHub Issues", "Full Stack Development"]
  }
];

const education = {
  degree: "Bachelor of Science, Software Engineering",
  institution: "Iowa State University",
  location: "Ames, IA",
  graduationDate: "Expected Dec 2025",
  courses: [
    "Software Dev Practices",
    "Advanced Programming",
    "UI Development",
    "Operating Systems",
    "Computer Architecture",
    "Object-Oriented Programming",
    "Data Structures",
    "Algorithms",
    "Databases",
    "Software Testing",
    "Software Architecture",
    "Requirements Engineering",
    "Security & Networks"
  ]
};

const technicalSkills = [
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  //{ name: "Java", icon: "java" },
  { name: "React", icon: "react" },
  { name: "Python", icon: "python" },
  { name: "Android", icon: "android" },
  { name: "C", icon: "c" },
  { name: "C++", icon: "c++" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Express", icon: "express" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "AWS", icon: "amazonwebservices" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Firebase", icon: "firebase" },
  { name: "Nginx", icon: "nginx" },
  { name: "Vercel", icon: "vercel" },
  { name: "Socket.IO", icon: "socket.io" },
  { name: "React Testing Library", icon: "testinglibrary" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Jest", icon: "jest" },
  { name: "Cypress", icon: "cypress" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "Jira", icon: "jira" },
  { name: "GitHub", icon: "github" },
  { name: "GitLab", icon: "gitlab" },
  { name: "Postman", icon: "postman" },
  { name: "Android Studio", icon: "androidstudio" },
  { name: "Expo", icon: "expo"},
  { name: ".NET", icon: ".net"},
  { name: "Figma", icon: "figma" },
  { name: "Swagger", icon: "swagger" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" }
];

// change black icons to white for better visibility
const getIconColor = (iconName: string) => {
  const whiteIcons = ["nextdotjs", "vercel", "express", "socket.io", "github", "amazonwebservices", "expo"];
  return whiteIcons.includes(iconName) ? "FFFFFF" : iconName;
};

export default function Experience() {
  const [showGridView, setShowGridView] = useState(false);

  return (
    <div className="relative">
      <BoxReveal boxColor="#3B82F6" width="fit-content" duration={0.5}>
        <h2 className="text-4xl font-bold border-l-4 border-primary pl-4 mb-6 font-anton">Experience</h2>
      </BoxReveal>

      <div className="relative w-full overflow-hidden">

        <div className="relative space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* education */}
            <div className="relative overflow-hidden bg-black/40 border border-primary/30 rounded-xl p-6 h-full">
              <BorderBeam duration={10} size={400} delay={4} className="from-transparent via-green-500/30 to-transparent" />

              <div className="flex items-center gap-3 mb-4">
                <School size={24} />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl text-blue-300">{education.degree}</h4>
                  <div className="text-lg mt-1">{education.institution}</div>
                  <div className="text-sm font-lato text-blue-200/80">{education.location}</div>
                  <div className="mt-2 text-blue-400">{education.graduationDate}</div>
                </div>

                <div className="pt-4 border-t border-gray-700/50">
                  <h5 className="text-xl mb-3">Relevant Coursework</h5>
                  <div className="flex flex-wrap gap-2">
                    {education.courses.map((course, idx) => (
                      <Badge
                        key={idx}
                        className="bg-blue-900/30 font-lato"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* technical skills */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-900/20 via-black to-blue-900/20 rounded-xl p-6 border 
              border-primary/20 h-full">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="flex-shrink-0" size={24} />
                <h3 className="text-2xl font-bold">Technical Skills</h3>
                <p className="text-gray-400 font-lato">{showGridView ? 'List of languages & technologies I\'ve worked with' : 'Visualization of languages & technologies I\'ve worked with'}</p>
              </div>

              <div className="relative h-[300px] md:h-[320px] w-full">
                {showGridView ? (
                  <div className="h-full overflow-y-auto pr-2">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {technicalSkills.map((skill) => (
                        <div
                          key={skill.icon}
                          className="flex items-center gap-2 p-2 rounded-md bg-blue-900/20 hover:bg-blue-900/30 transition-colors"
                        >
                          <img
                            src={`https://cdn.simpleicons.org/${skill.icon}/${getIconColor(skill.icon)}`}
                            alt={skill.name}
                            className="w-6 h-6 object-contain"
                          />
                          <span className="text-sm">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="h-15"></div>
                  </div>
                ) : (
                  <IconCloudTechnologies />
                )}

                <Button
                  onClick={() => setShowGridView(!showGridView)}
                  size="sm"
                  variant="outline"
                  className="absolute bottom-2 left-2 bg-black/60 border-primary/50 hover:bg-accent"
                >
                  {showGridView ? (
                    <>
                      <Globe className="mr-1 h-4 w-4" />
                      Show 3D Cloud
                    </>
                  ) : (
                    <>
                      <List className="mr-1 h-4 w-4" />
                      Show List View
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* work experience */}
          <div className="relative overflow-hidden bg-black/40 border border-primary/30 rounded-xl p-6">
            <BorderBeam duration={10} size={400} className="from-transparent via-primary/30 to-transparent" />
            <div className="mb-8 flex items-center gap-3">
              <Briefcase size={24} />
              <h3 className="text-2xl font-anton">Work Experience</h3>
            </div>
            <div className="relative">
              {/* Timeline vertical line */}
              <div
                className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-700/70 via-primary/60 to-blue-700/70 rounded-full pointer-events-none hidden md:block"
                style={{ zIndex: 0 }}
              ></div>
              <div className="flex flex-col gap-16">
                {[...workExperiences].reverse().map((exp, idx) => (
                  <div key={idx} className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-12 group">
                    {/* Timeline dot */}
                    <div className="absolute left-2 md:left-4 top-2 md:top-6 w-6 h-6 flex items-center justify-center z-10 hidden md:flex">
                      <span className="block w-4 h-4 rounded-full border-4 border-primary bg-blue-950 shadow-lg group-hover:scale-110 transition-transform duration-200"></span>
                    </div>
                    <div className="md:ml-16 w-full md:w-1/3">
                      <div className="mb-4">
                        <h4 className="text-xl text-blue-300">{exp.title}</h4>
                        <div className="text-lg mt-1 font-anton">{exp.company}</div>
                        <div className="text-sm font-lato text-blue-200/80">{exp.location}</div>
                        <div className="mt-1 text-blue-400">{exp.period}</div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.skills.map((skill, idx2) => (
                          <Badge
                            key={idx2}
                            variant="secondary"
                            className="bg-blue-900/30 text-xs font-lato"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 border-l-0 md:border-l border-gray-700 md:pl-8">
                      <h4 className="text-xl mb-4">Responsibilities & Achievements</h4>
                      <ul className="space-y-3">
                        {exp.description.map((item, idx3) => (
                          <motion.li
                            key={idx3}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx3 * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <ArrowRight className="text-primary mt-1 flex-shrink-0" size={18} />
                            <span className="font-lato text-gray-400">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}