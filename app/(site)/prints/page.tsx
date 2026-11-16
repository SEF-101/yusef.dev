import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import PrintsSection, { PrintsCta } from "@/components/sections/prints-section";

export const metadata: Metadata = {
  title: "3D prints",
  description:
    "Custom 3D prints made to order on a Bambu Lab P2S and mailed anywhere in the US: PLA, PETG, silk, ABS, ASA and TPU in up to 4 colors, with the exact price before anything prints.",
};

export default function Page() {
  return (
    <>
      <PageShell cta={false}>
        <PrintsSection />
      </PageShell>
      <PrintsCta />
    </>
  );
}
