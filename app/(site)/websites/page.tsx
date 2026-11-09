import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import WebsitesSection from "@/components/sections/services-section";

export const metadata: Metadata = {
  title: "Websites",
  description: "Hand-coded websites for small businesses: a one-page site, a five-page business site or an online store, each at one flat price, plus care plans that cover hosting and edits.",
};

export default function Page() {
  return (
    <PageShell>
      <WebsitesSection />
    </PageShell>
  );
}
