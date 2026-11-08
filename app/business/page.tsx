import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import BusinessSetupSection from "@/components/sections/business-setup-section";

export const metadata: Metadata = {
  title: "Business IT setup",
  description:
    "Networks, Wi-Fi, cabling, computers, POS, email and backups set up for restaurants, retail shops, salons and small offices. Free walkthrough and a flat written quote.",
};

export default function Page() {
  return (
    <PageShell>
      <BusinessSetupSection />
    </PageShell>
  );
}
