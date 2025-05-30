import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 text-[var(--primary)]">404 - Page Not Found</h1>
        <p className="text-xl mb-8 text-[var(--primary)]">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild size="lg">
          <Link href="/" className="px-8 py-2">
            Return Home
          </Link>
        </Button>

    </div>
  );
}
