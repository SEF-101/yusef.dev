/**
 * Every price on the site lives here. Change a number once and every
 * section that shows it updates.
 */

export const hourlyRate = 45;

export type WebPackage = {
  name: string;
  price: number;
  from?: boolean;
  priceNote?: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

export const webPackages: WebPackage[] = [
  {
    name: "One-page site",
    price: 600,
    summary: "Everything a new or small business needs on one fast page.",
    features: [
      "Custom design, no templates",
      "Looks right on every phone",
      "Contact form that lands in your inbox",
      "Search basics so Google can find you",
      "Domain hookup and launch",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Business site",
    price: 1500,
    priceNote: "+$150 per extra page",
    summary: "Up to 5 pages for a business with more to explain.",
    features: [
      "Everything in the one-page site",
      "Up to 5 pages: services, about, gallery, contact",
      "Map, hours and directions",
      "Visitor analytics",
    ],
    featured: true,
  },
  {
    name: "Online store",
    price: 2500,
    from: true,
    priceNote: "+ your store and card fees",
    summary: "Sell a small catalog online with card checkout.",
    features: [
      "Everything in the business site",
      "About 25 products to start",
      "Card checkout and order emails",
      "You add products and prices yourself",
    ],
  },
];

export type CarePlan = { name: string; price: number; features: string[] };

export const carePlans: CarePlan[] = [
  {
    name: "Basic care",
    price: 49,
    features: [
      "Hosting, SSL and backups",
      "Security updates and uptime checks",
      "Up to 30 minutes of edits a month",
    ],
  },
  {
    name: "Plus care",
    price: 99,
    features: [
      "Everything in Basic care",
      "Up to 2 hours of edits a month",
      "A monthly check-in and first pick of weekend slots",
    ],
  },
];

export type ItService = {
  name: string;
  detail: string;
  /** null = not offered remotely */
  remote: number | null;
  inPerson: number;
  priceSuffix?: string;
};

export const itServices: ItService[] = [
  {
    name: "Slow-computer fix",
    detail:
      "Find what's slowing it down, clean up startup and junk, update everything, scan for malware, then a short note on what I found.",
    remote: 49,
    inPerson: 69,
  },
  {
    name: "Virus & malware cleanup",
    detail:
      "Remove infections, reset browsers, check for hijacked accounts and set up protection so it doesn't happen again.",
    remote: 79,
    inPerson: 99,
  },
  {
    name: "New computer setup",
    detail:
      "Updates, bloatware removed, accounts signed in, printer connected. In person, I also move your files from the old one.",
    remote: 49,
    inPerson: 99,
  },
  {
    name: "Printer, email & Microsoft 365",
    detail: "Connect printers and devices, or set up and fix email, Outlook, Microsoft 365 and Google accounts.",
    remote: 39,
    inPerson: 49,
  },
  {
    name: "Hardware repair & upgrades",
    detail:
      "SSDs, RAM, batteries, fans and screens. A $35 diagnostic finds the problem and counts toward the repair.",
    remote: null,
    inPerson: 59,
    priceSuffix: "+ parts",
  },
  {
    name: "Custom PC build",
    detail:
      "Assembly, Windows and drivers, BIOS update, stress test and tidy cables. Buy the parts yourself, or I order them for a $40 fee.",
    remote: null,
    inPerson: 119,
  },
];

export const homeTechCare = {
  name: "Home Tech Care",
  price: 19,
  detail: "One remote session a month (up to 45 minutes), regular checkups and 10% off any other job.",
};

export type BuyingOption = { name: string; price: number; where: string; detail: string };

export const buyingHelp: BuyingOption[] = [
  {
    name: "Laptop Match",
    price: 29,
    where: "Video call",
    detail:
      "A 30-minute call about how you'll use it and what you want to spend, then a written shortlist of 3 picks with links.",
  },
  {
    name: "Shop together",
    price: 59,
    where: "In person",
    detail: "Up to 90 minutes in the store with you, so you leave with the right computer and skip the upsell.",
  },
  {
    name: "Setup add-on",
    price: 79,
    where: "After you buy",
    detail: "When the new computer arrives, I set it up and move your files over. Add it to either option.",
  },
];

export const startingPrices = {
  websites: Math.min(...webPackages.map((p) => p.price)),
  itHelp: Math.min(...itServices.flatMap((s) => (s.remote === null ? [s.inPerson] : [s.remote, s.inPerson]))),
  buyingHelp: Math.min(...buyingHelp.map((b) => b.price)),
};

export const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
