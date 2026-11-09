import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";
import { Iphone } from "@/components/ui/iphone";
import { Safari } from "@/components/ui/safari";
import { SectionHeading } from "@/components/section-heading";
import { buildPhotos, featuredSite, homelab, moreWork } from "@/lib/work";

export default function WorkSection() {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading as="h1" title="Work" />

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <a
          href={featuredSite.url}
          target="_blank"
          rel="noopener noreferrer"
          className="dark group relative block rounded-xl pb-[9%] lg:col-span-8"
          aria-label={`Open ${featuredSite.name} in a new tab`}
        >
          <Safari
            url={featuredSite.displayUrl}
            imageSrc={featuredSite.image}
            className="w-[94%] drop-shadow-[0_30px_60px_rgba(59,130,246,0.18)] transition-transform duration-500 group-hover:-translate-y-1"
          />
          <div className="absolute bottom-0 right-0 w-[21%] drop-shadow-[0_24px_40px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:-translate-y-2">
            <Iphone src="/work/alderman-iphone.jpg" />
          </div>
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

      {moreWork.length > 0 ? (
        <ul className="mt-16 space-y-6">
          {moreWork.map((w) => (
            <li
              key={w.name}
              className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-10"
            >
              <div className="lg:col-span-5">
                <div className="flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-lato text-xs font-bold text-blue-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-anton text-3xl tracking-wide text-white">{w.name}</h3>
              </div>
              <div className="lg:col-span-7">
                <p className="font-lato text-lg leading-relaxed text-zinc-400">{w.summary}</p>
                {w.url ? (
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex font-lato font-bold text-blue-300 underline-offset-4 hover:underline"
                  >
                    Visit {w.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {buildPhotos.length > 0 ? (
        <div className="mt-20">
          <h3 className="font-anton text-3xl tracking-wide text-white">PC builds</h3>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {buildPhotos.map((p) => (
              <div
                key={p.src}
                className="relative aspect-square overflow-hidden rounded-xl border border-white/10"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-4">
          <h3 className="font-anton text-3xl tracking-wide text-white">My homelab</h3>
          <p className="mt-4 font-lato leading-relaxed text-zinc-400">
            {homelab.length} self-hosted services I set up, secure and keep running at home. It&apos;s the
            same care I put into your computer or your site.
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
