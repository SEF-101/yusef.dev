import { MessageSquareText, Siren } from "lucide-react";
import { emergencyFee, usd } from "@/lib/services";
import { site, smsHref } from "@/lib/site";

/** "Urgent? Text me" card with the emergency fee. Hidden when there's no text number. */
export function UrgentHelp({
  lead = "Computer dead before a deadline, or the Wi-Fi down when you need it? Text me and say it's urgent.",
  className = "",
}: {
  lead?: string;
  className?: string;
}) {
  if (!smsHref) return null;

  return (
    <section
      aria-labelledby="urgent-help"
      className={`rounded-2xl border border-blue-500/40 bg-blue-500/[0.06] p-6 shadow-[0_0_48px_rgba(59,130,246,0.12)] ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h2 id="urgent-help" className="flex items-center gap-3 font-anton text-2xl tracking-wide text-white">
          <Siren className="size-5 text-logo" aria-hidden />
          Urgent?
        </h2>
        <p className="shrink-0 text-right">
          <span className="block font-anton text-3xl leading-none text-logo">+{usd(emergencyFee)}</span>
          <span className="font-lato text-xs text-zinc-400">emergency fee</span>
        </p>
      </div>
      <p className="mt-3 font-lato text-sm leading-relaxed text-zinc-400">
        {lead} If I can take it sooner, it jumps the line and the {usd(emergencyFee)} emergency fee is added to
        the job&apos;s price.
      </p>
      <a
        href={smsHref}
        className="mt-5 inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 font-lato font-bold text-white transition-colors hover:bg-blue-500"
      >
        <MessageSquareText className="size-4" aria-hidden />
        Text {site.textNumber}
      </a>
      <p className="mt-3 font-lato text-xs text-zinc-400">Texts only, no calls.</p>
    </section>
  );
}
