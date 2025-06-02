import type { Metadata } from "next";
import { Anton, Roboto, Lato } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider";
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
    <html lang="en" suppressHydrationWarning className={`${anton.variable} ${roboto.variable} ${lato.variable}`}>
      <body className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--primary)]">
        <RootProvider>
          <main className="flex-grow">{children}</main>
        </RootProvider>
      </body>
    </html>
  );
}