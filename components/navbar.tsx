"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="shadow-md sticky top-0 z-50 bg-[var(--background)]">
      <ScrollProgress />
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* "logo" */}
        <a href="#home" className="text-4xl font-bold">SEF</a>
        
        {/* normal nav */}
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
            <a 
              href="#contact" 
              className="text-base hover:text-[var(--primary)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
