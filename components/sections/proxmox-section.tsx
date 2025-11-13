"use client";
import Image from "next/image";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Marquee } from "../magicui/marquee";
import { cn } from "@/lib/utils";

export default function ProxmoxSection() {
  const services = [
    {
      icon: "/homeLabIcons/jellyfin.png",
      name: "Jellyfin",
      description: "Self-hosted media server",
    },
    {
      icon: "/homeLabIcons/homebox.png",
      name: "NextCloud",
      description: "Self-hosted cloud storage",
    },
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
          "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={icon}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{description}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{description}</blockquote>
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
            a variety of containers for development and self-hosted services,
            and experimentation.
          </p>

          <ul className="list-disc ml-5 space-y-2 text-lg font-lato">
            <li>
              <strong>Host OS:</strong> Debian (bookworm) with ZFS for storage
            </li>
            <li>
              <strong>Containers:</strong> LXC for lightweight services
            </li>
            <li>
              <strong>Backups:</strong> Regular snapshots and scheduled backups
              to an external NAS
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6 mb-4">Running Services</h3>
          <Marquee className="bg-[var(--card)] p-4 rounded-md shadow-inner">
            {services.map((service) => (
                <ServiceCard key={service.name} {...service} />
            ))}
          </Marquee>
        </div>

        <div className="md:w-1/2 flex flex-col items-center">
          <div className="w-full max-w-md rounded-md overflow-hidden border border-primary/20 shadow-lg bg-[var(--card)]">
            <Image
              src="/projectPics/proxmox_dashboard.png"
              alt="Proxmox dashboard placeholder"
              width={600}
              height={360}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
