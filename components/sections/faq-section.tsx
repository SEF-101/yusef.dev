import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";
import { emergencyFee, hourlyRate, usd } from "@/lib/services";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "Do you work weekdays?",
    a: "SEF jobs happen on weekends. I answer messages within 24 hours, any day of the week, and we book the next open weekend slot.",
  },
  {
    q: "What if it's an emergency?",
    a: `Text ${site.textNumber} and say it's urgent. If I can take it sooner, it jumps the line and a ${usd(emergencyFee)} emergency fee is added to the job's price. Emergency help is remote only for now, with no in-person emergency visits.`,
  },
  {
    q: "How does remote help work?",
    a: "You start a secure screen-share session, I fix things while you watch, and the session ends when you close it. I can't connect unless you let me in.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. The domain is registered in your name, and if you ever leave the care plan, you get the code and can host it anywhere.",
  },
  {
    q: "What if you can't fix it?",
    a: "I'll tell you straight away and you won't pay for a fix that didn't happen. For hardware, the $35 diagnostic covers the time it takes to find the problem.",
  },
  {
    q: "Should I back up first?",
    a: "If you can, yes. If you're not sure how, I'll check for a backup before I start, and I can set one up for you.",
  },
  {
    q: "Can you buy the parts for my PC build?",
    a: "Yes. You pay for the parts up front, I order them, and there's a $40 sourcing fee. Or buy them yourself and just pay for the build.",
  },
  {
    q: "How do I pay?",
    a: `Invoice, Venmo, Zelle or cash. Websites are 50% up front and 50% at launch. IT jobs are paid when the job's done. Anything off the menu is ${usd(hourlyRate)}/hour, quoted first.`,
  },
];

export default function FAQSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading title="Questions" intro="Straight answers to what people ask before booking." />
        </div>
        <Accordion type="single" collapsible className="lg:col-span-8">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-white/10">
              <AccordionTrigger className="py-5 font-lato text-lg text-white hover:no-underline hover:text-logo">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="font-lato text-base leading-relaxed text-zinc-400">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
