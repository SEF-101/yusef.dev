"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import {
  Terminal,
  AnimatedSpan,
  TypingAnimation,
} from "@/components/magicui/terminal";
import {
  Wrench,
  Shield,
  HardDrive,
  Monitor,
  Printer,
  Mail,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const itServices = [
  {
    icon: Wrench,
    title: "PC & Laptop Repair",
    description:
      "Slow computer, crashing, hardware issues — I'll figure out what's wrong and fix it.",
  },
  {
    icon: Shield,
    title: "Virus & Malware Cleanup",
    description:
      "Got infected? I'll clean it out and lock things down so it doesn't happen again. Emergency service available.",
  },
  {
    icon: HardDrive,
    title: "Custom PC Builds",
    description:
      "Whether it's for gaming or work, I'll put together a build that fits your needs and budget.",
  },
  {
    icon: Monitor,
    title: "New Computer Setup & Transfer",
    description:
      "New PC? I'll set it up, move your files and apps over from the old one, and make sure everything works.",
  },
  {
    icon: Printer,
    title: "Printer & Peripheral Setup",
    description:
      "Printers, scanners, monitors, docking stations — I'll get your gear connected and working.",
  },
  {
    icon: Mail,
    title: "Email & Microsoft 365",
    description:
      "Need help with email, Outlook, Microsoft 365, or Google Workspace? I'll get it set up or fix what's broken.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing IT Support",
    description:
      "Don't want to deal with tech problems? I can be your go-to person on a monthly basis.",
  },
];

export default function ITServicesSection() {
  return (
    <div className="container mx-auto px-4">
      <BlurFade delay={0.1} inView>
        <h2 className="text-4xl md:text-5xl font-anton text-primary tracking-wide mb-4">
          IT Services
        </h2>
        <div className="w-16 h-1 bg-primary mb-8" />
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <p className="text-lg font-lato text-gray-400 mb-12 max-w-2xl">
          I&apos;ve been the go-to tech person for years. Whether it&apos;s a broken
          laptop, a virus, or setting up a new workstation — I can help. Contact for a quote.
        </p>
      </BlurFade>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {itServices.map((service, idx) => (
            <BlurFade key={idx} delay={0.1 + idx * 0.06} inView>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:border-primary/30 transition-all duration-300 h-full group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                    <service.icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-blue-300">{service.title}</h3>
                </div>
                <p className="text-gray-500 font-lato text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <BlurFade delay={0.3} inView>
            <Terminal className="w-full max-w-lg">
              <TypingAnimation>$ sef --diagnose</TypingAnimation>
              <AnimatedSpan className="text-blue-400">
                <span>&#10004; Hardware scan... All good</span>
              </AnimatedSpan>
              <AnimatedSpan className="text-blue-400">
                <span>&#10004; Network... Stable</span>
              </AnimatedSpan>
              <AnimatedSpan className="text-yellow-400">
                <span>&#9888; 3 updates available</span>
              </AnimatedSpan>
              <AnimatedSpan className="text-blue-400">
                <span>&#10004; Security... Clean</span>
              </AnimatedSpan>
              <TypingAnimation>$ sef --optimize</TypingAnimation>
              <AnimatedSpan className="text-blue-400">
                <span>&#10004; Cleared 4.2GB junk</span>
              </AnimatedSpan>
              <AnimatedSpan className="text-blue-400">
                <span>&#10004; Boot time improved 47%</span>
              </AnimatedSpan>
              <AnimatedSpan className="text-primary font-bold">
                <span>&#8594; Done. contact@yusef.dev</span>
              </AnimatedSpan>
            </Terminal>
          </BlurFade>
        </div>
      </div>

      <BlurFade delay={0.5} inView>
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary/40 text-primary rounded-lg font-lato font-bold text-lg hover:bg-primary/10 transition-all duration-300"
          >
            Get IT Help
            <ArrowRight size={18} />
          </a>
        </div>
      </BlurFade>
    </div>
  );
}
