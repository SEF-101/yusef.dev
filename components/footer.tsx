import Link from "next/link";
import { navLinks } from "@/lib/nav";
import { site } from "@/lib/site";

const footerLinks = [...navLinks, { href: "/contact#faq", label: "FAQ" }, { href: "/contact", label: "Contact" }];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="container mx-auto flex flex-col gap-10 px-4 py-12 md:flex-row md:justify-between">
        <div>
          <Link href="/" className="font-anton text-3xl tracking-wide text-logo text-glow">
            SEF
          </Link>
          <p className="mt-2 font-lato text-sm text-zinc-400">{site.fullName}</p>
          <p className="mt-1 font-lato text-sm text-zinc-400">{site.serviceArea}</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 font-lato text-sm sm:grid-cols-3">
          {footerLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-zinc-400 hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 font-lato text-sm text-zinc-400 md:items-end">
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {site.email}
          </a>
          <p>
            © {new Date().getFullYear()} {site.name}. Every site hand-coded by {site.owner}.
          </p>
        </div>
      </div>
    </footer>
  );
}
