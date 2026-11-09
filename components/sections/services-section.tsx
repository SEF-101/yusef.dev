import { Check } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MobileReadySection } from "@/components/device-showcase";
import { SectionHeading } from "@/components/section-heading";
import SiteFeatures from "@/components/sections/site-features";
import { NumberTicker } from "@/components/ui/number-ticker";
import { carePlans, hourlyRate, usd, webPackages } from "@/lib/services";
import { cn } from "@/lib/utils";

export default function WebsitesSection() {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading
        as="h1"
        title="Websites"
        intro="Hand-coded sites for small businesses. No templates and no page builders: one flat price, a free call to plan it, and progress you can see every weekend."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {webPackages.map((p) => (
          <article
            key={p.name}
            className={cn(
              "relative flex flex-col overflow-hidden rounded-2xl border p-8",
              p.featured ? "border-blue-500/30 bg-blue-500/[0.04]" : "border-white/10 bg-white/[0.02]",
            )}
          >
            {p.featured ? <BorderBeam size={140} duration={9} colorFrom="#5F98E7" colorTo="#013781" /> : null}

            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-anton text-2xl tracking-wide text-white">{p.name}</h3>
              {p.featured ? (
                <span className="rounded-full border border-blue-400/30 px-3 py-1 font-lato text-xs text-blue-200">
                  Best fit for most businesses
                </span>
              ) : null}
            </div>
            <p className="mt-3 font-lato leading-relaxed text-zinc-400">{p.summary}</p>

            <p className="mt-8 flex items-baseline gap-2">
              {p.from ? <span className="font-lato text-sm text-zinc-400">from</span> : null}
              <span className="sr-only">{usd(p.price)}</span>
              <span aria-hidden className="font-anton text-5xl text-logo">
                $<NumberTicker value={p.price} className="tracking-normal text-logo" />
              </span>
            </p>
            <p className="mt-2 font-lato text-sm text-zinc-400">{p.priceNote ?? "One flat price"}</p>

            <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 font-lato text-sm text-zinc-300">
                  <Check className="mt-0.5 size-4 shrink-0 text-logo" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section aria-label="Built for phones" className="mt-28">
        <MobileReadySection />
      </section>

      <div className="mt-28">
        <SiteFeatures />
      </div>

      <div className="mt-28 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h3 className="font-anton text-3xl tracking-wide text-white">Care plans</h3>
          <p className="mt-4 font-lato leading-relaxed text-zinc-400">
            While I host your site, a care plan keeps it fast, secure and up to date, and covers your edits.
            You can leave any time: the domain is in your name and you get the code.
          </p>
          <p className="mt-4 font-lato text-sm leading-relaxed text-zinc-400">
            Extra edits are {usd(hourlyRate)}/hour. Builds are 50% up front and 50% at launch.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {carePlans.map((c) => (
            <div key={c.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-anton text-xl tracking-wide text-white">{c.name}</h4>
                <p className="shrink-0">
                  <span className="font-anton text-3xl text-logo">{usd(c.price)}</span>
                  <span className="font-lato text-sm text-zinc-400">/month</span>
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                {c.features.map((f) => (
                  <li key={f} className="flex gap-3 font-lato text-sm text-zinc-300">
                    <Check className="mt-0.5 size-4 shrink-0 text-logo" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
