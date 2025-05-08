"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/project-card";

const projectData = [
  {
    id: "1",
    image: "/projectPics/video_compressor_pic.png",
    category: "Python",
    name: "SEF101's Video Compressor",
    description: "A video compressor made with Python and UI library customtkinter. Needs ffmpeg installed.",
    link: "https://amazon-clone-ten-lemon.vercel.app/",
    github: "https://github.com/SEF-101/SEF101sVideoCompressor",
  },
  {
    id: "2",
    image: "/projectPics/geoexplore_pic.png",
    category: "Java",
    name: "GeoExplore",
    description: "A real-time city interaction app built in Java with WebSockets, REST APIs, and Google Maps. Enables hazard reporting, event sharing, and location tracking between citizens and city officials.",
    link: "https://beautiful-homeland.netlify.app/",
    github: "https://github.com/SEF-101/GeoExplore",
  },
  {
    id: "3",
    image: "/projectPics/gridai_pic.png",
    category: "React",
    name: "GridAI",
    description: "A real-time power grid management platform built for utility operators, featuring AI-driven insights, interactive dashboards, and collaborative code editing. Developed with React, TypeScript, Go, and Python, it supports live data visualization, CRDT-based file editing, and scalable frontend architecture.",
    link: "https://sddec25-17.sd.ece.iastate.edu/",
    github: "https://github.com/premvarma2002/Real-Estate",
  },
  
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

export default function ProjectsSection() {
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) =>
    category === "all projects" ? true : project.category === category
  );

  return (
    <>
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      <Tabs defaultValue={category} className="mb-12">
        <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
          {uniqueCategories.map((cat, index) => (
            <TabsTrigger
              key={index}
              value={cat}
              onClick={() => setCategory(cat)}
              className="capitalize w-[162px] md:w-auto data-[state=active]:bg-accent"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <TabsContent value={category} key={index}>
              <ProjectCard project={project} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </>
  );
}