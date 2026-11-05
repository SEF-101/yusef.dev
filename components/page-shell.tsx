import Link from "next/link";
import { bookingHref, bookingIsExternal } from "@/lib/site";

/** Wraps an inner page: a faint glow under the nav, page padding, and a closing call to action. */
export function PageShell({ children, cta = true }: { children: React.ReactNode; cta?: boolean }) {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-96 w-[70rem] max-w-[200vw] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"
      />
      <div className="pb-24 pt-16 md:pt-24">{children}</div>
      {cta ? <CtaBand /> : null}
    </div>
  );
}

export function CtaBand() {
  const buttonClass =
    "rounded-md bg-blue-600 px-6 py-3 font-lato font-bold text-white transition-colors hover:bg-blue-500";
  return (
    <div className="border-t border-white/5 bg-black">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-anton text-3xl tracking-wide text-white">Not sure what you need?</h2>
          <p className="mt-2 font-lato text-zinc-400">
            Tell me what&apos;s going on and you&apos;ll get a flat price. The first call is free.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {bookingIsExternal ? (
            <a href={bookingHref} target="_blank" rel="noopener noreferrer" className={buttonClass}>
              Book a free call
            </a>
          ) : (
            <Link href={bookingHref} className={buttonClass}>
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
    </div>
  );
}
