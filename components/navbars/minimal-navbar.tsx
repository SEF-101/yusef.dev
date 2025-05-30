"use client";

import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Link from "next/link";

export default function MinimalNavbar() {
  return (
    <header className="shadow-md sticky top-0 z-50 bg-[var(--background)]">
      <ScrollProgress />
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Just logo */}
        <Link href="/" className="text-4xl font-bold py-4">SEF</Link>
        
        {/* Empty space for balance */}
        <div className="w-16"></div>
      </div>
    </header>
  );
}
