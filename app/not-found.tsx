import Link from "next/link";
import { Button } from "@/components/ui/button";
import MinimalNavbar from "@/components/navbars/minimal-navbar";

export default function NotFound() {
  return (
    <>
      <MinimalNavbar />
      <div className="container mx-auto flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-5xl mb-6 text-[var(--primary)]">404 - Page Not Found</h1>
        <p className="text-xl mb-8 text-[var(--primary)]">
          Seems you may have taken a wrong turn. No worries, click below to return home.
        </p>
        <Button 
          variant="ghost" 
          size="lg" 
          className="border border-[var(--primary)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
        >
          <Link href="/" className="px-8 py-2">
            Return Home
          </Link>
        </Button>
      </div>
    </>
  );
}
