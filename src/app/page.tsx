import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Activity, HeartPulse, House, ShieldCheck, Sparkles, Stethoscope, Users, Brain } from "lucide-react";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import { site } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

const iconMap = [Activity, HeartPulse, ShieldCheck, Users, Brain, House];
const steps = [
  { n: "01", title: "Tell us what you need", text: "Share your goals, your area and the kind of support you are looking for." },
  { n: "02", title: "Check availability", text: "We discuss suitability, location coverage, scheduling and next steps." },
  { n: "03", title: "Plan your care", text: "A qualified clinician assesses your needs before agreeing a suitable plan." }
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="container-wide hero-grid">
          <Reveal>
            <div className="eyebrow">Home-visit-only physiotherapy · Delhi NCR</div>
            <h1 className="display-title mt-6 max-w-[650px]">Physiotherapy that <span className="text-forest">comes to you.</span></h1>
            <p className="section-copy mt-6 max-w-[490px]">MotionWell provides physiotherapy through home visits only. A clinician visits your home when the service is suitable and coverage is confirmed. We do not offer clinic or centre appointments.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="#booking-form">Request a home visit <ArrowUpRight size={18} /></Link>
              <Link className="btn-secondary" href="/services">Explore services <ArrowDownRight size={17} /></Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-muted">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-forest" /> Care planned around your goals</span>
              <span className="inline-flex items-center gap-2"><House size={16} className="text-forest" /> Home visits only</span>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="hero-visual">
              <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85" alt="Physiotherapy professional discussing movement goals with a patient" width={1100} height={1300} priority className="!absolute inset-0" unoptimized />
              <div className="hero-note">
                <div className="flex items-center gap-2 text-xs font-bold text-forest"><Sparkles size={15} /> YOUR GOALS FIRST</div>
                <p className="mt-2 text-sm leading-6 text-ink">A thoughtful plan starts with listening, assessment and clear next steps.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/60 py-6">
        <div className="container-wide flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-[1.5px] text-muted">Ask about home visits in</p>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-semibold text-ink">{site.serviceAreas.map((area) => <span key={area}>{area}</span>)}</div>
        </div>
      </section>

      <ServiceAreaMap />

      <section id="booking-form" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-wide grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="eyebrow">Quick enquiry</div>
            <h2 className="section-title mt-4 max-w-xl">Tell us where you need a home visit.</h2>
            <p className="section-copy mt-5 max-w-lg">Fill in the short form and continue to WhatsApp. We provide care at the patient’s home only; the exact locality, clinician availability and appointment time must be confirmed first.</p>
            <div className="mt-7 space-y-3 text-sm text-muted">
              <p className="flex items-center gap-3"><ShieldCheck size={17} className="text-forest" /> Your area helps us check home-visit coverage.</p>
              <p className="flex items-center gap-3"><House size={17} className="text-forest" /> Home visits depend on your exact location and availability.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft sm:p-9">
              <h3 className="text-2xl font-bold tracking-tight">Request a home visit</h3>
              <p className="mb-7 mt-2 text-sm leading-6 text-muted">Share your contact details and preferred time. This is an enquiry, not a confirmed appointment.</p>
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide">
          <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><div className="eyebrow">Support that fits your life</div><h2 className="section-title mt-4 max-w-[590px]">A clearer path to your next move.</h2></div>
            <p className="section-copy max-w-md">Choose the type of support you need at home. Every care plan starts with an individual assessment, and suitability depends on your needs.</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((service, i) => {
              const Icon = iconMap[i] || Stethoscope;
              return <Reveal key={service.slug} delay={i * .04}>
                <Link href={`/services/${service.slug}`} className="service-card group">
                  <div className="flex items-start justify-between"><span className="icon-tile"><Icon size={22} /></span><ArrowUpRight size={19} className="text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
                  <h3 className="mt-6 text-lg font-bold tracking-tight">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{service.short}</p>
                  <span className="mt-auto pt-5 text-xs font-bold text-forest">Explore service <ArrowRight size={14} className="ml-1 inline" /></span>
                </Link>
              </Reveal>;
            })}
          </div>
          <div className="mt-7 text-center"><Link className="btn-secondary" href="/services">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-wide">
          <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><div className="eyebrow">The MotionWell journal</div><h2 className="section-title mt-4 max-w-[600px]">Helpful reads for everyday movement.</h2></div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-forest">Visit the journal <ArrowUpRight size={16} /></Link>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="service-card group h-full">
                  <div className="flex items-center justify-between gap-3"><span className="rounded-full bg-mint px-3 py-2 text-xs font-bold text-forest">{post.category}</span><span className="text-xs text-muted">{post.readTime}</span></div>
                  <h3 className="mt-6 text-lg font-bold tracking-tight">{post.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-forest">Read guide <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-xs leading-6 text-muted">Our articles are educational and do not replace personalised advice. Clinical content should be reviewed by a qualified physiotherapist before publication.</p>
        </div>
      </section>

      <section className="bg-mint py-20 md:py-24">
        <div className="container-wide grid gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-20">
          <Reveal><div className="eyebrow">A simple start</div><h2 className="section-title mt-4">A home visit starts with a good conversation.</h2><p className="section-copy mt-5">No one-size-fits-all promises. Just a clear first step to understand your needs and check whether a physiotherapy home visit is suitable and available in your area.</p><Link href="/contact" className="btn-primary mt-7">Ask about availability <ArrowUpRight size={17} /></Link></Reveal>
          <div className="space-y-7">
            {steps.map((step, i) => <Reveal key={step.n} delay={i * .08}><div className="flex gap-5 border-b border-forest/15 pb-7"><span className="step-number shrink-0">{step.n}</span><div><h3 className="text-lg font-bold">{step.title}</h3><p className="mt-2 max-w-lg text-sm leading-7 text-muted">{step.text}</p></div></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide overflow-hidden rounded-[30px] bg-ink px-6 py-12 text-white sm:px-12 md:px-16 md:py-16">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div><div className="eyebrow !text-lime">Your next step</div><h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Tell us where you need physiotherapy at home.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/65">Ask whether a clinician can visit your area, discuss your goals and confirm the next step.</p></div>
            <Link href="/contact" className="btn-primary w-fit !bg-lime !text-ink">Enquire now <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}