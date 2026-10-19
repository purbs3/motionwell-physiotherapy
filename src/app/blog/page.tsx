import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3, BookOpen } from "lucide-react";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Home Physiotherapy Guides | MotionWell Journal",
  description: "Practical guides about physiotherapy home visits, preparing for a home assessment, back pain questions and safe everyday movement. Educational information from MotionWell Physiotherapy.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Home Physiotherapy Advice & Guides | MotionWell",
    description: "Read practical guides for preparing for home physiotherapy visits and navigating everyday movement questions.",
    url: "/blog",
    type: "website"
  }
};

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        <Reveal>
          <div className="eyebrow">The MotionWell journal</div>
          <h1 className="display-title mt-5 max-w-4xl">Useful guidance for <span className="text-forest">physiotherapy at home.</span></h1>
          <p className="section-copy mt-6 max-w-2xl">Thoughtful, plain-language reading about home physiotherapy visits and everyday movement. These guides are general information, not a diagnosis or a personalised treatment plan.</p>
        </Reveal>

        {featured && (
          <Reveal delay={0.08}>
            <Link href={`/blog/${featured.slug}`} className="group mt-12 grid overflow-hidden rounded-[28px] border border-ink/10 bg-white md:grid-cols-[.8fr_1.2fr]">
              <div className="flex min-h-[230px] flex-col justify-between bg-mint p-7 sm:p-10">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-xs font-bold text-forest"><BookOpen size={14} /> FEATURED GUIDE</span>
                <div className="mt-10"><p className="text-xs font-bold uppercase tracking-[1.4px] text-forest">{featured.category}</p><p className="mt-3 flex items-center gap-2 text-xs text-muted"><Clock3 size={14} /> {featured.readTime}</p></div>
              </div>
              <div className="p-7 sm:p-10 md:p-12"><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{featured.title}</h2><p className="mt-4 text-sm leading-7 text-muted">{featured.excerpt}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-forest">Read the guide <ArrowUpRight size={17} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" /></span></div>
            </Link>
          </Reveal>
        )}

        <div className="mt-12 flex items-end justify-between gap-4"><div><p className="eyebrow">Explore the journal</p><h2 className="mt-3 text-2xl font-bold tracking-tight">More practical reads</h2></div><span className="text-sm text-muted">{blogPosts.length} guides</span></div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link href={`/blog/${post.slug}`} className="service-card group h-full">
                <div className="flex items-center justify-between"><span className="rounded-full bg-mint px-3 py-2 text-xs font-bold text-forest">{post.category}</span><span className="text-xs text-muted">{post.readTime}</span></div>
                <h3 className="mt-6 text-xl font-bold tracking-tight">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{post.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-forest">Read article <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-ink p-7 text-white sm:p-10">
          <h2 className="text-2xl font-bold">Have a question about home physiotherapy?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">Read the service overview or send an enquiry about coverage and availability in your area.</p>
          <div className="mt-6 flex flex-wrap gap-3"><Link href="/services" className="btn-primary !bg-lime !text-ink">Explore services <ArrowUpRight size={16} /></Link><Link href="/#booking-form" className="btn-secondary !border-white/25 !text-white">Send an enquiry</Link></div>
        </div>
        <p className="mt-8 text-xs leading-6 text-muted">Editorial note: These are starter articles. Have a qualified physiotherapist review the clinical information and confirm the content before publishing. Add the real reviewer and credentials only after verification.</p>
      </div>
    </section>
  );
}
