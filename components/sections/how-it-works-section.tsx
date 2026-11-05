import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    title: "Talk",
    body: "A free 15-minute call. You tell me what's going on, and you get a flat price before any work starts. No pressure and no cost.",
  },
  {
    title: "Fix or build",
    body: "IT jobs happen on a weekend, over screen share or in person. For websites, you see progress and give feedback along the way.",
  },
  {
    title: "Follow up",
    body: "You get a receipt and a short note on what I did. Websites launch with a care plan, so I'm still around when you need a change.",
  },
];

export default function HowItWorksSection() {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading title="How it works" />
      <ol className="grid gap-10 md:grid-cols-3 md:gap-12">
        {steps.map((step, i) => (
          <li key={step.title} className="relative border-t border-white/10 pt-8">
            <span
              aria-hidden
              className="font-anton text-6xl leading-none text-transparent [-webkit-text-stroke:1px_rgb(95_152_231_/_0.6)]"
            >
              {i + 1}
            </span>
            <h3 className="mt-5 font-anton text-2xl tracking-wide text-white">{step.title}</h3>
            <p className="mt-3 font-lato leading-relaxed text-zinc-400">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
