import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "socket.io",
  "javascript",
  "java",
  "react",
  "expo",
  "python",
  "android",
  "c",
  "amazonwebservices",
  "c++",
  "html5",
  "css3",
  "tailwindcss",
  "nodedotjs",
  "nextdotjs",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "bootstrap",
  "jest",
  ".net",
  "cypress",
  "docker",
  "git",
  "jira",
  "gitlab",
  "postman",
  "github",
  "androidstudio",
  "figma",
  "swagger",
  "mongodb",
  "express",
  "mysql",
];

// change black icons to white for better visibility
const getIconColor = (iconName: string) => {
  const whiteIcons = ["nextdotjs", "vercel", "express", "socket.io", "github", "amazonwebservices", "expo"];
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
