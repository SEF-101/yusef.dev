"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import { Android } from "@/components/ui/android";
import { BlurFade } from "@/components/ui/blur-fade";
import { Iphone } from "@/components/ui/iphone";
import { Safari } from "@/components/ui/safari";
import { cn } from "@/lib/utils";

const screens = ["iPhone", "Android", "tablet", "laptop"];

export const mobilePromises = [
  "Built phone-first",
  "Tested on iPhone and Android",
  "Readable without zooming",
  "Buttons sized for thumbs",
];

/** "Looks right on every ___", with the last word cycling through device types. */
export function RotatingScreen({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % screens.length), 2200);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <span className={cn("relative inline-flex overflow-hidden align-bottom", className)}>
      {/* The widest word holds the space so the line never jumps. */}
      <span aria-hidden className="invisible">
        Android
      </span>
      <AnimatePresence initial={false}>
        <motion.span
          key={screens[i]}
          className="absolute inset-0 text-logo"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {screens[i]}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">phone, tablet and laptop</span>
    </span>
  );
}

/**
 * This site (sef101.com) on a laptop, an iPhone and an Android phone. The screenshots live in
 * public/work/sef-*.jpg; retake them after big changes to the home page.
 * `dark` switches the Magic UI device frames to their dark finish.
 */
export function DeviceShowcase({ className, caption = true }: { className?: string; caption?: boolean }) {
  return (
    <figure className={cn("dark", className)}>
      <div className="relative px-[7%] pb-[24%] pt-2">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[10%] top-[15%] bottom-[10%] -z-10 rounded-full bg-blue-600/20 blur-3xl"
        />
        <BlurFade inView>
          <Safari
            url="sef101.com"
            imageSrc="/work/sef-desktop.jpg"
            className="overflow-hidden rounded-xl ring-1 ring-white/10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          />
        </BlurFade>

        <BlurFade inView delay={0.25} direction="up" className="absolute bottom-0 right-0 w-[23%]">
          <div className="animate-float drop-shadow-[0_24px_40px_rgba(0,0,0,0.7)]">
            <Iphone src="/work/sef-iphone.jpg" />
          </div>
        </BlurFade>

        <BlurFade inView delay={0.4} direction="up" className="absolute bottom-[3%] left-0 w-[20%]">
          <div className="animate-float drop-shadow-[0_24px_40px_rgba(0,0,0,0.7)] [animation-delay:-3.5s]">
            <Android src="/work/sef-android.jpg" width={380} height={830} className="h-auto w-full" />
          </div>
        </BlurFade>
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center font-lato text-sm text-zinc-400">
          This site on a laptop, an iPhone and an Android phone.
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Heading, promise list and devices: the "works on phones" section. */
export function MobileReadySection({ cta = false }: { cta?: boolean }) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <h2 className="font-anton text-4xl leading-tight tracking-wide text-white md:text-5xl">
          Looks right on every <RotatingScreen />
        </h2>
        <p className="mt-5 max-w-md font-lato text-lg leading-relaxed text-zinc-400">
          Many of your customers will find you on their phones. I build every site for the small screen first,
          then test it on iPhone, Android, tablets and laptops before it goes live.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {mobilePromises.map((p) => (
            <li key={p} className="flex items-center gap-2 font-lato text-sm text-zinc-300">
              <span className="flex size-5 items-center justify-center rounded-full bg-blue-500/15">
                <Check className="size-3.5 text-logo" aria-hidden />
              </span>
              {p}
            </li>
          ))}
        </ul>
        {cta ? (
          <Link
            href="/websites"
            className="mt-10 inline-flex rounded-md border border-white/15 px-6 py-3 font-lato font-bold text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
          >
            See website packages
          </Link>
        ) : null}
      </div>
      <DeviceShowcase className="lg:col-span-7" />
    </div>
  );
}
