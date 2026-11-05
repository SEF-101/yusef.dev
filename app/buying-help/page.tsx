import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import BuyingHelpSection from "@/components/sections/buying-help-section";

export const metadata: Metadata = {
  title: "Buying help",
  description: "Find the right laptop or computer without the upsell: a Laptop Match video call, a shopping trip together, and setup when it arrives.",
};

export default function Page() {
  return (
    <PageShell>
      <BuyingHelpSection />
    </PageShell>
  );
}
