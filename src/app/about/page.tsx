import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, HandHeart, MessageCircle, ShieldCheck, House } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About MotionWell Home Physiotherapy",
  description: "Learn about MotionWell's home-visit-only physiotherapy approach in Delhi NCR, including how enquiries, suitability checks and appointment confirmations work.",
  alternates: { canonical: "/about" }
};

const values = [
  { icon: House, title: "Care at home only", text: "Every appointment offered through MotionWell is intended to take place at the patient's home. We do not book clinic or centre visits." },
  { icon: MessageCircle, title: "Listen before planning", text: "Your goals, concerns and daily routine help shape the first conversation and the assessment." },
  { icon: Compass, title: "Clear next steps", text: "We discuss location coverage, clinician availability, suitability and scheduling before confirming a visit." },
  { icon: ShieldCheck, title: "Clinical care without promises", text: "Plans should be individual and guided by suitable clinical assessment. Results vary; no outcome is guaranteed." }
];

export default function AboutPage() {
  return <section className="py-16 md:py-24"><div className="container-wide"><Reveal><div className="eyebrow">Our approach</div><h1 className="display-title mt-5 max-w-4xl">Thoughtful care, <span className="text-forest">right at home.</span></h1><p className="section-copy mt-6 max-w-2xl">MotionWell is a home-visit-only physiotherapy service concept for selected Delhi NCR locations. The goal is to make it easier to enquire about care in your own environment, while being clear that coverage and clinical suitability must be confirmed before an appointment.</p></Reveal><div className="mt-12 grid gap-4 sm:grid-cols-2">{values.map(({ icon: Icon, title, text }, i) => <Reveal key={title} delay={i * .05}><div className="rounded-3xl border border-ink/10 bg-white/70 p-7 sm:p-9"><span className="icon-tile"><Icon size={22} /></span><h2 className="mt-6 text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-7 text-muted">{text}</p></div></Reveal>)}</div><div className="mt-12 rounded-3xl bg-ink p-8 text-white sm:p-12"><h2 className="text-2xl font-bold">Clinical trust is earned, not claimed.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">Before launch, add the real clinicians, verified qualifications and relevant registration details. Do not invent staff profiles, patient testimonials, treatment outcomes or service-area availability.</p><Link href="/contact" className="btn-primary mt-7 !bg-lime !text-ink">Enquire about a home visit <ArrowUpRight size={17} /></Link></div></div></section>;
}
