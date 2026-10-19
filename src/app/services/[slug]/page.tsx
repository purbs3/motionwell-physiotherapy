import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { absoluteUrl, site, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return site.services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = site.services.find((item) => item.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} | Home Visits in Delhi NCR`,
    description: `${service.short} This physiotherapy service is offered through home visits only, subject to suitability and confirmed locality coverage.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.title} | MotionWell Physiotherapy`, description: service.short, url: absoluteUrl(`/services/${service.slug}`) }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = site.services.find((item) => item.slug === slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: "Physiotherapy home visit",
    description: service.detail,
    provider: { "@type": "MedicalBusiness", name: site.name, url: site.url },
    areaServed: site.serviceAreas.map((name) => ({ "@type": "City", name }))
  };

  return <section className="py-16 md:py-24"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} /><div className="container-wide">
    <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-muted"><ArrowLeft size={16} /> All services</Link>
    <Reveal><div className="mt-12 max-w-4xl"><div className="eyebrow">Home visit physiotherapy · Delhi NCR</div><h1 className="display-title mt-5">{service.title} <span className="text-forest">in Delhi NCR.</span></h1><p className="section-copy mt-6 max-w-2xl">{service.short}</p></div></Reveal>
    <div className="mt-12 grid gap-10 md:grid-cols-[1fr_350px]">
      <Reveal><article className="max-w-3xl rounded-3xl border border-ink/10 bg-white/70 p-7 sm:p-10"><h2 className="text-2xl font-bold">What to expect at your home visit</h2><p className="mt-4 text-sm leading-8 text-muted">{service.detail}</p><h2 className="mt-9 text-xl font-bold">Your plan should be individual</h2><p className="mt-3 text-sm leading-8 text-muted">A physiotherapist visit takes place at your home only, after the enquiry, exact location and clinician availability are confirmed. The clinician will discuss your history, goals and suitability before agreeing any care plan. Treatment outcomes vary; no specific result can be guaranteed. Follow advice from your treating doctor and seek urgent medical help for emergency symptoms.</p><ul className="mt-6 space-y-3 text-sm text-ink">{["Discuss your goals and everyday activities", "Check service-area and clinician availability", "Agree suitable next steps after assessment"].map((x) => <li key={x} className="flex gap-3"><CheckCircle2 size={18} className="shrink-0 text-forest" />{x}</li>)}</ul></article></Reveal>
      <aside className="h-fit rounded-3xl bg-mint p-7"><h2 className="text-xl font-bold">Request a home visit</h2><p className="mt-3 text-sm leading-7 text-muted">Share your exact locality and preferred time. We will confirm whether a home visit is available; MotionWell does not offer clinic appointments.</p><Link className="btn-primary mt-6 w-full" href={whatsappLink(`Hello MotionWell, I'd like to enquire about ${service.title}.`)} target="_blank" rel="noreferrer">Enquire on WhatsApp <ArrowUpRight size={16} /></Link><Link className="mt-4 block text-center text-sm font-semibold text-forest" href="/contact">Use the home-visit enquiry form</Link></aside>
    </div>
  </div></section>;
}