import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";
import { LightRays } from "@/components/ui/light-rays";
import { TextAnimate } from "@/components/ui/text-animate";
import { site, smsHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coming soon",
  description:
    "SEF, the Software & Electronics Firm: custom websites, IT help and business IT setup. Coming soon.",
};

/**
 * Shown in place of every page while the gate in middleware.ts is on. People who scan the
 * business card land here, so the ways to reach Yusef stay front and center.
 */
export default function ComingSoonPage() {
  const initial = "text-logo [text-shadow:0_0_8px_rgba(59,130,246,0.6)]";

  return (
    <main className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-black px-4 py-20 text-center">
      <LightRays count={6} color="rgba(59, 130, 246, 0.22)" blur={44} speed={16} length="85vh" />

      <h1 className="sr-only">SEF is coming soon</h1>
      <p
        aria-hidden
        className="font-anton text-[7rem] leading-none tracking-wide text-logo text-glow sm:text-[10rem]"
      >
        SEF
      </p>
      <p className="mt-4 font-lato text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 sm:text-sm">
        <span className={initial}>S</span>oftware &amp; <span className={initial}>E</span>lectronics{" "}
        <span className={initial}>F</span>irm
      </p>

      <TextAnimate
        as="p"
        by="word"
        animation="blurInUp"
        duration={0.6}
        delay={0.2}
        once
        className="mt-12 font-anton text-4xl tracking-wide text-white sm:text-5xl"
      >
        Coming soon
      </TextAnimate>
      <p className="mt-4 max-w-md font-lato text-lg leading-relaxed text-zinc-400">
        Custom websites, IT help and business IT setup. The full site is almost ready. In the meantime, reach
        me here.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-lato font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-colors hover:bg-blue-500"
        >
          <Mail className="size-4" aria-hidden />
          {site.email}
        </a>
        {smsHref ? (
          <a
            href={smsHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-3 font-lato font-bold text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
          >
            <MessageSquare className="size-4" aria-hidden />
            Text {site.textNumber}
          </a>
        ) : null}
      </div>
    </main>
  );
}
