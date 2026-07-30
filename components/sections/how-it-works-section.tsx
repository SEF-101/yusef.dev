"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { MessageSquare, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: "Talk",
    description:
      "We hop on a call or meet up and you tell me what you need. I'll ask questions, give you honest feedback, and put together a plan with a clear estimate. No pressure, no cost.",
  },
  {
    number: 2,
    icon: Code,
    title: "Build",
    description:
      "I design and develop your site. You'll see progress along the way and give feedback — I don't build in a black box and surprise you at the end.",
  },
  {
    number: 3,
    icon: Rocket,
    title: "Launch",
    description:
      "Your site goes live. I handle the domain, hosting, and all the technical stuff. And I stick around for support — I'm not going anywhere.",
  },
];

export default function HowItWorksSection() {
  return (
    <div className="container mx-auto px-4 relative">
      <AnimatedGridPattern
        className={cn(
          "absolute inset-0 text-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_60%)]"
        )}
        numSquares={30}
        maxOpacity={0.08}
        duration={3}
        width={60}
        height={60}
      />

      <div className="relative z-10">
        <BlurFade delay={0.1} inView>
          <h2 className="text-4xl md:text-5xl font-anton text-primary tracking-wide mb-4">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-primary mb-12" />
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, idx) => (
            <BlurFade key={idx} delay={0.15 + idx * 0.12} inView>
              <div className="relative">
                <div className="flex items-center gap-4 mb-5">
                  <div className="text-5xl font-anton text-primary/20">
                    <NumberTicker
                      value={step.number}
                      delay={0.3 + idx * 0.15}
                      className="text-5xl font-anton text-primary/30"
                    />
                  </div>
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <step.icon size={22} />
                  </div>
                  <h3 className="text-2xl font-anton text-primary/90 tracking-wide">{step.title}</h3>
                </div>
                <p className="text-gray-400 font-lato leading-relaxed">
                  {step.description}
                </p>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-6 lg:-right-8 text-gray-700 text-2xl">
                    &rarr;
                  </div>
                )}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}
