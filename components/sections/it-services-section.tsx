"use client";

import { forwardRef, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Cable, Laptop, Monitor, Printer, Router, Smartphone, type LucideIcon } from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SectionHeading } from "@/components/section-heading";
import { homeTechCare, hourlyRate, itServices, usd } from "@/lib/services";

type Mode = "remote" | "inPerson";

const Node = forwardRef<HTMLDivElement, { icon: LucideIcon }>(({ icon: Icon }, ref) => (
  <div
    ref={ref}
    className="z-10 flex size-12 items-center justify-center rounded-full border border-white/10 bg-[#111118] text-zinc-300"
  >
    <Icon className="size-5" />
  </div>
));
Node.displayName = "Node";

function DeviceMap() {
  const container = useRef<HTMLDivElement>(null);
  const center = useRef<HTMLDivElement>(null);
  const laptop = useRef<HTMLDivElement>(null);
  const desktop = useRef<HTMLDivElement>(null);
  const printer = useRef<HTMLDivElement>(null);
  const phone = useRef<HTMLDivElement>(null);
  const router = useRef<HTMLDivElement>(null);
  const cable = useRef<HTMLDivElement>(null);

  const beam = {
    containerRef: container,
    toRef: center,
    pathColor: "#3b3b52",
    pathOpacity: 0.5,
    pathWidth: 1.5,
    gradientStartColor: "#5F98E7",
    gradientStopColor: "#3B82F6",
  };

  return (
    <figure>
      <div
        ref={container}
        aria-hidden
        className="relative flex h-[300px] w-full items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-10 sm:px-12"
      >
        <div className="flex h-full flex-col justify-between">
          <Node ref={laptop} icon={Laptop} />
          <Node ref={desktop} icon={Monitor} />
          <Node ref={printer} icon={Printer} />
        </div>
        <div
          ref={center}
          className="z-10 flex size-20 items-center justify-center rounded-2xl border border-blue-500/40 bg-black font-anton text-2xl tracking-wide text-logo text-glow shadow-[0_0_48px_rgba(59,130,246,0.25)]"
        >
          SEF
        </div>
        <div className="flex h-full flex-col justify-between">
          <Node ref={phone} icon={Smartphone} />
          <Node ref={router} icon={Router} />
          <Node ref={cable} icon={Cable} />
        </div>

        <AnimatedBeam {...beam} fromRef={laptop} curvature={-50} duration={5} />
        <AnimatedBeam {...beam} fromRef={desktop} duration={5.5} delay={0.6} />
        <AnimatedBeam {...beam} fromRef={printer} curvature={50} duration={6} delay={1.2} />
        <AnimatedBeam {...beam} fromRef={phone} curvature={-50} duration={5.5} delay={0.3} reverse />
        <AnimatedBeam {...beam} fromRef={router} duration={5} delay={0.9} reverse />
        <AnimatedBeam {...beam} fromRef={cable} curvature={50} duration={6} delay={1.5} reverse />
      </div>
      <figcaption className="mt-3 font-lato text-sm text-zinc-400">
        Laptops, desktops, printers, phones, Wi-Fi and wired networks. If it plugs in, connects or signs in, I can help.
      </figcaption>
    </figure>
  );
}

export default function ITServicesSection() {
  const [mode, setMode] = useState<Mode>("remote");

  return (
    <div className="container mx-auto px-4">
      <SectionHeading
        as="h1"
        title="IT help"
        intro="Flat prices for computers, Wi-Fi and networks, quoted before I touch anything. Most fixes work over a secure screen share that you start; cable runs and repairs happen in person."
      >
        <ToggleGroup
          type="single"
          variant="outline"
          value={mode}
          onValueChange={(v) => v && setMode(v as Mode)}
          aria-label="Show prices for"
          className="shrink-0 font-lato"
        >
          <ToggleGroupItem
            value="remote"
            className="h-10 px-5 data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            Remote
          </ToggleGroupItem>
          <ToggleGroupItem
            value="inPerson"
            className="h-10 px-5 data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            In person
          </ToggleGroupItem>
        </ToggleGroup>
      </SectionHeading>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ul className="border-t border-white/10">
            {itServices.map((s) => {
              const price = mode === "remote" ? s.remote : s.inPerson;
              return (
                <li key={s.name} className="grid grid-cols-[1fr_auto] gap-x-8 border-b border-white/10 py-6">
                  <div>
                    <h3 className="font-lato text-lg font-bold text-white">{s.name}</h3>
                    <p className="mt-1.5 max-w-prose font-lato text-sm leading-relaxed text-zinc-400">
                      {s.detail}
                    </p>
                  </div>
                  <div className="min-w-24 text-right">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div
                        key={`${s.name}-${mode}`}
                        initial={{ y: 14, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -14, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        {price === null ? (
                          <span className="font-lato text-sm text-zinc-400">In person only</span>
                        ) : (
                          <>
                            <span className="block font-anton text-3xl text-logo">{usd(price)}</span>
                            {s.priceSuffix ? (
                              <span className="font-lato text-xs text-zinc-400">{s.priceSuffix}</span>
                            ) : null}
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 font-lato text-sm leading-relaxed text-zinc-400">
            Something not on the list? It&apos;s {usd(hourlyRate)}/hour, and I&apos;ll quote it before
            I start. Data recovery from a failing drive is specialist work, so I&apos;ll point you to
            someone who does it every day.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-5">
          <DeviceMap />
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-anton text-xl tracking-wide text-white">{homeTechCare.name}</h3>
              <p className="shrink-0">
                <span className="font-anton text-3xl text-logo">{usd(homeTechCare.price)}</span>
                <span className="font-lato text-sm text-zinc-400">/month</span>
              </p>
            </div>
            <p className="mt-3 font-lato text-sm leading-relaxed text-zinc-400">{homeTechCare.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
