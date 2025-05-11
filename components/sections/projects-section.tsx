import ProjectCard from "@/components/project-card";

const projectData = [
  {
    id: "1",
    image: "/projectPics/video_compressor_pic.png",
    category: "Python",
    name: "SEF101's Video Compressor",
    description:
      "A Python-based desktop app for compressing videos to a target file size using FFmpeg. Features a modern CustomTkinter UI, dynamic bitrate control, and background processing to keep the interface responsive. Compressed files are saved automatically to the Downloads folder.",
    github: "https://github.com/SEF-101/SEF101sVideoCompressor",
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
    category: "React",
    name: "GridAI",
    description:
      "A real-time power grid management platform built for utility operators, featuring AI-driven insights, interactive dashboards, and collaborative code editing. Developed with React, TypeScript, Go, and Python, it supports live data visualization, CRDT-based file editing, and scalable frontend architecture.",
    link: "https://sddec25-17.sd.ece.iastate.edu/",
  },
];

export default function Projects() {
  return (
    <>
      <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
