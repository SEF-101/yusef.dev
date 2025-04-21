import type { Metadata } from "next";
import { Anton } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";


const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "SEF101",
  description: "SEF101 - A Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable}`}>
      <body className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--primary)]">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}