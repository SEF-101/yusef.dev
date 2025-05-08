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
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

interface Project {
  id: string;
  image: string;
  link: string;
  github: string;
  category: string;
  name: string;
  description: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image container with fixed aspect ratio and overflow control */}
        <div className="relative w-full h-[200px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 overflow-hidden">
          <Image
            src={project.image || "/placeholder-project.png"}
            width={500}
            height={300}
            alt={project.name || "Project image"}
            className="object-contain w-full h-full"
            priority
          />
        </div>
        <Badge className="text-sm absolute top-4 left-5 bg-accent text-primary">
          {project.category}
        </Badge>
      </CardHeader>

      <CardContent className="px-8 py-6">
        <CardTitle className="mb-1">{project.name}</CardTitle>
        <CardDescription className="text-lg font-">
          {project.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="px-8 flex justify-start">
        <div className="flex gap-x-4">
          {project.link && (
            <Link
              target="_blank"
              href={project.link}
              className="w-[42px] h-[42px] rounded-full flex justify-center items-center"
            >
              <Link2Icon className="text-white h-5 w-5 hover:text-primary" />
            </Link>
          )}
          {project.github && (
            <Link
              target="_blank"
              href={project.github}
              className="w-[42px] h-[42px] rounded-full flex justify-center items-center"
            >
              <Github className="text-white h-5 w-5 hover:text-primary" />
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
