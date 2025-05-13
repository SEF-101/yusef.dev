import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";
import { BorderBeam } from "./magicui/border-beam";

interface Project {
  id: string;
  image: string;
  link?: string;
  github?: string;
  category: string;
  name: string;
  description: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="group overflow-hidden relative border-accent h-full flex flex-col">
      <CardHeader className="p-0 flex flex-col">
        <div className="px-5 pb-0.5">
          <Badge className="text-sm bg-accent text-primary">
            {project.category}
          </Badge>
        </div>

        <div
          className={`relative w-full ${
            project.name === "GeoExplore" ? "h-[295px]" : "h-[180px]"
          } flex items-center justify-center bg-tertiary dark:bg-secondary/40 overflow-hidden`}
        >
          {" "}
          <Image
            src={project.image || "/placeholder-project.png"}
            width={500}
            height={300}
            alt={project.name || "Project image"}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </CardHeader>

      <CardContent className="px-8 py-6 flex-grow">
        <CardTitle className="mb-1 text-2xl">{project.name}</CardTitle>
        <CardDescription className="text-lg text-white font-lato">
          {project.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="mt-auto flex justify-start">
        <div className="flex gap-x-4">
          {project.link && (
            <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  target="_blank"
                  href={project.link}
                  className="w-[42px] h-[42px] rounded-full flex justify-center items-center"
                >
                  <Link2Icon className="text-white h-5 w-5 hover:text-primary" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className= "text-white">
                <p className="font-lato">Visit Project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          )}
          {project.github && (
            <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  target="_blank"
                  href={project.github}
                  className="w-[42px] h-[42px] rounded-full flex justify-center items-center"
                >
                  <Github className="text-white h-5 w-5 hover:text-primary" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className= "text-white">
                <p className="font-lato">View GitHub Repository</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          )}
        </div>
      </CardFooter>
      <BorderBeam duration={8} size={300} className="from-transparent via-blue-500 to-transparent"/>
      <BorderBeam duration={8} size={300} delay={3.5} className="from-transparent via-blue-500 to-transparent"/>
    </Card>
  );
};

export default ProjectCard;
