import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "python",
  "android",
  "c",
  "c++",
  "html5",
  "css3",
  "tailwindcss",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "socket.io",
  "testinglibrary",
  "bootstrap",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "postman",
  "androidstudio",
  "figma",
  "swagger",
  "mongodb",
  "mysql",
];

// change black icons to white for better visibility
const getIconColor = (iconName: string) => {
const whiteIcons = ["nextdotjs", "vercel", "express", "socket.io", "github"];
return whiteIcons.includes(iconName) ? "FFFFFF" : iconName;
};

export function IconCloudTechnologies() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${getIconColor(slug)}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
