import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  intro,
  as: Heading = "h2",
  className,
  children,
}: {
  title: string;
  intro?: React.ReactNode;
  /** Use "h1" when the heading is the title of the page. */
  as?: "h1" | "h2";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-2xl">
        <Heading className="font-anton text-4xl tracking-wide text-primary md:text-5xl">{title}</Heading>
        <div className="mt-4 h-1 w-16 bg-primary" />
        {intro ? (
          <p className="mt-6 font-lato text-lg leading-relaxed text-zinc-400">{intro}</p>
        ) : null}
      </div>
      {children}
    </div>
  );
}
