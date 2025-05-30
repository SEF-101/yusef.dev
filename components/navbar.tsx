"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isConnectPage = pathname === "/connect-to-server";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header className="shadow-md sticky top-0 z-50 bg-[var(--background)]">
      <ScrollProgress />
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* "logo" - links to home on main site, or root on connect page */}
        {isConnectPage ? (
          <a href="/" className="text-4xl font-bold py-4">SEF</a>
        ) : (
          <a href="#home" className="text-4xl font-bold">SEF</a>
        )}

        {/* normal nav - only show on main site */}
        {!isConnectPage && (
          <div className="hidden md:block">
            <NavigationMenu className="flex justify-center py-4">
              <NavigationMenuList className="flex gap-6">
                <NavigationMenuItem>
                  <NavigationMenuLink href="#experience" className="text-base">Experience</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#projects" className="text-base">Projects</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#about" className="text-base">About</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}

        {/* mobile menu button - only show on main site */}
        {!isConnectPage && (
          <button
            className="md:hidden text-[var(--primary)]"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* empty div to balance */}
        <div className="hidden md:block w-16"></div>
      </div>

      {/* mobile dropdown - only show on main site */}
      {!isConnectPage && mobileMenuOpen && (
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
          </nav>
        </div>
      )}
    </header>
  );
}
