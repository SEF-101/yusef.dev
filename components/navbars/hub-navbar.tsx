"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { AuroraText } from "../magicui/aurora-text";

export default function HubNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidesDropdownOpen, setGuidesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleGuidesDropdown = () => {
    setGuidesDropdownOpen(!guidesDropdownOpen);
  };

  return (
    <header className="shadow-md sticky top-0 z-50 bg-[var(--background)]">
      <ScrollProgress />
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/hub" className="text-4xl font-bold py-4">
          <span>SEF</span>
                    <AuroraText 
            className="text-2xl ml-1" 
            colors={["#3B82F6", "#4C51BF", "#9370DB"]}
          >
            Support
          </AuroraText>
        </Link>

        <div className="hidden md:block">
          <NavigationMenu className="flex justify-center py-4">
            <NavigationMenuList className="flex gap-6">              <NavigationMenuItem>
                <NavigationMenuLink asChild className="text-lg">
                  <Link href="/hub">
                    Hub Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-lg">
                  <Link href="/">
                    View My Portfolio
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* mobile menu button */}
        <button
          className="md:hidden text-[var(--primary)]"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* empty div to balance */}
        <div className="hidden md:block w-16"></div>
      </div>

      {/* mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--background)] py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/hub"
              className="text-base hover:text-[var(--primary)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <div className="relative">
              <button
                className="flex items-center text-base hover:text-[var(--primary)] transition-colors w-full text-left"
                onClick={toggleGuidesDropdown}
              >
                Guides{" "}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    guidesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {guidesDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/hub/guides#vpn"
                    className="block text-base hover:text-[var(--primary)] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    VPN Connection
                  </Link>
                  <Link
                    href="/hub/guides#plex"
                    className="block text-base hover:text-[var(--primary)] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Plex Media
                  </Link>
                  <Link
                    href="/hub/guides#files"
                    className="block text-base hover:text-[var(--primary)] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    File Access
                  </Link>
                  <Link
                    href="/hub/guides#troubleshooting"
                    className="block text-base hover:text-[var(--primary)] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Troubleshooting
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/"
              className="text-base hover:text-[var(--primary)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Back to Main Site
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
