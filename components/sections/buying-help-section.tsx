import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";
import { SectionHeading } from "@/components/section-heading";
import { buyingHelp, usd } from "@/lib/services";

export default function BuyingHelpSection() {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading
        as="h1"
        title="Buying help"
        intro="Shopping for a new laptop or computer? Tell me how you'll use it and what you want to spend. I'll find the right one, and you'll skip the extended warranty pitch."
      />

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <ul className="border-t border-white/10 lg:col-span-7">
          {buyingHelp.map((b) => (
            <li key={b.name} className="grid grid-cols-[1fr_auto] gap-x-8 border-b border-white/10 py-6">
              <div>
                <h3 className="font-lato text-lg font-bold text-white">
                  {b.name}
                  <span className="ml-3 font-normal text-sm text-zinc-400">{b.where}</span>
                </h3>
                <p className="mt-1.5 max-w-prose font-lato text-sm leading-relaxed text-zinc-400">{b.detail}</p>
              </div>
              <span className="font-anton text-3xl text-logo">{usd(b.price)}</span>
            </li>
          ))}
        </ul>

        <figure className="min-w-0 lg:col-span-5">
          <Terminal className="max-w-none overflow-x-auto border-white/10 bg-black/60">
            <TypingAnimation>$ sef laptop-match</TypingAnimation>
            <AnimatedSpan className="text-zinc-300">
              <span>? Budget: up to $800</span>
            </AnimatedSpan>
            <AnimatedSpan className="text-zinc-300">
              <span>? Mostly for: school, streaming, calls</span>
            </AnimatedSpan>
            <AnimatedSpan className="text-blue-400">
              <span>✔ Ruling out models with 8 GB of RAM</span>
            </AnimatedSpan>
            <AnimatedSpan className="text-blue-400">
              <span>✔ Battery that lasts a full school day</span>
            </AnimatedSpan>
            <AnimatedSpan className="text-blue-400">
              <span>✔ Checking this week&apos;s prices</span>
            </AnimatedSpan>
            <TypingAnimation className="text-logo">→ Your shortlist of 3 is in your inbox.</TypingAnimation>
          </Terminal>
          <figcaption className="mt-3 font-lato text-sm text-zinc-400">
            An example Laptop Match, from my side of the call.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
