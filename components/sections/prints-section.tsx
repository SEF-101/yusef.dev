"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Ban, Box, Camera, Check, Flame, Layers, MessageSquareText, Package, Palette, RefreshCw, Tag, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { filaments, type Filament } from "@/lib/filaments";
import {
  examplePrints,
  gramRates,
  materials,
  printPricing,
  printPromises,
  printRules,
  printSteps,
  printer,
  priceClassLabels,
  quotePrint,
  shipping,
  type Material,
  type PriceClass,
} from "@/lib/prints";
import { site, smsHref } from "@/lib/site";
import { usd } from "@/lib/services";
import { cn } from "@/lib/utils";

const requestHref = (color?: string) =>
  `/contact?need=print${color ? `&color=${encodeURIComponent(color)}` : ""}`;

const cents = (n: number) => `${Math.round(n * 100)}¢`;
/** Like usd(), but keeps cents when there are any ($1.50, not $2). */
const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: n % 1 ? 2 : 0 });

const promiseIcons: Record<(typeof printPromises)[number]["key"], LucideIcon> = {
  price: Tag,
  colors: Palette,
  ship: Package,
  reprint: RefreshCw,
};

const specIcons: LucideIcon[] = [Box, Layers, Flame, Camera];

/* ------------------------------------------------------------------ */
/* Build volume: a 256 mm cube with a vase printing layer by layer.   */
/* ------------------------------------------------------------------ */

const EDGE = 110; // on-screen cube edge
const A = EDGE * Math.cos(Math.PI / 6);
const B = EDGE * Math.sin(Math.PI / 6);
const CX = 180;
const CY = 150;
const iso = (x: number, y: number, z: number) => [CX + (x - y) * A, CY + (x + y) * B - z * EDGE] as const;
const pt = (p: readonly [number, number]) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;

const LAYERS = 18;
const LAYER_H = (EDGE * 0.78) / LAYERS;
/** Vase profile: radius (in cube units) at each height. */
const radiusAt = (t: number) => 0.17 + 0.12 * Math.sin(Math.PI * (0.1 + t * 0.95)) - 0.04 * t;

function layerPaths(i: number) {
  const r = radiusAt(i / (LAYERS - 1));
  const [cx, cyBase] = iso(0.5, 0.5, 0);
  const rx = Math.SQRT2 * r * A;
  const ry = Math.SQRT2 * r * B;
  const yb = cyBase - i * LAYER_H;
  const yt = yb - LAYER_H;
  const f = (n: number) => n.toFixed(1);
  const band = `M${f(cx - rx)},${f(yb)} A${f(rx)},${f(ry)} 0 0 0 ${f(cx + rx)},${f(yb)} L${f(cx + rx)},${f(yt)} A${f(rx)},${f(ry)} 0 0 1 ${f(cx - rx)},${f(yt)} Z`;
  return { band, top: { cx, cy: yt, rx, ry } };
}

function BuildVolume() {
  const reduce = useReducedMotion();
  const corners = {
    o: iso(0, 0, 0),
    x: iso(1, 0, 0),
    y: iso(0, 1, 0),
    xy: iso(1, 1, 0),
    z: iso(0, 0, 1),
    xz: iso(1, 0, 1),
    yz: iso(0, 1, 1),
    xyz: iso(1, 1, 1),
  };
  const solid: [keyof typeof corners, keyof typeof corners][] = [
    ["x", "xy"],
    ["y", "xy"],
    ["xy", "xyz"],
    ["x", "xz"],
    ["y", "yz"],
    ["z", "xz"],
    ["z", "yz"],
    ["xz", "xyz"],
    ["yz", "xyz"],
  ];
  const hidden: [keyof typeof corners, keyof typeof corners][] = [
    ["o", "x"],
    ["o", "y"],
    ["o", "z"],
  ];
  const plate = [corners.o, corners.x, corners.xy, corners.y].map(pt).join(" ");
  const grid = [0.25, 0.5, 0.75].flatMap((t) => [
    [iso(t, 0, 0), iso(t, 1, 0)],
    [iso(0, t, 0), iso(1, t, 0)],
  ]);
  const layers = Array.from({ length: LAYERS }, (_, i) => layerPaths(i));
  const cycle = 9;

  const labelClass = "fill-zinc-400 font-lato text-[11px]";

  return (
    <svg viewBox="0 0 360 290" className="h-auto w-full" role="img" aria-labelledby="build-title">
      <title id="build-title">
        The P2S build area: a 256 millimeter cube, about 10 inches on each side, with a vase printing layer by layer.
      </title>
      <polygon points={plate} className="fill-blue-500/[0.07]" />
      {grid.map(([a, b], i) => (
        <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} className="stroke-white/[0.06]" strokeWidth={1} />
      ))}
      {hidden.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={corners[a][0]}
          y1={corners[a][1]}
          x2={corners[b][0]}
          y2={corners[b][1]}
          className="stroke-white/15"
          strokeWidth={1}
          strokeDasharray="3 4"
        />
      ))}

      {layers.map((l, i) => {
        const start = (i / LAYERS) * 0.72;
        const shape = (
          <>
            <path d={l.band} fill="#16294a" stroke="#5F98E7" strokeOpacity={0.35} strokeWidth={0.75} />
            <ellipse
              cx={l.top.cx}
              cy={l.top.cy}
              rx={l.top.rx}
              ry={l.top.ry}
              fill="#1f3c6d"
              stroke="#5F98E7"
              strokeOpacity={0.55}
              strokeWidth={0.75}
            />
          </>
        );
        return reduce ? (
          <g key={i}>{shape}</g>
        ) : (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{
              duration: cycle,
              times: [0, start, start + 0.015, 0.93, 1],
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {shape}
          </motion.g>
        );
      })}

      {solid.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={corners[a][0]}
          y1={corners[a][1]}
          x2={corners[b][0]}
          y2={corners[b][1]}
          className="stroke-zinc-400/60"
          strokeWidth={1.25}
        />
      ))}

      {/* edge labels */}
      <text x={(corners.y[0] + corners.xy[0]) / 2 - 22} y={(corners.y[1] + corners.xy[1]) / 2 + 20} className={labelClass} textAnchor="middle">
        256 mm
      </text>
      <text x={(corners.x[0] + corners.xy[0]) / 2 + 22} y={(corners.x[1] + corners.xy[1]) / 2 + 20} className={labelClass} textAnchor="middle">
        256 mm
      </text>
      <text x={corners.x[0] + 10} y={(corners.x[1] + corners.xz[1]) / 2} className={labelClass}>
        256 mm
      </text>
    </svg>
  );
}

function PrinterCard() {
  return (
    <section aria-labelledby="printer" className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
      <p className="font-lato text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Made on a</p>
      <h2 id="printer" className="mt-2 font-anton text-3xl tracking-wide text-white">
        {printer.name}
      </h2>
      <div className="mt-4">
        {printer.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={printer.photo} alt={`My ${printer.name}`} className="w-full rounded-xl border border-white/10" />
        ) : (
          <BuildVolume />
        )}
      </div>
      <ul className="mt-4 space-y-4">
        {printer.specs.map((s, i) => {
          const Icon = specIcons[i % specIcons.length];
          return (
            <li key={s.title} className="flex gap-3">
              <Icon className="mt-0.5 size-5 shrink-0 text-logo" aria-hidden />
              <div>
                <p className="font-lato font-bold text-white">{s.title}</p>
                <p className="font-lato text-sm leading-relaxed text-zinc-400">{s.detail}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Price list                                                         */
/* ------------------------------------------------------------------ */

function PriceList() {
  const [priceClass, setPriceClass] = useState<PriceClass>("standard");
  const discounts = [...printPricing.quantityDiscounts].sort((a, b) => a.minCopies - b.minCopies);

  return (
    <section aria-labelledby="prices">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="prices" className="font-anton text-3xl tracking-wide text-white">
            Example prices
          </h2>
          <p className="mt-2 font-lato text-sm text-zinc-400">Your exact price comes back before anything prints.</p>
        </div>
        <ToggleGroup
          type="single"
          variant="outline"
          value={priceClass}
          onValueChange={(v) => v && setPriceClass(v as PriceClass)}
          aria-label="Show prices for"
          className="w-full shrink-0 font-lato sm:w-fit"
        >
          {(Object.keys(priceClassLabels) as PriceClass[]).map((c) => (
            <ToggleGroupItem
              key={c}
              value={c}
              className="h-10 flex-1 px-3 text-xs data-[state=on]:bg-blue-600 data-[state=on]:text-white sm:flex-none sm:px-4 sm:text-sm"
            >
              {priceClassLabels[c]}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <ul className="mt-6 border-t border-white/10">
        {examplePrints.map((p) => {
          const price = quotePrint({ grams: p.grams, hours: p.hours, priceClass });
          return (
            <li key={p.name} className="grid grid-cols-[1fr_auto] items-center gap-x-8 border-b border-white/10 py-5">
              <div>
                <h3 className="font-lato text-lg font-bold text-white">{p.name}</h3>
                <p className="mt-1 font-lato text-sm text-zinc-400">{p.detail}</p>
              </div>
              <div className="min-w-20 text-right">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={`${p.name}-${priceClass}`}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="block font-anton text-3xl text-logo"
                  >
                    {usd(price)}
                  </motion.span>
                </AnimatePresence>
              </div>
            </li>
          );
        })}
        <li className="grid grid-cols-[1fr_auto] items-center gap-x-8 border-b border-white/10 py-5">
          <div>
            <h3 className="font-lato text-lg font-bold text-white">Bigger, or lots of copies</h3>
            <p className="mt-1 font-lato text-sm text-zinc-400">Up to 10 in on every side</p>
          </div>
          <div className="min-w-20 text-right">
            <span className="block font-lato text-xs text-zinc-400">free</span>
            <span className="block font-anton text-3xl text-logo">Quote</span>
          </div>
        </li>
      </ul>

      <dl className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <dt className="font-lato font-bold text-white">How the price works</dt>
          <dd className="mt-1 font-lato text-sm leading-relaxed text-zinc-400">
            {usd(printPricing.setupFee)} setup per design, plus {cents(gramRates.standard)} per gram of plastic and{" "}
            {money(printPricing.hourlyRate)} per hour of print time. Silk, ABS and ASA are{" "}
            {cents(gramRates.specialty)} a gram, TPU {cents(gramRates.flexible)}. {usd(printPricing.orderMinimum)}{" "}
            minimum order.
          </dd>
        </div>
        <div>
          <dt className="font-lato font-bold text-white">More copies cost less</dt>
          <dd className="mt-1 font-lato text-sm leading-relaxed text-zinc-400">
            Setup is charged once per design.{" "}
            {discounts.map((d, i) => (
              <span key={d.minCopies}>
                {i > 0 ? ", " : ""}
                {d.minCopies}+ copies get {d.percentOff}% off
              </span>
            ))}
            . Good for team gifts, table numbers and shop giveaways.
          </dd>
        </div>
        <div>
          <dt className="font-lato font-bold text-white">Shipping</dt>
          <dd className="mt-1 font-lato text-sm leading-relaxed text-zinc-400">
            {usd(shipping.flatRate)} flat to any US address, free on orders of {usd(shipping.freeOver)} or more.{" "}
            {shipping.promo}
          </dd>
        </div>
        <div>
          <dt className="font-lato font-bold text-white">Multi-color</dt>
          <dd className="mt-1 font-lato text-sm leading-relaxed text-zinc-400">
            Up to 4 colors in one print. Each color change uses a little extra plastic and time, and the quote
            includes it.
          </dd>
        </div>
      </dl>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Materials and colors                                               */
/* ------------------------------------------------------------------ */

function swatchStyle(hex: string, finish: Material["finish"]): React.CSSProperties {
  if (finish === "silk") {
    return {
      background: `linear-gradient(135deg, transparent 18%, rgba(255,255,255,0.55) 46%, transparent 72%), ${hex}`,
    };
  }
  if (finish === "glossy") {
    return {
      background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.38), transparent 42%), ${hex}`,
    };
  }
  return { background: hex };
}

function Swatch({
  filament,
  material,
  selected,
  onSelect,
}: {
  filament: Filament;
  material: Material;
  selected: boolean;
  onSelect: () => void;
}) {
  const state = filament.out ? "Out right now" : filament.low ? "Running low" : null;
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        disabled={filament.out}
        aria-pressed={selected}
        className={cn(
          "group flex w-full flex-col items-center gap-2 rounded-xl border p-3 text-center transition-colors",
          selected ? "border-blue-500/70 bg-blue-500/[0.08]" : "border-transparent hover:bg-white/[0.04]",
          filament.out && "cursor-not-allowed opacity-40",
        )}
      >
        <span
          aria-hidden
          className={cn(
            "size-12 rounded-full ring-1 ring-white/20 transition-transform sm:size-14",
            !filament.out && "group-hover:scale-105",
            selected && "ring-2 ring-blue-400",
          )}
          style={swatchStyle(filament.hex, material.finish)}
        />
        <span className={cn("font-lato text-sm leading-tight text-zinc-200", filament.out && "line-through")}>
          {filament.name}
        </span>
        {state ? <span className="font-lato text-[11px] text-zinc-400">{state}</span> : null}
      </button>
    </li>
  );
}

function MaterialsAndColors() {
  const firstStocked = materials.find((m) => filaments.some((f) => f.material === m.key && !f.out)) ?? materials[0];
  const [materialKey, setMaterialKey] = useState(firstStocked.key);
  const [colorName, setColorName] = useState<string | null>(null);

  const material = materials.find((m) => m.key === materialKey) ?? materials[0];
  const colors = useMemo(() => filaments.filter((f) => f.material === material.key), [material.key]);
  const inStock = colors.filter((c) => !c.out).length;
  const selected = colors.find((c) => c.name === colorName && !c.out) ?? null;
  const choice = selected ? `${material.name} · ${selected.name}` : null;

  return (
    <section aria-labelledby="materials" className="mt-24">
      <div className="max-w-2xl">
        <h2 id="materials" className="font-anton text-3xl tracking-wide text-white">
          Plastics &amp; colors on hand
        </h2>
        <p className="mt-3 font-lato leading-relaxed text-zinc-400">
          Pick a plastic to see the colors I have on the shelf right now. Tap a color to ask for a print in it.
        </p>
      </div>

      <div role="tablist" aria-label="Plastics" className="mt-8 flex flex-wrap gap-2">
        {materials.map((m) => {
          const count = filaments.filter((f) => f.material === m.key && !f.out).length;
          const active = m.key === material.key;
          return (
            <button
              key={m.key}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls="material-panel"
              onClick={() => {
                setMaterialKey(m.key);
                setColorName(null);
              }}
              className={cn(
                "rounded-full border px-4 py-2 font-lato text-sm transition-colors",
                active
                  ? "border-blue-500/70 bg-blue-600 text-white"
                  : "border-white/15 text-zinc-300 hover:bg-white/5 hover:text-white",
              )}
            >
              {m.name}
              <span className={cn("ml-2 text-xs", active ? "text-blue-100" : "text-zinc-400")}>
                {count > 0 ? count : "order in"}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="material-panel"
        role="tabpanel"
        className="mt-6 grid grid-cols-1 gap-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:grid-cols-12"
      >
        <div className="lg:col-span-4">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-anton text-2xl tracking-wide text-white">{material.name}</h3>
            <span className="shrink-0 rounded-full border border-white/15 px-3 py-1 font-lato text-xs text-zinc-300">
              {cents(gramRates[material.priceClass])}/gram
            </span>
          </div>
          <p className="mt-3 font-lato leading-relaxed text-zinc-400">{material.summary}</p>
          <dl className="mt-5 space-y-3 font-lato text-sm">
            <div className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-logo" aria-hidden />
              <div>
                <dt className="sr-only">Good for</dt>
                <dd className="text-zinc-300">{material.goodFor}</dd>
              </div>
            </div>
            <div className="flex gap-2">
              <Ban className="mt-0.5 size-4 shrink-0 text-zinc-400" aria-hidden />
              <div>
                <dt className="sr-only">Watch out</dt>
                <dd className="text-zinc-400">{material.watchOut}</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-8">
          {colors.length > 0 ? (
            <ul className="grid grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-5">
              {colors.map((c) => (
                <Swatch
                  key={c.name}
                  filament={c}
                  material={material}
                  selected={selected?.name === c.name}
                  onSelect={() => setColorName(selected?.name === c.name ? null : c.name)}
                />
              ))}
            </ul>
          ) : null}

          {inStock === 0 ? (
            <p className="rounded-xl border border-dashed border-white/15 p-6 font-lato text-sm leading-relaxed text-zinc-400">
              None on the shelf right now. Tell me the color you want and I&apos;ll order it in for your print for{" "}
              {usd(printPricing.specialOrderFee)} more, which adds a few days.
            </p>
          ) : null}

          <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-lato text-sm text-zinc-400" aria-live="polite">
              {choice ? (
                <>
                  Picked: <span className="font-bold text-white">{choice}</span>
                </>
              ) : inStock === 0 ? (
                <>Asking is free.</>
              ) : (
                <>
                  Want a color that isn&apos;t here? I can order it in for {usd(printPricing.specialOrderFee)}.
                </>
              )}
            </p>
            <Link
              href={requestHref(choice ?? (inStock === 0 ? `${material.name} · color to order in` : undefined))}
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-blue-600 px-5 py-3 font-lato font-bold text-white transition-colors hover:bg-blue-500"
            >
              {choice ? "Ask for a print in this color" : "Request a print"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

export default function PrintsSection() {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading
        as="h1"
        title="3D prints"
        intro="Custom 3D prints, made to order and mailed anywhere in the US. Send a link or a file, pick a plastic and a color, and you'll get the exact price before anything prints."
      >
        <Link
          href={requestHref()}
          className="shrink-0 rounded-md bg-blue-600 px-6 py-3 font-lato font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-colors hover:bg-blue-500"
        >
          Request a print
        </Link>
      </SectionHeading>

      <dl className="-mt-2 mb-14 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-white/10 py-6 lg:grid-cols-4">
        {printPromises.map((p) => {
          const Icon = promiseIcons[p.key];
          return (
            <div key={p.key} className="flex gap-3">
              <Icon className="mt-0.5 size-5 shrink-0 text-logo" aria-hidden />
              <div>
                <dt className="font-lato font-bold text-white">{p.title}</dt>
                <dd className="mt-1 font-lato text-sm text-zinc-400">{p.detail}</dd>
              </div>
            </div>
          );
        })}
      </dl>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <PriceList />
        </div>
        <div className="lg:col-span-5">
          <PrinterCard />
        </div>
      </div>

      <MaterialsAndColors />

      <section aria-labelledby="print-steps" className="mt-24">
        <h2 id="print-steps" className="font-anton text-3xl tracking-wide text-white">
          How ordering works
        </h2>
        <ol className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {printSteps.map((step, i) => (
            <li key={step.title} className="border-t border-white/10 pt-6">
              <span
                aria-hidden
                className="font-anton text-5xl leading-none text-transparent [-webkit-text-stroke:1px_rgb(95_152_231_/_0.6)]"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 font-anton text-xl tracking-wide text-white">{step.title}</h3>
              <p className="mt-2 font-lato text-sm leading-relaxed text-zinc-400">{step.body}</p>
            </li>
          ))}
        </ol>
        {shipping.turnaround ? (
          <p className="mt-8 font-lato text-sm text-zinc-400">{shipping.turnaround}</p>
        ) : null}
      </section>

      <section aria-labelledby="print-rules" className="mt-24 grid gap-6 md:grid-cols-2">
        <h2 id="print-rules" className="sr-only">
          What I can print
        </h2>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <h3 className="font-anton text-2xl tracking-wide text-white">Happy to print</h3>
          <ul className="mt-5 space-y-3">
            {printRules.willPrint.map((r) => (
              <li key={r} className="flex gap-2 font-lato text-sm leading-relaxed text-zinc-300">
                <Check className="mt-0.5 size-4 shrink-0 text-logo" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <h3 className="font-anton text-2xl tracking-wide text-white">Can&apos;t print</h3>
          <ul className="mt-5 space-y-3">
            {printRules.wontPrint.map((r) => (
              <li key={r} className="flex gap-2 font-lato text-sm leading-relaxed text-zinc-400">
                <Ban className="mt-0.5 size-4 shrink-0 text-zinc-400" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-white/10 pt-4 font-lato text-xs leading-relaxed text-zinc-400">
            Send a link and I&apos;ll check its license for you before quoting.
          </p>
        </div>
      </section>
    </div>
  );
}

/** Closing band for the prints page, in place of the site-wide "free call" band. */
export function PrintsCta() {
  return (
    <div className="border-t border-white/5 bg-black">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-anton text-3xl tracking-wide text-white">Got a file or an idea?</h2>
          <p className="mt-2 font-lato text-zinc-400">
            Send it over and you&apos;ll have a price within 24 hours. Asking is free.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={requestHref()}
            className="rounded-md bg-blue-600 px-6 py-3 font-lato font-bold text-white transition-colors hover:bg-blue-500"
          >
            Request a print
          </Link>
          {smsHref ? (
            <a
              href={smsHref}
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 font-lato font-bold text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              <MessageSquareText className="size-4" aria-hidden />
              Text a link
            </a>
          ) : (
            <a
              href={`mailto:${site.email}`}
              className="rounded-md border border-white/15 px-6 py-3 font-lato font-bold text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              Email a file
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
