"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/project-card";

const projectData = [
  {
    image: "",
    category: "react js",
    name: "Amazon clone",
    description: "Amazon Clone made with React, Tailwind, JavaScript, and Redux",
    link: "https://amazon-clone-ten-lemon.vercel.app/",
    github: "https://github.com/premvarma2002/amazon-clone",
  },
  {
    image: "",
    category: "react js",
    name: "Homeland",
    description: "A real estate rental website made with React, Tailwind & JavaScript.",
    link: "https://beautiful-homeland.netlify.app/",
    github: "https://github.com/premvarma2002/Real-Estate",
  },
  
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

export default function Projects() {
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) =>
    category === "all projects" ? true : project.category === category
  );

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h1 className="text-5xl mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h1>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
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
      </div>
    </section>
  );
}