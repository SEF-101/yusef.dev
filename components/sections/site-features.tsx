"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import {
  BarChart3,
  CalendarDays,
  FolderGit2,
  Gauge,
  Mail,
  MessageSquare,
  Search,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";
import { AnimatedList } from "@/components/ui/animated-list";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { lighthouse } from "@/lib/work";
import { cn } from "@/lib/utils";

/* ---------- Inbox: example messages arriving from a site's forms ---------- */

type Note = { title: string; body: string; time: string; icon: LucideIcon; color: string };

const notes: Note[] = [
  {
    title: "New message",
    body: "Do you make custom birthday cakes?",
    time: "2m ago",
    icon: Mail,
    color: "#3B82F6",
  },
  {
    title: "Booking request",
    body: "Table for 6, Friday at 7 PM",
    time: "9m ago",
    icon: CalendarDays,
    color: "#0EA5E9",
  },
  {
    title: "Quote request",
    body: "Can you cater 40 people on Saturday?",
    time: "25m ago",
    icon: MessageSquare,
    color: "#6366F1",
  },
  { title: "New order", body: "2 gift cards, $50 each", time: "1h ago", icon: ShoppingBag, color: "#14B8A6" },
];

function Notification({ title, body, time, icon: Icon, color }: Note) {
  return (
    <figure className="mx-auto w-full max-w-sm rounded-2xl border border-white/10 bg-[#111118]/90 p-3.5 backdrop-blur">
      <div className="flex items-center gap-3">
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${color}26`, color }}
        >
          <Icon className="size-4.5" />
        </span>
        <div className="min-w-0 font-lato">
          <figcaption className="flex items-center gap-1.5 text-sm font-bold text-white">
            {title}
            <span className="font-normal text-zinc-500">· {time}</span>
          </figcaption>
          <p className="truncate text-sm text-zinc-400">{body}</p>
        </div>
      </div>
    </figure>
  );
}

function InboxGraphic() {
  const looped = Array.from({ length: 6 }, () => notes).flat();
  return (
    <div className="absolute inset-x-0 top-0 h-[78%] overflow-hidden px-6 pt-6 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]">
      <AnimatedList delay={1800}>
        {looped.map((n, i) => (
          <Notification key={`${n.title}-${i}`} {...n} />
        ))}
      </AnimatedList>
    </div>
  );
}

/* ---------- Search: a search box typing, with the site as the top result ---------- */

function SearchGraphic() {
  return (
    <div className="absolute inset-x-0 top-0 flex flex-col gap-3 px-6 pt-7 font-lato">
      <div className="flex h-11 items-center gap-2.5 rounded-full border border-white/10 bg-[#111118] px-4 text-sm text-zinc-200">
        <Search className="size-4 shrink-0 text-zinc-500" />
        <TypingAnimation
          words={["your business hours", "your business menu", "your business phone number"]}
          loop
          typeSpeed={70}
          pauseDelay={1600}
          className="truncate"
        />
      </div>
      <div className="rounded-2xl border border-white/10 bg-[#111118]/80 p-4">
        <p className="text-xs text-zinc-500">yourbusiness.com</p>
        <p className="mt-1 text-base font-bold text-blue-300">Your Business: Hours, Menu &amp; Directions</p>
        <p className="mt-1 text-sm text-zinc-400">
          Open today until 6 PM. Order ahead, see the menu or call.
        </p>
      </div>
    </div>
  );
}

/* ---------- Speed: real Lighthouse scores for the campaign site ---------- */

function ScoreGauge({ label, value }: { label: string; value: number }) {
  // Start empty and fill once the card scrolls into view, so the gauges visibly sweep up.
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <AnimatedCircularProgressBar
        value={inView ? value : 0}
        gaugePrimaryColor="#22C55E"
        gaugeSecondaryColor="rgba(255,255,255,0.08)"
        className="size-[4.5rem] font-anton text-lg text-green-300"
      />
      <span className="text-center font-lato text-xs text-zinc-400">{label}</span>
    </div>
  );
}

function SpeedGraphic() {
  return (
    <div className="absolute inset-x-0 top-0 grid grid-cols-4 gap-2 px-5 pt-8">
      <ScoreGauge label="Speed" value={lighthouse.performance} />
      <ScoreGauge label="Accessibility" value={lighthouse.accessibility} />
      <ScoreGauge label="Best practices" value={lighthouse.bestPractices} />
      <ScoreGauge label="SEO" value={lighthouse.seo} />
    </div>
  );
}

/* ---------- Ownership: the site's code and domain belong to the client ---------- */

const tree = [
  { depth: 0, name: "yourbusiness.com/", folder: true },
  { depth: 1, name: "app/", folder: true },
  { depth: 2, name: "menu/", folder: true },
  { depth: 2, name: "contact/", folder: true },
  { depth: 1, name: "public/", folder: true },
];

function OwnershipGraphic() {
  return (
    <div className="absolute inset-x-0 top-0 px-6 pt-6">
      <div className="flex flex-wrap gap-2 font-lato text-xs">
        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-1 text-green-300">
          Domain in your name
        </span>
        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-1 text-green-300">
          Code is yours
        </span>
      </div>
      <div className="mt-3 rounded-2xl border border-white/10 bg-[#111118]/80 px-4 py-3 font-mono text-[13px] leading-6">
        {tree.map((t) => (
          <div key={t.name} style={{ paddingLeft: t.depth * 18 }}>
            <span className={cn(t.folder ? "text-blue-300" : "text-zinc-400")}>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Analytics: a week of visits drawn as bars (illustration) ---------- */

const week = [
  { d: "M", v: 42 },
  { d: "T", v: 55 },
  { d: "W", v: 48 },
  { d: "T", v: 70 },
  { d: "F", v: 88 },
  { d: "S", v: 100 },
  { d: "S", v: 76 },
];

function AnalyticsGraphic() {
  return (
    <div className="absolute inset-x-0 top-0 px-6 pt-7 font-lato">
      <div className="rounded-2xl border border-white/10 bg-[#111118]/80 p-4">
        <p className="text-xs text-zinc-500">Visitors this week</p>
        <div className="mt-3 flex h-28 gap-2">
          {week.map((w, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex w-full flex-1 items-end">
                <div
                  className="w-full origin-bottom animate-grow-bar rounded-t-md bg-gradient-to-t from-blue-700 to-blue-400"
                  style={{ height: `${w.v}%`, animationDelay: `${i * 90}ms` }}
                />
              </div>
              <span className="text-[11px] text-zinc-500">{w.d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SiteFeatures() {
  return (
    <section aria-labelledby="site-features">
      <h2 id="site-features" className="font-anton text-3xl tracking-wide text-white md:text-4xl">
        What every site comes with
      </h2>
      <p className="mt-3 max-w-2xl font-lato text-zinc-400">
        The parts that make a small business site actually work, whichever package you pick.
      </p>

      <BentoGrid className="mt-10">
        <BentoCard
          name="Messages straight to your inbox"
          description="Contact forms, bookings and orders land in your email, not a dashboard you'll forget to check."
          Icon={Mail}
          background={<InboxGraphic />}
          className="lg:col-span-2"
        />
        <BentoCard
          name="Easy to find on Google"
          description="Page titles, descriptions and a sitemap set up so search engines understand your site."
          Icon={Search}
          background={<SearchGraphic />}
          className="lg:col-span-1"
        />
        <BentoCard
          name="Fast on any phone"
          description={`The campaign site I built scores ${lighthouse.performance} for speed and ${lighthouse.seo} for SEO on Google's Lighthouse test for phones.`}
          Icon={Gauge}
          background={<SpeedGraphic />}
          className="lg:col-span-1"
        />
        <BentoCard
          name="Yours to keep"
          description="The domain is registered in your name and you get the code. No lock-in, ever."
          Icon={FolderGit2}
          background={<OwnershipGraphic />}
          className="lg:col-span-1"
        />
        <BentoCard
          name="See who's visiting"
          description="Simple visitor stats show which pages people read and how they found you."
          Icon={BarChart3}
          background={<AnalyticsGraphic />}
          className="lg:col-span-1"
        />
      </BentoGrid>
    </section>
  );
}
