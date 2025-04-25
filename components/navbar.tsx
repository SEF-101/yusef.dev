"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export default function Navbar() {
  return (
    <header className="shadow-md sticky top-0 z-50 bg-[var(--background)]">
      <ScrollProgress />
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* "logo" */}
        <div className="text-4xl font-bold">SEF</div>
        {/* menu choices */}
        <NavigationMenu className="flex justify-center py-4">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="#home" className="text-base">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#projects" className="text-base">Projects</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#about" className="text-base">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#contact" className="text-base">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* empty div to balance layout */}
        <div className="w-16"></div>
      </div>
    </header>
  );
}
