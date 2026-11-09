"use client";

import { forwardRef, useRef } from "react";
import Link from "next/link";
import {
  Building2,
  Check,
  CreditCard,
  Globe,
  KeyRound,
  Monitor,
  Network,
  Printer,
  Store,
  UtensilsCrossed,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { SectionHeading } from "@/components/section-heading";
import { UrgentHelp } from "@/components/urgent-help";
import {
  businessAreas,
  businessPlan,
  businessPromises,
  businessSteps,
  industries,
  type BusinessArea,
  type Industry,
} from "@/lib/business";

const areaIcons: Record<BusinessArea["key"], LucideIcon> = {
  network: Network,
  devices: Printer,
  accounts: KeyRound,
};
const industryIcons: Record<Industry["key"], LucideIcon> = {
  food: UtensilsCrossed,
  retail: Store,
  office: Building2,
};

const quoteHref = "/contact?need=business";

const Node = forwardRef<HTMLDivElement, { icon: LucideIcon }>(({ icon: Icon }, ref) => (
  <div
    ref={ref}
    className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#111118] text-zinc-300"
  >
    <Icon className="size-5" />
  </div>
));
Node.displayName = "Node";

/** One internet connection split into three networks that never share traffic. */
function NetworkPlan() {
  const container = useRef<HTMLDivElement>(null);
  const internet = useRef<HTMLDivElement>(null);
  const firewall = useRef<HTMLDivElement>(null);
  const registers = useRef<HTMLDivElement>(null);
  const staff = useRef<HTMLDivElement>(null);
  const guests = useRef<HTMLDivElement>(null);

  const beam = {
    containerRef: container,
    pathColor: "#3b3b52",
    pathOpacity: 0.5,
    pathWidth: 1.5,
    gradientStartColor: "#5F98E7",
    gradientStopColor: "#3B82F6",
  };

  const lanes = [
    { ref: registers, icon: CreditCard, label: "Registers" },
    { ref: staff, icon: Monitor, label: "Staff" },
    { ref: guests, icon: Wifi, label: "Guests" },
  ];

  return (
    <figure>
      <div
        ref={container}
        aria-hidden
        className="relative flex h-[300px] w-full items-center justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-10 sm:px-10"
      >
        <div className="flex flex-col items-center gap-2">
          <Node ref={internet} icon={Globe} />
          <span className="font-lato text-xs text-zinc-400">Internet</span>
        </div>
        <div
          ref={firewall}
          className="z-10 flex size-20 shrink-0 items-center justify-center rounded-2xl border border-blue-500/40 bg-black font-anton text-2xl tracking-wide text-logo text-glow shadow-[0_0_48px_rgba(59,130,246,0.25)]"
        >
          SEF
        </div>
        <div className="flex h-full flex-col justify-between">
          {lanes.map((l) => (
            <div key={l.label} className="flex items-center gap-3">
              <Node ref={l.ref} icon={l.icon} />
              <span className="w-16 font-lato text-xs text-zinc-400">{l.label}</span>
            </div>
          ))}
        </div>

        <AnimatedBeam {...beam} fromRef={internet} toRef={firewall} duration={4.5} />
        <AnimatedBeam
          {...beam}
          fromRef={firewall}
          toRef={registers}
          curvature={-40}
          duration={5}
          delay={0.4}
        />
        <AnimatedBeam {...beam} fromRef={firewall} toRef={staff} duration={5.5} delay={0.8} />
        <AnimatedBeam {...beam} fromRef={firewall} toRef={guests} curvature={40} duration={6} delay={1.2} />
      </div>
      <figcaption className="mt-3 font-lato text-sm text-zinc-400">
        One internet connection, three separate networks. Guests never share a network with your card readers
        or office computers.
      </figcaption>
    </figure>
  );
}

export default function BusinessSetupSection() {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading
        as="h1"
        title="Business IT setup"
        intro="Networks, computers and accounts set up properly for restaurants, shops and small offices. Every job starts with a free walkthrough and a flat written quote, so you know the price before any work begins."
      >
        <Link
          href={quoteHref}
          className="shrink-0 rounded-md bg-blue-600 px-6 py-3 font-lato font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-colors hover:bg-blue-500"
        >
          Get a free quote
        </Link>
      </SectionHeading>

      <dl className="-mt-2 mb-14 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-white/10 py-6 lg:grid-cols-4">
        {businessPromises.map((p) => (
          <div key={p.key}>
            <dt className="font-lato font-bold text-white">{p.title}</dt>
            <dd className="mt-1 font-lato text-sm text-zinc-400">{p.detail}</dd>
          </div>
        ))}
      </dl>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <ul className="border-t border-white/10 lg:col-span-7">
          {businessAreas.map((a) => {
            const Icon = areaIcons[a.key];
            return (
              <li key={a.key} className="border-b border-white/10 py-6">
                <h2 className="flex items-center gap-3 font-lato text-lg font-bold text-white">
                  <Icon className="size-5 text-logo" aria-hidden />
                  {a.title}
                </h2>
                <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {a.items.map((item) => (
                    <li key={item} className="flex gap-2 font-lato text-sm leading-relaxed text-zinc-400">
                      <Check className="mt-0.5 size-4 shrink-0 text-logo" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="lg:col-span-5">
          <NetworkPlan />
        </div>
      </div>

      <section aria-labelledby="built-for" className="mt-24">
        <h2 id="built-for" className="font-anton text-3xl tracking-wide text-white">
          Built for
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {industries.map((ind) => {
            const Icon = industryIcons[ind.key];
            return (
              <li key={ind.key} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <Icon className="size-6 text-logo" aria-hidden />
                <h3 className="mt-4 font-anton text-xl tracking-wide text-white">{ind.title}</h3>
                <p className="mt-2 font-lato text-sm leading-relaxed text-zinc-400">{ind.detail}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="business-steps" className="mt-24">
        <h2 id="business-steps" className="font-anton text-3xl tracking-wide text-white">
          How a setup works
        </h2>
        <ol className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {businessSteps.map((step, i) => (
            <li key={step.title} className="border-t border-white/10 pt-6">
              <span
                aria-hidden
                className="font-anton text-5xl leading-none text-transparent [-webkit-text-stroke:1px_rgb(95_152_231_/_0.6)]"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 font-anton text-xl tracking-wide text-white">{step.title}</h3>
              <p className="mt-2 font-lato text-sm leading-relaxed text-zinc-400">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="business-plan"
        className="mt-24 grid grid-cols-1 gap-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:grid-cols-12 lg:items-center"
      >
        <div className="lg:col-span-5">
          <h2 id="business-plan" className="font-anton text-3xl tracking-wide text-white">
            {businessPlan.name}
          </h2>
          <p className="mt-3 font-lato leading-relaxed text-zinc-400">{businessPlan.detail}</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-5">
          {businessPlan.features.map((f) => (
            <li key={f} className="flex gap-2 font-lato text-sm text-zinc-300">
              <Check className="mt-0.5 size-4 shrink-0 text-logo" aria-hidden />
              {f}
            </li>
          ))}
        </ul>
        <div className="lg:col-span-2 lg:text-right">
          <Link
            href={quoteHref}
            className="inline-block rounded-md border border-white/15 px-5 py-3 font-lato font-bold text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
          >
            Ask for a quote
          </Link>
        </div>
      </section>

      <UrgentHelp
        className="mt-8"
        lead="Register won't connect, or the office is offline? Text me and say it's urgent."
      />
    </div>
  );
}
