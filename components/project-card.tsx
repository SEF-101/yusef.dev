import Link from "next/link";
import Image from "next/image";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "./ui/card";
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
        {/* image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
        </div>
        <Badge className="text-sm absolute top-4 left-5 bg-accent text-primary">
          {project.category}
        </Badge>
      </CardHeader>
      
      <CardContent className="px-8 py-6">
        <CardTitle className="mb-1">{project.name}</CardTitle>
        <CardDescription className="text-lg">{project.description}</CardDescription>
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