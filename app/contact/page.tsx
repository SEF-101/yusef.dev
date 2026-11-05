import type { Metadata } from "next";
import ContactSection from "@/components/sections/contact-section";
import FAQSection from "@/components/sections/faq-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 15-minute call or ask for a flat-price quote on a website or IT job. Answers to common questions about how SEF works.",
};

export default function Page() {
  return (
    <>
      <ContactSection />
      <section id="faq" className="scroll-mt-20 py-24">
        <FAQSection />
      </section>
    </>
  );
}
