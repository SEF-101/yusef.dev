import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import ITServicesSection from "@/components/sections/it-services-section";

export const metadata: Metadata = {
  title: "IT help",
  description: "IT help, remote or in person: flat prices for slow-computer fixes, new computer setup, printers and email, and free quotes for virus cleanup, Wi-Fi and networks, Ethernet cable runs, hardware repairs and custom PC builds.",
};

export default function Page() {
  return (
    <PageShell>
      <ITServicesSection />
    </PageShell>
  );
}
