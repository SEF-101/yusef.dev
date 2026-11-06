import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import ITServicesSection from "@/components/sections/it-services-section";

export const metadata: Metadata = {
  title: "IT help",
  description: "Flat-price IT help, remote or in person: slow-computer fixes, virus cleanup, new computer setup, Wi-Fi and network setup, Ethernet cable runs, printers and email, hardware repairs and custom PC builds.",
};

export default function Page() {
  return (
    <PageShell>
      <ITServicesSection />
    </PageShell>
  );
}
