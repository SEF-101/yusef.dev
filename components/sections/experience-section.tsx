"use client";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { ArrowRight, Briefcase, School } from "lucide-react";
import { BorderBeam } from "../magicui/border-beam";
import { IconCloudTechnologies } from "../language-icons";
import { BoxReveal } from "../magicui/box-reveal";
import { WarpBackground } from "../magicui/warp-background";

// experience
const workExperience = {
  title: "Senior Technician",
  company: "Iowa State University ITS Endpoint",
  location: "Ames, IA",
  period: "Oct 2022 – Present",
  description: [
    "Lead team of 12 student technicians, optimizing daily operations and workflow efficiency",
    "Troubleshoot complex IT issues remotely and onsite for university employees",
    "Manage IT equipment setup, imaging, and lifecycle using MECM and Active Directory",
    "Develop training materials and mentor new hires to enhance technical skills",
    "Coordinate equipment installation and repairs across campus facilities"
  ],
  skills: ["MECM", "Active Directory", "Team Leadership", "Technical Support", "Windows Administration", "Software/Hardware Troubleshooting"]
};

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

export default function Experience() {
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
                <School className="text-primary" size={24} />
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
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-900/20 via-black to-blue-900/20 rounded-xl p-6 border border-blue-500/20 h-full">
              <div className="mb-4 text-center">
                <h3 className="text-2xl font-bold">Technical Skills</h3>
                <p className="text-gray-400 font-lato">Interactive visualization of languages & technologies I've worked with</p>
              </div>
              
              <div className="h-[300px] md:h-[320px] w-full">
                <IconCloudTechnologies />
              </div>
            </div>
          </div>
          
          {/* work experience */}
          <div className="relative overflow-hidden bg-black/40 border border-primary/30 rounded-xl p-6">
            <BorderBeam duration={10} size={400} className="from-transparent via-blue-500/30 to-transparent" />
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-primary" size={24} />
                  <h3 className="text-2xl font-bold">Work Experience</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-xl text-blue-300">{workExperience.title}</h4>
                  <div className="text-lg mt-1">{workExperience.company}</div>
                  <div className="text-sm font-lato text-blue-200/80">{workExperience.location}</div>
                  <div className="mt-1 text-blue-400">{workExperience.period}</div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {workExperience.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="bg-blue-900/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/3 border-l-0 lg:border-l border-gray-700 lg:pl-8">
                <h4 className="text-xl mb-4">Responsibilities & Achievements</h4>
                <ul className="space-y-3">
                  {workExperience.description.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <ArrowRight className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="font-lato text-gray-400">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}