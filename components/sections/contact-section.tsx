"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays, Clock, Mail, MapPin, MessageSquareText, Phone, Siren } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { phoneHref, site, smsHref } from "@/lib/site";
import { emergencyFee, usd } from "@/lib/services";

const needs = ["Website", "IT help", "Business IT setup", "Something else"] as const;
type Status = "idle" | "sending" | "sent" | "error" | "busy";

/** /contact?need=business preselects a choice, so service pages can link straight to the right form. */
const needFromQuery: Record<string, (typeof needs)[number]> = {
  website: "Website",
  it: "IT help",
  business: "Business IT setup",
};

const placeholders: Record<string, string> = {
  Website: "I run a small bakery and need a site with our menu and hours...",
  "IT help": "My laptop takes 10 minutes to start up...",
  "Business IT setup": "We're opening a 6-table cafe: POS, Wi-Fi for guests, an office PC and a printer...",
  "Something else": "Tell me what's going on...",
};

export default function ContactSection() {
  const [need, setNeed] = useState<string>("Website");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [trap, setTrap] = useState("");
  const openedAt = useRef(0);

  useEffect(() => {
    openedAt.current = Date.now();
    const preset = needFromQuery[new URLSearchParams(window.location.search).get("need") ?? ""];
    if (preset) setNeed(preset);
  }, []);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!site.quoteFormEndpoint) {
      const subject = encodeURIComponent(`${need} request from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nNeed: ${need}\n\n${form.message}`,
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(site.quoteFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ need, ...form, fax: trap, elapsed: Date.now() - openedAt.current }),
      });
      if (res.status === 429) {
        setStatus("busy");
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "h-12 border-white/10 bg-white/[0.03] font-lato text-white placeholder:text-zinc-500 focus-visible:border-blue-500/60";

  return (
    <div className="relative overflow-hidden border-t border-white/5 bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl"
      />
      <div className="container relative mx-auto grid grid-cols-1 gap-14 px-4 py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1 className="font-anton text-4xl tracking-wide text-white md:text-5xl">
            Let&apos;s get it sorted
          </h1>
          <p className="mt-5 max-w-md font-lato text-lg leading-relaxed text-zinc-400">
            Book a free 15-minute call, or send a few details and I&apos;ll reply with a flat price within 24
            hours.
          </p>

          {site.bookingUrl ? (
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-lato font-bold text-white transition-colors hover:bg-blue-500"
            >
              <CalendarDays className="size-4" aria-hidden />
              Pick a time for your free call
            </a>
          ) : null}

          <ul className="mt-10 space-y-4 font-lato text-zinc-300">
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-logo" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            {smsHref ? (
              <li className="flex items-center gap-3">
                <MessageSquareText className="size-4 text-logo" aria-hidden />
                <a href={smsHref} className="hover:text-white">
                  {site.textNumber}
                </a>
                <span className="rounded-sm border border-logo px-1.5 pb-px pt-0.5 text-[11px] font-bold tracking-[0.08em] text-logo">
                  TEXT
                </span>
              </li>
            ) : null}
            {site.phone ? (
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-logo" aria-hidden />
                <a href={phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
            ) : null}
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-logo" aria-hidden />
              {site.serviceArea}
            </li>
            <li className="flex items-center gap-3">
              <Clock className="size-4 text-logo" aria-hidden />
              {site.hours}
            </li>
            {smsHref ? (
              <li className="flex items-start gap-3">
                <Siren className="mt-1 size-4 shrink-0 text-logo" aria-hidden />
                <span>
                  Urgent? Text and say so. If I can take it sooner, there&apos;s a {usd(emergencyFee)} emergency
                  fee.
                </span>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8"
          >
            <fieldset>
              <legend className="font-lato font-bold text-white">What do you need?</legend>
              <ToggleGroup
                type="single"
                variant="outline"
                value={need}
                onValueChange={(v) => v && setNeed(v)}
                className="mt-3 flex w-full flex-wrap justify-start gap-2 font-lato"
                spacing={2}
              >
                {needs.map((n) => (
                  <ToggleGroupItem
                    key={n}
                    value={n}
                    className="h-10 rounded-full border-white/15 px-4 text-zinc-300 data-[state=on]:border-blue-500 data-[state=on]:bg-blue-600 data-[state=on]:text-white"
                  >
                    {n}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </fieldset>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-lato text-zinc-300">
                  Name
                </Label>
                <Input
                  id="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  className={fieldClass}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-lato text-zinc-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="message" className="font-lato text-zinc-300">
                What&apos;s going on?
              </Label>
              <Textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder={placeholders[need] ?? placeholders["Something else"]}
                className="min-h-36 resize-none border-white/10 bg-white/[0.03] font-lato text-white placeholder:text-zinc-500 focus-visible:border-blue-500/60"
              />
            </div>

            {/* Spam trap: hidden from people, filled in by bots. */}
            <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
              <label htmlFor="fax">Leave this empty</label>
              <input
                id="fax"
                name="fax"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={trap}
                onChange={(e) => setTrap(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 h-12 w-full rounded-md bg-blue-600 font-lato font-bold text-white transition-colors hover:bg-blue-500 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send request"}
            </button>

            <p role="status" aria-live="polite" className="mt-4 min-h-6 font-lato text-sm">
              {status === "sent" ? (
                <span className="text-blue-300">Request sent. I&apos;ll reply within 24 hours.</span>
              ) : status === "error" || status === "busy" ? (
                <span className="text-red-300">
                  {status === "busy" ? "That's a lot of requests at once." : "That didn't send."} Email{" "}
                  <a className="underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                  {smsHref ? (
                    <>
                      {" "}or text{" "}
                      <a className="underline" href={smsHref}>
                        {site.textNumber}
                      </a>
                    </>
                  ) : null}{" "}
                  instead.
                </span>
              ) : null}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
