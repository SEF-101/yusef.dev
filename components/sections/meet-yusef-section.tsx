import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

const facts = [
  { title: "B.S. Software Engineering", detail: "Iowa State University" },
  { title: "Working in IT since 2022", detail: "Professional IT support and software development" },
  { title: "One person, start to finish", detail: "The person you talk to is the person doing the work" },
];

export default function MeetYusefSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="relative mx-auto w-full max-w-sm lg:col-span-4">
          <div
            aria-hidden
            className="absolute inset-x-10 bottom-10 top-20 rounded-full bg-blue-600/20 blur-3xl"
          />
          <Image
            src="/transparent.png"
            alt="Yusef, the founder of SEF"
            width={1709}
            height={1967}
            sizes="(min-width: 1024px) 30vw, 80vw"
            className="relative h-auto w-full [mask-composite:intersect] [mask-image:linear-gradient(to_bottom,black_70%,transparent),linear-gradient(to_right,transparent,black_20%)]"
          />
        </div>

        <div className="lg:col-span-8">
          <SectionHeading
        as="h1" title="Meet Yusef" className="mb-8" />
          <div className="max-w-2xl space-y-4 font-lato text-lg leading-relaxed text-zinc-400">
            <p>
              I studied software engineering at Iowa State and have worked in IT professionally since
              2022. SEF, the Software &amp; Electronics Firm, is my weekend business.
            </p>
            <p>
              I write every site by hand and explain every fix in plain English. If something&apos;s
              not worth fixing, I&apos;ll tell you that too.
            </p>
          </div>
          <dl className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.title}>
                <dt className="font-lato font-bold text-white">{f.title}</dt>
                <dd className="mt-1 font-lato text-sm text-zinc-400">{f.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
