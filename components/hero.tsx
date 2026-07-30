"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { WordRotate } from "@/components/ui/word-rotate";
import { CoolMode } from "@/components/ui/cool-mode";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 overflow-hidden">
      <DotPattern
        className={cn(
          "text-white/[0.07]",
          "[mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
        )}
        width={24}
        height={24}
        cr={1.2}
      />

      <div className="relative z-10 max-w-3xl text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-anton leading-tight text-white">
          I&apos;m Yusef.
          <br />
          <span className="text-primary inline-flex items-center gap-3">
            I Build{" "}
            <WordRotate
              words={["Websites", "Web Apps", "Online Stores"]}
              duration={3000}
              className="text-primary inline-block"
            />
          </span>
          <br />
          <span className="text-3xl md:text-5xl text-gray-400">
            & Solve IT Problems
          </span>
        </h1>

        <p className="text-lg md:text-xl font-lato text-gray-500 max-w-xl mx-auto">
          Custom websites for businesses and individuals who need a real online presence.
          IT support for anyone who needs tech problems fixed right.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <CoolMode options={{ particleCount: 12, size: 10, speedHorz: 5, speedUp: 15 }}>
            <a href="#services">
              <ShimmerButton
                background="rgba(59, 130, 246, 0.9)"
                shimmerColor="#93c5fd"
                shimmerSize="0.06em"
                borderRadius="8px"
                className="px-8 py-3 text-lg font-lato font-bold"
              >
                See Services
              </ShimmerButton>
            </a>
          </CoolMode>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/10 text-gray-300 rounded-lg font-lato font-bold text-lg hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
