import type { Metadata } from "next";
import { Anton, Roboto, Lato } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";


const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Yusef | SEF101",
  description: "SEF101 - Yusef's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${roboto.variable} ${lato.variable}`}>
      <body className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--primary)]">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}