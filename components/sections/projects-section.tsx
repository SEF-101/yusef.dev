"use client";
import ProjectCard from "@/components/project-card";
import { Marquee } from "@/components/magicui/marquee";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

const projectData = [
  {
    id: "1",
    image: "/pictureOfSite.png",
    category: "Next.js",
    name: "yusef.dev | Yusef's Portfolio",
    description:
      "This very website you're exploring! Built with Next.js, TypeScript, and styled using Tailwind CSS with shadcn/ui components. Features interactive UI elements from Magic UI library. Showcases responsive design, smooth animations, and modern component architecture.",
    github: "https://github.com/SEF-101/yusef.dev"
  },
  {
    id: "2",
    image: "/projectPics/geoexplore_pic.png",
    category: "Java",
    name: "GeoExplore",
    description:
      "A real-time city interaction app built in Java with WebSockets, REST APIs, and Google Maps. Enables hazard reporting, event sharing, and location tracking between citizens and city officials.",
    github: "https://github.com/SEF-101/GeoExplore",
  },
  {
    id: "3",
    image: "/projectPics/gridai_pic.png",
    category: "Node.js",
    name: "GridAI",
    description:
      "A real-time power grid management platform built for utility operators, featuring AI-driven insights, interactive dashboards, and collaborative code editing. Developed with React, TypeScript, Go, and Python, it supports live data visualization, CRDT-based file editing, and scalable frontend architecture.",
    link: "https://sddec25-17.sd.ece.iastate.edu/",
  },
  {
    id: "4",
    image: "/projectPics/lakes_pic.png",
    category: "Node.js",
    name: "Lakes Auto Sales",
    description: "A comprehensive automotive dealership platform featuring modern responsive design, interactive vehicle inventory, and an admin dashboard. Built with MERN stack (MongoDB, Express, React, Node.js) and containerized with Docker for easy deployment.",
    github: "https://github.com/SEF-101/LakeAutoSales"
  },
  {
    id: "5",
    image: "/projectPics/video_compressor_pic.png",
    category: "Python",
    name: "SEF101's Video Compressor",
    description:
      "A Python-based desktop app for compressing videos to a target file size using FFmpeg. Features a modern CustomTkinter UI, dynamic bitrate control, and background processing to keep the interface responsive. Compressed files are saved automatically to the Downloads folder.",
    github: "https://github.com/SEF-101/SEF101sVideoCompressor",
  }
];

export default function Projects() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <BoxReveal boxColor="#3B82F6" width="fit-content" duration={0.5}>
        <h2 className="text-4xl font-bold border-l-4 border-primary pl-4 mb-6 font-anton">
          Projects
        </h2>
      </BoxReveal>

      <div className="flex flex-col gap-2">
        <div className="flex justify-end mb-1">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play projects scroll" : "Pause projects scroll"}
            className="h-8 w-8 border-accent"
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </Button>
        </div>

        <Marquee className="py-4" paused={isPaused} speed={1}>
          {projectData.map((project) => (
            <div key={project.id} className="w-[280px] sm:w-[340px] md:w-[400px] lg:w-[450px] ">
              <ProjectCard project={project} />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}
