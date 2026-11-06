import type { Metadata } from "next";
import { Anton, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Providers } from "@/components/providers";
import { EasterEggs } from "@/components/easter-eggs";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const description =
  "Hand-coded websites for small businesses and honest IT help: slow computers, viruses, Wi-Fi and networking, PC builds and laptop buying help. Remote anywhere in the US.";

export const metadata: Metadata = {
  title: {
    default: "SEF | Custom Websites & IT Help",
    template: "%s | SEF",
  },
  description,
  metadataBase: new URL("https://sef101.com"),
  // Private site: only people with the link should find it. Keeps it out of search results.
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SEF | Custom Websites & IT Help",
    description,
    url: "https://sef101.com",
    siteName: "SEF",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${lato.variable}`}>
      <body className="flex min-h-screen flex-col bg-[var(--background)] text-white">
        <Providers>
          <EasterEggs />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
