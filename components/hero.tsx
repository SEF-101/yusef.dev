"use client";

import Link from "next/link";
import { LightRays } from "@/components/ui/light-rays";
import { TextAnimate } from "@/components/ui/text-animate";
import { bookingHref, bookingIsExternal, site } from "@/lib/site";
import { startingPrices, usd } from "@/lib/services";

/** price: null shows "free quote" instead of a starting price. */
const doors: { href: string; name: string; price: number | null; detail: string }[] = [
  {
    href: "/websites",
    name: "Websites",
    price: startingPrices.websites,
    detail: "Custom-coded, mobile-ready and yours to keep",
  },
  {
    href: "/it-help",
    name: "IT help",
    price: startingPrices.itHelp,
    detail: "Slow computers, Wi-Fi, networking and PC builds",
  },
  {
    href: "/business",
    name: "Business IT setup",
    price: null,
    detail: "Networks, computers and POS for shops, offices and restaurants",
  },
];

export default function Hero() {
  const primaryClass =
    "rounded-md bg-blue-600 px-6 py-3 font-lato font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-colors hover:bg-blue-500";

  return (
    <div className="relative isolate overflow-hidden bg-black">
      <LightRays count={6} color="rgba(59, 130, 246, 0.22)" blur={44} speed={16} length="85vh" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--background)]" />

      <div className="container relative mx-auto grid min-h-[calc(100svh-4rem)] grid-cols-1 items-center gap-14 px-4 py-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <h1 className="font-anton text-5xl leading-[1.05] tracking-wide text-white sm:text-6xl xl:text-7xl">
            <TextAnimate as="span" by="word" animation="blurInUp" duration={0.5} once className="block">
              I build websites
            </TextAnimate>
            <TextAnimate
              as="span"
              by="word"
              animation="blurInUp"
              duration={0.5}
              delay={0.35}
              once
              className="block"
            >
              and fix computers.
            </TextAnimate>
          </h1>

          <p className="mt-7 max-w-xl font-lato text-lg leading-relaxed text-zinc-400">
            I&apos;m Yusef, a software engineer at a Fortune 500 medical software company. On weekends I
            hand-code websites for small businesses and give honest, patient IT help to anyone whose tech is
            acting up. {site.serviceArea}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {bookingIsExternal ? (
              <a href={bookingHref} target="_blank" rel="noopener noreferrer" className={primaryClass}>
                Book a free call
              </a>
            ) : (
              <Link href={bookingHref} className={primaryClass}>
                Book a free call
              </Link>
            )}
            <Link
              href="/contact"
              className="rounded-md border border-white/15 px-6 py-3 font-lato font-bold text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              Get a quote
            </Link>
          </div>
        </div>

        <nav aria-label="Services and starting prices" className="lg:col-span-5">
          <ul className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            {doors.map((d) => (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className="group flex items-center justify-between gap-6 px-6 py-6 transition-colors hover:bg-white/[0.04] focus-visible:bg-white/[0.04] sm:px-8"
                >
                  <span>
                    <span className="block font-anton text-2xl tracking-wide text-white transition-colors group-hover:text-logo">
                      {d.name}
                    </span>
                    <span className="mt-1 block font-lato text-sm text-zinc-400">{d.detail}</span>
                  </span>
                  <span className="shrink-0 text-right">
                    <span className="block font-lato text-xs text-zinc-400">
                      {d.price === null ? "free" : "from"}
                    </span>
                    <span className="block font-anton text-3xl text-logo">
                      {d.price === null ? "Quote" : usd(d.price)}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
