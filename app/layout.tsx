import type { Metadata } from "next";
import { Anton, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/navbar";
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

export const metadata: Metadata = {
  title: "SEF | Custom Websites & IT Services",
  description: "Custom-built websites and hands-on IT support. No templates, no shortcuts — just real work from a real developer.",
  metadataBase: new URL("https://sef101.com"),
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${lato.variable}`}>
      <body className="flex flex-col min-h-screen bg-[var(--background)] text-white">
        <Providers>
          <EasterEggs />
          <Navbar />
          <main className="flex-grow">
            <Analytics />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
