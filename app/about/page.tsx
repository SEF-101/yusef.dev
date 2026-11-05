import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import MeetYusefSection from "@/components/sections/meet-yusef-section";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Yusef, the software engineer behind SEF, the Software & Electronics Firm.",
};

export default function Page() {
  return (
    <PageShell>
      <MeetYusefSection />
    </PageShell>
  );
}
