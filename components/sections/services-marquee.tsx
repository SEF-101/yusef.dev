import {
  Cable,
  Cpu,
  CreditCard,
  Gauge,
  Globe,
  HardDrive,
  KeyRound,
  Laptop,
  Mail,
  Printer,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";

type Chip = { label: string; icon: LucideIcon };

const rowOne: Chip[] = [
  { label: "Custom websites", icon: Globe },
  { label: "Online stores", icon: ShoppingBag },
  { label: "Mobile-friendly", icon: Smartphone },
  { label: "Slow laptops", icon: Laptop },
  { label: "Virus cleanup", icon: ShieldCheck },
  { label: "Custom PC builds", icon: Cpu },
  { label: "SSD & RAM upgrades", icon: HardDrive },
];

const rowTwo: Chip[] = [
  { label: "Wi-Fi dead zones", icon: Wifi },
  { label: "Ethernet runs", icon: Cable },
  { label: "POS & card readers", icon: CreditCard },
  { label: "Printers", icon: Printer },
  { label: "Email & Microsoft 365", icon: Mail },
  { label: "Passwords & backups", icon: KeyRound },
  { label: "Faster startups", icon: Gauge },
];

function ChipItem({ label, icon: Icon }: Chip) {
  return (
    <span className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-lato text-sm text-zinc-300">
      <Icon className="size-4 text-logo" aria-hidden />
      {label}
    </span>
  );
}

/** Two rows of what SEF handles, scrolling in opposite directions. */
export default function ServicesMarquee() {
  return (
    <section aria-label="What I can help with" className="relative py-6">
      <p className="sr-only">
        What I can help with: {[...rowOne, ...rowTwo].map((c) => c.label).join(", ")}.
      </p>
      <div aria-hidden className="relative">
        <Marquee pauseOnHover speed={0.9}>
          {rowOne.map((c) => (
            <ChipItem key={c.label} {...c} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover speed={0.8}>
          {rowTwo.map((c) => (
            <ChipItem key={c.label} {...c} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[var(--background)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[var(--background)]" />
      </div>
    </section>
  );
}
