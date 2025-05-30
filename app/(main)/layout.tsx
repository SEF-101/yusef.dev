"use client";
import MainNavbar from "@/components/navbars/main-navbar";

export default function MainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavbar />
      {children}
    </>
  );
}
