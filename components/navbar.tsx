"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/nav";
import { bookingHref, bookingIsExternal, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function BookingLink({ className, onClick }: { className: string; onClick?: () => void }) {
  return bookingIsExternal ? (
    <a href={bookingHref} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
      Book a free call
    </a>
  ) : (
    <Link href={bookingHref} className={className} onClick={onClick}>
      Book a free call
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[var(--background)]/85 backdrop-blur-md">
      <ScrollProgress />
      <div className="container mx-auto flex h-16 items-center justify-between gap-6 px-4">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="font-anton text-3xl tracking-wide text-logo text-glow"
        >
          SEF
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={cn(
                "relative font-lato text-sm transition-colors hover:text-white",
                isActive(l.href)
                  ? "text-white after:absolute after:-bottom-[21px] after:left-0 after:h-0.5 after:w-full after:bg-primary"
                  : "text-zinc-400"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <BookingLink className="hidden rounded-md bg-blue-600 px-4 py-2 font-lato text-sm font-bold text-white transition-colors hover:bg-blue-500 sm:inline-flex" />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-md text-zinc-300 hover:bg-white/5 hover:text-white md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="border-white/10 bg-[var(--background)] font-lato">
              <SheetHeader>
                <SheetTitle className="font-anton text-2xl tracking-wide text-logo">SEF</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col px-4">
                {[...navLinks, { href: "/contact", label: "Contact" }].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={cn(
                      "border-b border-white/5 py-4 text-lg hover:text-white",
                      isActive(l.href) ? "text-white" : "text-zinc-300"
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
                <BookingLink
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-md bg-blue-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-500"
                />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
