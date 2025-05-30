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

export default function MainNavbar() {
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
        {/* logo */}
        <a href="#home" className="text-4xl font-bold py-4">
          SEF
        </a>

        {/* nav menu */}
        <div className="hidden md:block">
          <NavigationMenu className="flex justify-center py-4">
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink href="#experience" className="text-base">
                  Experience
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#projects" className="text-base">
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about" className="text-base">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* mobile menu */}
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
            <a
              href="#experience"
              className="text-base hover:text-[var(--primary)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-base hover:text-[var(--primary)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-base hover:text-[var(--primary)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
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
                  {" "}
                  <Link
                    href="/family/connect-to-server"
                    className="block text-base hover:text-[var(--primary)] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Server Connection
                  </Link>
                  <Link
                    href="/family"
                    className="block text-base hover:text-[var(--primary)] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Family Dashboard
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
