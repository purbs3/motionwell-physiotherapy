import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Activity, Brain, HeartPulse, House, Users, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home Visit Physiotherapy Services in Delhi NCR",
  description: "Explore physiotherapy home visits for back and neck discomfort, sports injury rehabilitation, post-surgery recovery, senior mobility and more across selected Delhi NCR areas.",
  alternates: { canonical: "/services" }
};

const icons = [Activity, HeartPulse, ShieldCheck, Users, Brain, House];

export default function ServicesPage() {
  return <section className="py-16 md:py-24"><div className="container-wide">
    <Reveal><div className="eyebrow">Home visits only</div><h1 className="display-title mt-5 max-w-4xl">Physiotherapy at <span className="text-forest">your home.</span></h1><p className="section-copy mt-6 max-w-2xl">Every service listed here is delivered through a home visit, subject to clinical suitability and coverage confirmation. MotionWell does not offer clinic or centre appointments.</p></Reveal>
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{site.services.map((s, i) => { const Icon = icons[i]; return <Reveal key={s.slug} delay={i * .04}><Link href={`/services/${s.slug}`} className="service-card"><span className="icon-tile"><Icon size={22} /></span><h2 className="mt-6 text-xl font-bold">{s.title}</h2><p className="mt-3 text-sm leading-7 text-muted">{s.short}</p><span className="mt-auto pt-6 text-sm font-bold text-forest">Explore home visit <ArrowUpRight size={15} className="inline" /></span></Link></Reveal>; })}</div>
    <div className="mt-12 rounded-3xl bg-mint p-7 sm:p-10"><h2 className="text-2xl font-bold">Will a home visit be available in your area?</h2><p className="section-copy mt-3 max-w-xl">Share your locality and preferred time. We will confirm whether a home visit is available before accepting an appointment.</p><Link className="btn-primary mt-6" href="/#booking-form">Enquire for a home visit <ArrowUpRight size={17} /></Link></div>
  </div></section>;
}
