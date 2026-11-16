/**
 * 3D prints: every price, material and promise on /prints lives here.
 * Colors on hand live in lib/filaments.ts.
 *
 * How a quote works (the same math the page uses for its example prices):
 *   price = setup fee (once per design)
 *         + copies x (grams x the material's rate + print hours x hourlyRate) - quantity discount
 *   rounded up to a whole dollar, never below the order minimum. Shipping is added after.
 * Use the slicer's totals: grams already include supports and color-change purge, and hours
 * already include color swaps, so multi-color prints price themselves.
 */

import type { MaterialKey } from "@/lib/filaments";

export const printPricing = {
  /** Per design, not per copy: slicing, plate prep, cleanup and packing. */
  setupFee: 5,
  /** Per hour of print time from the slicer. */
  hourlyRate: 1.5,
  /** Smallest order before shipping. */
  orderMinimum: 10,
  /** Taken off the per-copy part (not the setup fee) for copies of the same design. */
  quantityDiscounts: [
    { minCopies: 10, percentOff: 20 },
    { minCopies: 5, percentOff: 10 },
  ],
  /** A color you don't stock: you order the spool in and keep the rest. */
  specialOrderFee: 10,
};

export const shipping = {
  /** Flat price for any US address. Under-1 lb USPS Ground Advantage labels run about $5.50 to $8.40. */
  flatRate: 7,
  /** Orders at or over this ship free. */
  freeOver: 50,
  service: "USPS Ground Advantage",
  /** Optional launch offer shown on the page. Empty string = hidden. */
  promo: "Your first order ships free.",
  /** Shown under the steps. Edit to match how fast you can turn orders around. */
  turnaround: "Most orders ship within a week of payment.",
};

export type PriceClass = "standard" | "specialty" | "flexible";

/** Price per gram for each class of plastic. */
export const gramRates: Record<PriceClass, number> = {
  standard: 0.08,
  specialty: 0.1,
  flexible: 0.15,
};

export const priceClassLabels: Record<PriceClass, string> = {
  standard: "PLA & PETG",
  specialty: "Silk, ABS & ASA",
  flexible: "Flexible TPU",
};

export type Material = {
  key: MaterialKey;
  name: string;
  priceClass: PriceClass;
  summary: string;
  goodFor: string;
  /** Plain-language limits, so nobody is surprised. */
  watchOut: string;
  finish: "glossy" | "matte" | "silk";
};

export const materials: Material[] = [
  {
    key: "pla-basic",
    name: "PLA Basic",
    priceClass: "standard",
    summary: "The everyday plastic: crisp detail, bright colors and the lowest price.",
    goodFor: "Figures, décor, organizers, gifts and prototypes",
    watchOut: "Softens in a hot car or the dishwasher",
    finish: "glossy",
  },
  {
    key: "pla-matte",
    name: "PLA Matte",
    priceClass: "standard",
    summary: "PLA with a soft, non-shiny finish that hides layer lines.",
    goodFor: "Gifts, signs and anything people see up close",
    watchOut: "Softens in a hot car or the dishwasher",
    finish: "matte",
  },
  {
    key: "pla-silk",
    name: "PLA Silk",
    priceClass: "specialty",
    summary: "A shiny, metal-like finish that catches the light.",
    goodFor: "Vases, trophies, ornaments and display pieces",
    watchOut: "A bit less strong than regular PLA",
    finish: "silk",
  },
  {
    key: "petg",
    name: "PETG",
    priceClass: "standard",
    summary: "Tougher and a little flexible, and it handles heat and weather better than PLA.",
    goodFor: "Brackets, clips, planters, mounts and parts that get used",
    watchOut: "Slightly less sharp detail than PLA",
    finish: "glossy",
  },
  {
    key: "abs-asa",
    name: "ABS & ASA",
    priceClass: "specialty",
    summary: "Heat-resistant plastics, printed in the closed chamber so they don't warp. ASA also stands up to sun.",
    goodFor: "Car interior parts and outdoor fixtures",
    watchOut: "Not food safe",
    finish: "matte",
  },
  {
    key: "tpu",
    name: "TPU (flexible)",
    priceClass: "flexible",
    summary: "Rubbery and bendable, like a phone case.",
    goodFor: "Bumpers, grips, feet, gaskets and cases",
    watchOut: "One color per print, and it prints slower",
    finish: "matte",
  },
];

/** Example prints for the price list. Grams and hours are typical slicer numbers for each. */
export const examplePrints = [
  { name: "Keychain, name tag or small clip", detail: "About 2 in", grams: 8, hours: 0.5 },
  { name: "Phone stand", detail: "About 4 in", grams: 60, hours: 2.5 },
  { name: "Desk organizer", detail: "About 6 in", grams: 150, hours: 5 },
  { name: "Planter", detail: "About 5 in across", grams: 250, hours: 8 },
  { name: "Large display piece or bin", detail: "About 8 in", grams: 400, hours: 14 },
];

/** Price for one design. The page and the quote calculator use the same math. */
export function quotePrint({
  grams,
  hours,
  priceClass = "standard",
  copies = 1,
}: {
  grams: number;
  hours: number;
  priceClass?: PriceClass;
  copies?: number;
}) {
  const perCopy = grams * gramRates[priceClass] + hours * printPricing.hourlyRate;
  const discount = printPricing.quantityDiscounts.find((d) => copies >= d.minCopies)?.percentOff ?? 0;
  const total = printPricing.setupFee + perCopy * copies * (1 - discount / 100);
  return Math.max(printPricing.orderMinimum, Math.ceil(total));
}

/** Shipping for an order of this size. */
export const shippingFor = (orderTotal: number) => (orderTotal >= shipping.freeOver ? 0 : shipping.flatRate);

export const printer = {
  name: "Bambu Lab P2S",
  /** Put a real photo of your printer in /public (e.g. "/prints/p2s.jpg"). Empty = the build-volume graphic. */
  photo: "",
  buildMm: 256,
  specs: [
    { title: "Up to 10 in on every side", detail: "A 256 mm cube build area, so most things print in one piece" },
    { title: "Up to 4 colors in one print", detail: "An AMS 2 Pro swaps colors mid-print and keeps the plastic dry" },
    { title: "Fully enclosed", detail: "The chamber holds in heat, so tough plastics like ABS and ASA print without warping" },
    { title: "Watched by a camera", detail: "Built-in AI failure detection catches a bad print early" },
  ],
};

/** Short promises under the page title. */
export const printPromises = [
  { key: "price", title: "Price before printing", detail: "Nothing prints until you say yes" },
  { key: "colors", title: "Up to 4 colors", detail: "In a single print" },
  { key: "ship", title: "Mailed anywhere in the US", detail: "Tracked, with insurance" },
  { key: "reprint", title: "Free reprint", detail: "If it breaks in the mail" },
] as const;

export const printSteps = [
  {
    title: "Send it",
    body: "A link to the model (Printables, Thingiverse, MakerWorld) or your own file. No file? Describe it and I'll see what's possible.",
  },
  {
    title: "Get a price",
    body: "I slice it and reply within 24 hours with the exact price, the size and the plastic and color.",
  },
  {
    title: "Pay",
    body: "Venmo, Zelle, Cash App or an emailed invoice. Prints are paid up front since each one is made for you.",
  },
  {
    title: "Printed & mailed",
    body: `Shipped ${shipping.service} with tracking. If it arrives broken, send a photo within 7 days and I'll reprint it free.`,
  },
];

export const printRules = {
  willPrint: [
    "Models you designed or own",
    "Free models whose license allows selling prints (CC BY, CC0 or public domain)",
    "Models you bought a commercial license for",
    "Replacement parts, organizers, gifts, signs and small-business items",
  ],
  wontPrint: [
    "Models marked personal use only, like most MakerWorld files under the Standard Digital File License",
    "Characters, logos or brands you don't have the rights to",
    "Weapons or weapon parts",
  ],
};
