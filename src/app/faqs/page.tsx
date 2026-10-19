import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CircleHelp } from "lucide-react";
import Reveal from "@/components/Reveal";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home Physiotherapy FAQs | MotionWell Delhi NCR",
  description: "Answers about MotionWell home physiotherapy visits, service coverage, booking, pricing and what to expect before an appointment in Delhi NCR.",
  alternates: { canonical: "/faqs" },
  openGraph: { title: "Home Physiotherapy FAQs | MotionWell", description: "Read practical answers about home visits, coverage and booking.", url: absoluteUrl("/faqs") }
};

const faqs = [
  { q: "Does MotionWell offer clinic appointments?", a: "No. MotionWell is designed for physiotherapy home visits only. A clinician visits the patient's home when the service is suitable and the exact location and appointment are confirmed." },
  { q: "Which Delhi NCR areas do you cover?", a: `The website currently shows ${site.serviceAreas.join(", ")} as starter enquiry zones. These are not a guarantee of live coverage. Share your exact locality so the team can confirm whether a visit is available.` },
  { q: "How do I request a home visit?", a: "Use the website enquiry form to share your name, contact number, broad area, support needed and preferred time. The form opens WhatsApp with a prepared message; you need to send it to submit the enquiry." },
  { q: "Is my appointment confirmed when I submit the form?", a: "No. Submitting an enquiry does not confirm a booking. The team must confirm clinician availability, location coverage, suitability and appointment time." },
  { q: "How much does a home physiotherapy visit cost?", a: "The final fee should be confirmed before booking. It may depend on the service required, session details and exact locality. Ask about session duration, travel charges if any, payment terms and cancellation policy." },
  { q: "What should I prepare before the first visit?", a: "Write down your main goals, symptoms and questions. Keep any relevant medical instructions available to discuss with the clinician, but do not send sensitive records through the general website form. Follow your treating doctor's advice." },
  { q: "Can physiotherapy help with every condition?", a: "No single treatment is suitable for everyone. A qualified clinician needs to assess whether home physiotherapy is appropriate. Some conditions require urgent care, in-person medical assessment or a multidisciplinary team." },
  { q: "What if I have severe or sudden symptoms?", a: "Do not wait for a website reply for a medical emergency, severe sudden symptoms, new major weakness, chest pain, breathing difficulty or rapidly worsening condition. Seek urgent medical care." }
];

export default function FAQsPage() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  return <section className="py-16 md:py-24"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}/><div className="container-wide"><Reveal><div className="eyebrow">Frequently asked questions</div><h1 className="display-title mt-5 max-w-4xl">Home physiotherapy, <span className="text-forest">explained.</span></h1><p className="section-copy mt-6 max-w-2xl">Helpful information about home visits, coverage, fees and booking. Your individual care plan and suitability must be discussed with a qualified clinician.</p></Reveal><div className="mx-auto mt-10 max-w-4xl space-y-3">{faqs.map((item,i)=><Reveal key={item.q} delay={i*.025}><details className="group rounded-2xl border border-ink/10 bg-white/80 p-5 sm:p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold"><span className="flex items-start gap-3"><CircleHelp className="mt-0.5 shrink-0 text-forest" size={19}/>{item.q}</span><span className="text-xl text-forest transition group-open:rotate-45">+</span></summary><p className="mt-4 pl-8 text-sm leading-7 text-muted">{item.a}</p></details></Reveal>)}</div><div className="mt-10 rounded-3xl bg-mint p-7 sm:p-9"><h2 className="text-2xl font-bold">Still have a question?</h2><p className="section-copy mt-3">Ask about your exact locality and whether a home visit may be suitable.</p><Link href="/contact#booking-form" className="btn-primary mt-6">Enquire for a home visit <ArrowUpRight size={17}/></Link></div></div></section>;
}
