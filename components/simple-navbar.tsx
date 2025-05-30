"use client";

import Link from "next/link";

export default function SimpleNavbar() {
  return (
    <header className="shadow-md sticky top-0 z-50 bg-[var(--background)]">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* "logo" with link to homepage */}
        <Link href="/" className="text-4xl font-bold">SEF</Link>
        
        {/* Right side empty space or you could add a help button */}
        <div></div>
      </div>
    </header>
  );
}
