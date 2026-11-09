import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import WorkSection from "@/components/sections/work-section";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Websites and systems built and run by SEF, including a custom campaign site, a startup website and a self-hosted homelab.",
};

export default function Page() {
  return (
    <PageShell>
      <WorkSection />
    </PageShell>
  );
}
