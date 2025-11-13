"use client";
import Image from "next/image";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Marquee } from "../magicui/marquee";
import { cn } from "@/lib/utils";

export default function ProxmoxSection() {
  const services = [
    {
      icon: "/homeLabIcons/homepage.png",
      name: "Homepage",
      description: "Self-hosted homepage for my projects",
    },
    {
      icon: "/homeLabIcons/jellyfin.png",
      name: "Jellyfin",
      description: "Self-hosted media streaming server for movies, TV, and music.",
    },
    {
      icon: "/homeLabIcons/homebox.png",
      name: "Homebox",
      description: "Self-hosted home inventorying and organization tool",
    },
    {
      icon: "/homeLabIcons/nginx-proxy-manager.png",
      name: "Nginx Proxy Manager",
      description: "Reverse proxy and TLS management for all services",
    },
    {
      icon: "/homeLabIcons/audiobookshelf.png",
      name: "Audiobookshelf",
      description: "Self-hosted audiobook server",
    },
    {
      icon: "/homeLabIcons/jellyseerr.png",
      name: "Jellyseerr",
      description: "Automated requests & metadata for media",
    },
    {
      icon: "/homeLabIcons/uptime-kuma.png",
      name: "Uptime Kuma",
      description: "Service monitoring and alerting",
    },
    {
      icon: "/homeLabIcons/filebrowser-quantum.png",
      name: "File Browser",
      description: "Self-hosted cloud storage and file manager.",
    }
  ];

  const ServiceCard = ({
    icon,
    name,
    description,
  }: {
    icon: string;
    name: string;
    description: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative h-full w-fit min-w-[200px] cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className=""
            width="32"
            height="32"
            alt=""
            src={icon}
          />
          <div className="flex flex-col">
            <figcaption className="text-gray-300 text-md">
              {name}
            </figcaption>
          </div>
        </div>
        <blockquote className="mt-2 text-sm text-white font-lato">{description}</blockquote>
      </figure>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BoxReveal boxColor="#3B82F6" width="fit-content" duration={0.5}>
        <h2 className="text-4xl font-bold border-l-4 border-primary pl-4 mb-6 font-anton">
          My Proxmox Home Lab
        </h2>
      </BoxReveal>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <p className="text-lg font-lato mb-4">
            In my free time, I run a Proxmox virtualization server where I host
            a variety of self-hosted services for friends and family, as well as for development
            and experimentation.
          </p>

          <ul className="list-disc ml-5 space-y-2 text-lg font-lato">
            <li>
              <strong>Host OS:</strong> Debian (bookworm) with ZFS for storage
            </li>
            <li>
              <strong>Containers:</strong> LXC for services
            </li>
            <li>
              <strong>Backups:</strong> Scheduled backups
              to an external storage
            </li>
          </ul>

          <h3 className="text-2xl mt-20 mb-2">Running Services</h3>
        
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">

          <Marquee className="p-4 rounded-md shadow-inner">
            {services.map((service) => (
                <ServiceCard key={service.name} {...service} />
            ))}
          </Marquee>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col items-center">
          <div className="w-full max-w-md rounded-md overflow-hidden shadow-lg ring-1 ring-primary/8">
            <Image
              src="/precision.png"
              alt="Dell Precision 3630 server"
              width={900}
              height={540}
              className="object-cover w-full h-auto"
            />
            <div className="p-4 bg-[var(--card)] border-t border-primary/10">
              <h4 className="text-lg">Dell Precision 3630</h4>
              <p className="text-sm text-gray-300 font-lato">Intel Xeon E-2124G • NVIDIA Quadro 2000 • 16Gb RAM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
