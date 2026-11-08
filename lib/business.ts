/**
 * Business IT setup copy. Everything here is quote only: no prices on the site.
 */

export type BusinessArea = { key: "network" | "devices" | "accounts"; title: string; items: string[] };

export const businessAreas: BusinessArea[] = [
  {
    key: "network",
    title: "Network, Wi-Fi & cabling",
    items: [
      "Business router and firewall",
      "Wi-Fi that reaches every corner",
      "Ethernet runs and a tidy, labeled network closet",
      "Separate networks for registers, staff and guests",
    ],
  },
  {
    key: "devices",
    title: "Computers, printers & POS",
    items: [
      "Workstations set up, updated and secured",
      "Office, receipt and kitchen printers",
      "Card readers, POS terminals and kitchen screens connected and tested",
    ],
  },
  {
    key: "accounts",
    title: "Email, accounts & backups",
    items: [
      "Google Workspace or Microsoft 365 on your own domain",
      "Shared files and calendars",
      "A password manager for the team",
      "Backups that are tested, not just turned on",
    ],
  },
];

export type Industry = { key: "food" | "retail" | "office"; title: string; detail: string };

export const industries: Industry[] = [
  {
    key: "food",
    title: "Restaurants & cafés",
    detail:
      "Wired runs for Toast, Clover and other POS terminals, printers and kitchen screens, with registers kept off the guest Wi-Fi.",
  },
  {
    key: "retail",
    title: "Retail shops & salons",
    detail:
      "Card readers and booking tablets that don't drop, a back-office computer, and Wi-Fi your customers can use.",
  },
  {
    key: "office",
    title: "Small offices",
    detail:
      "Dental, law, accounting and real estate offices: workstations, shared printers and files, and safe access from home.",
  },
];

export const businessSteps = [
  {
    title: "Walkthrough",
    body: "A free call or visit to see your space, what you already have and what keeps going wrong.",
  },
  {
    title: "Flat quote",
    body: "A written price and parts list. Buy the gear yourself from the list, or I'll source it for you.",
  },
  {
    title: "Install",
    body: "Everything set up, labeled and tested, planned around your hours so you don't lose business.",
  },
  {
    title: "Handoff",
    body: "A one-page guide to your network, passwords stored safely, and a quick walkthrough for your staff.",
  },
];

/** Short promises shown under the page heading: where SEF beats the usual IT company. */
export const businessPromises = [
  { key: "walkthrough", title: "Free walkthrough", detail: "See the space before any price" },
  { key: "quote", title: "Flat written quote", detail: "No surprise add-ons" },
  { key: "weekend", title: "No weekend surcharge", detail: "Weekend installs cost the same" },
  { key: "contract", title: "No contracts or minimums", detail: "One computer or fifteen" },
] as const;

export const businessPlan = {
  name: "Business support plan",
  detail:
    "For businesses that want someone on call after the setup. Quoted per location, with no minimum team size and no long-term contract.",
  features: [
    "Same-day replies on weekdays",
    "Remote fixes in the evening",
    "Monthly updates, backup and security checks",
    "First pick of on-site visit times",
  ],
};
