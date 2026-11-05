import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";
import { Safari } from "@/components/ui/safari";
import { SectionHeading } from "@/components/section-heading";
import { buildPhotos, featuredSite, homelab } from "@/lib/work";

export default function WorkSection() {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading
        as="h1" title="Work" />

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <a
          href={featuredSite.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl lg:col-span-8"
          aria-label={`Open ${featuredSite.name} in a new tab`}
        >
          <Safari
            url={featuredSite.displayUrl}
            imageSrc={featuredSite.image}
            className="size-full drop-shadow-[0_30px_60px_rgba(59,130,246,0.18)] transition-transform duration-500 group-hover:-translate-y-1"
          />
        </a>
        <div className="lg:col-span-4">
          <h3 className="font-anton text-3xl tracking-wide text-white">{featuredSite.name}</h3>
          <p className="mt-4 font-lato leading-relaxed text-zinc-400">{featuredSite.summary}</p>
          <a
            href={featuredSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex font-lato font-bold text-blue-300 underline-offset-4 hover:underline"
          >
            Visit {featuredSite.displayUrl}
          </a>
        </div>
      </div>

      {buildPhotos.length > 0 ? (
        <div className="mt-20">
          <h3 className="font-anton text-3xl tracking-wide text-white">PC builds</h3>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {buildPhotos.map((p) => (
              <div key={p.src} className="relative aspect-square overflow-hidden rounded-xl border border-white/10">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-4">
          <h3 className="font-anton text-3xl tracking-wide text-white">My homelab</h3>
          <p className="mt-4 font-lato leading-relaxed text-zinc-400">
            {homelab.length} self-hosted services I set up, secure and keep running at home. It&apos;s
            the same care I put into your computer or your site.
          </p>
        </div>
        <div className="relative min-w-0 overflow-hidden lg:col-span-8 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <Marquee pauseOnHover className="[--duration:45s] [--gap:1rem]">
            {homelab.map((s) => (
              <div
                key={s.name}
                className="flex w-64 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4"
              >
                <Image src={s.icon} alt="" width={40} height={40} className="size-10 object-contain" />
                <div>
                  <p className="font-lato font-bold text-white">{s.name}</p>
                  <p className="font-lato text-sm text-zinc-400">{s.detail}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
