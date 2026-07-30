"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { Iphone } from "@/components/ui/iphone";
import {
  Globe,
  Smartphone,
  Search,
  Zap,
  Palette,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const webServices = [
  {
    icon: Globe,
    title: "Custom-Built Websites",
    description:
      "No WordPress themes, no Wix drag-and-drop. I write the code myself and build your site from scratch so it looks and works exactly how you want.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Your site will look great on phones, tablets, and desktops. I test on real devices so your customers always have a smooth experience.",
  },
  {
    icon: Search,
    title: "SEO That Actually Works",
    description:
      "I structure everything so search engines can find you. No gimmicks or paid tricks — just solid technical fundamentals that help you rank.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "I use modern tools to build sites that load fast. Not the bloated template sites that take forever to show a menu.",
  },
  {
    icon: Palette,
    title: "Clean, Professional Design",
    description:
      "I'll work with you on the look and feel until it's right. You won't get a generic layout with your name swapped in.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Support",
    description:
      "After your site goes live, I'm still here. Need changes, updates, or something fixed? I don't disappear after launch.",
  },
];

function IphoneMockupContent() {
  return (
    <div className="w-full h-full bg-[#0B0B0E] text-white flex flex-col overflow-hidden">
      {/* navbar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.04]">
        <span className="text-primary font-anton text-[13px] tracking-wide">SEF</span>
        <div className="flex gap-[5px]">
          <div className="w-[3px] h-[3px] rounded-full bg-white/30" />
          <div className="w-[3px] h-[3px] rounded-full bg-white/30" />
          <div className="w-[3px] h-[3px] rounded-full bg-white/30" />
        </div>
      </div>

      {/* hero */}
      <div className="flex flex-col items-center text-center px-5 pt-10 pb-6">
        <h3 className="text-[15px] font-anton leading-snug">
          I&apos;m Yusef.
        </h3>
        <h3 className="text-[15px] font-anton leading-snug text-primary mt-0.5">
          I Build Websites
        </h3>
        <p className="text-[7px] text-gray-500 font-lato mt-2 leading-relaxed">
          Custom sites & IT support.
        </p>
        <div className="flex gap-2 mt-4">
          <div className="px-3 py-1 bg-primary rounded-md text-[6px] font-semibold font-lato">
            Services
          </div>
          <div className="px-3 py-1 border border-white/[0.08] rounded-md text-[6px] font-lato text-gray-500">
            Contact
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="mx-5 h-px bg-white/[0.04]" />

      {/* services preview */}
      <div className="px-5 pt-4 pb-3">
        <p className="text-[8px] font-anton text-primary tracking-wide mb-3">Web Development</p>
        <div className="space-y-1.5">
          {["Custom-Built Sites", "Mobile-First", "SEO & Performance", "Ongoing Support"].map((item) => (
            <div key={item} className="flex items-center gap-2 py-1">
              <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
              <span className="text-[6.5px] font-lato text-gray-400">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* contact footer */}
      <div className="mt-auto px-5 pb-5">
        <div className="border border-white/[0.04] rounded-lg py-2.5 text-center">
          <p className="text-[7px] font-anton text-primary">Let&apos;s Work Together</p>
          <p className="text-[5.5px] text-gray-600 font-lato mt-0.5">contact@yusef.dev</p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <div className="container mx-auto px-4">
      <BlurFade delay={0.1} inView>
        <h2 className="text-4xl md:text-5xl font-anton text-primary tracking-wide mb-4">
          Web Development
        </h2>
        <div className="w-16 h-1 bg-primary mb-8" />
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <p className="text-lg font-lato text-gray-400 mb-12 max-w-2xl">
          I build websites for businesses and individuals who need a real online presence — not a
          cookie-cutter template. You tell me what you need, we&apos;ll have a free
          consultation to plan it out, and I&apos;ll build it.
        </p>
      </BlurFade>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* service cards */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5">
          {webServices.map((service, idx) => (
            <BlurFade key={idx} delay={0.1 + idx * 0.08} inView>
              <MagicCard
                className="rounded-xl h-full"
                gradientColor="#1a1a2e"
                gradientOpacity={0.6}
                gradientFrom="#3B82F6"
                gradientTo="#1e1e2a"
                gradientSize={250}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <service.icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 font-lato text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        {/* iPhone mockup */}
        <div className="lg:w-1/3 flex justify-center lg:sticky lg:top-24">
          <BlurFade delay={0.3} inView>
            <div className="w-[220px] md:w-[260px]">
              <Iphone>
                <IphoneMockupContent />
              </Iphone>
            </div>
          </BlurFade>
        </div>
      </div>

      <BlurFade delay={0.5} inView>
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-lato font-bold text-lg hover:bg-primary/80 transition-all duration-300"
          >
            Book a Free Consultation
            <ArrowRight size={18} />
          </a>
        </div>
      </BlurFade>
    </div>
  );
}
