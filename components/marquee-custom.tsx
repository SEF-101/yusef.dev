import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";


const techSkills = [
  {
    name: "React",
    category: "Frontend",
    description: "Building interactive UIs with React hooks",
  },
  {
    name: "Next.js",
    category: "Framework",
    description: "Creating fast, SEO-friendly applications",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Type-safe JavaScript for robust applications",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first CSS for rapid UI development",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Server-side JavaScript runtime",
  },
  {
    name: "Python",
    category: "Language",
    description: "Versatile language for various applications",
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "NoSQL database for flexible data storage",
  },
  {
    name: "Git",
    category: "Version Control",
    description: "Tracking changes and collaboration",
  },
];

const firstRow = techSkills.slice(0, techSkills.length / 2);
const secondRow = techSkills.slice(techSkills.length / 2);


const TechCard = ({
  name,
  category,
  description,
}: {
  name: string;
  category: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium">{name}</figcaption>
        <p className="text-xs opacity-60">{category}</p>
      </div>
      <blockquote className="mt-2 text-sm">{description}</blockquote>
    </figure>
  );
};

export function TechMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}