"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Web Dev" },
  { href: "#it-services", label: "IT" },
  { href: "#process", label: "How It Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isConnectPage = pathname === "/connect-to-server";

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-white/5">
      <ScrollProgress />
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {isConnectPage ? (
          <a href="/" className="text-3xl font-bold font-anton tracking-wide text-primary">SEF</a>
        ) : (
          <a href="#home" className="text-3xl font-bold font-anton tracking-wide text-primary">SEF</a>
        )}

        {!isConnectPage && (
          <div className="hidden md:block">
            <NavigationMenu className="flex justify-center">
              <NavigationMenuList className="flex gap-8">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      href={link.href}
                      className="text-sm font-lato text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}

        {!isConnectPage && (
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        <div className="hidden md:block w-16"></div>
      </div>

      {!isConnectPage && mobileMenuOpen && (
        <div className="md:hidden bg-[var(--background)] border-t border-white/5 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-lato text-gray-400 hover:text-white transition-colors uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
