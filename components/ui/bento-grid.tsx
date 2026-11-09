import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Magic UI bento grid, restyled for this site's dark cards (no light theme, no
 * hover call-to-action button).
 */
interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)} {...props}>
      {children}
    </div>
  );
};

const BentoCard = ({ name, className, background, Icon, description, ...props }: BentoCardProps) => (
  <div
    className={cn(
      "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]",
      "transform-gpu [box-shadow:0_-20px_80px_-20px_#ffffff14_inset]",
      className,
    )}
    {...props}
  >
    <div aria-hidden className="absolute inset-0">
      {background}
    </div>
    <div className="pointer-events-none relative z-10 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/95 to-transparent p-6 pt-16">
      <div className="flex transform-gpu flex-col gap-1 transition-all duration-300 group-hover:-translate-y-1">
        <Icon className="size-7 text-logo" aria-hidden />
        <h3 className="mt-2 font-anton text-xl tracking-wide text-white">{name}</h3>
        <p className="max-w-md font-lato text-sm leading-relaxed text-zinc-400">{description}</p>
      </div>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
