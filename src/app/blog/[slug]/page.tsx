import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { absoluteUrl, site } from "@/lib/site";
import { blogPosts, blogPostUrl, blogPublisher, getBlogPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found", robots: { index: false, follow: true } };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: blogPostUrl(post.slug),
      publishedTime: new Date(`${post.publishedAt}T09:00:00+05:30`).toISOString(),
      modifiedTime: new Date(`${post.updatedAt}T09:00:00+05:30`).toISOString(),
      siteName: site.name
    },
    twitter: { card: "summary", title: post.title, description: post.excerpt }
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": blogPostUrl(post.slug) },
    author: blogPublisher,
    publisher: blogPublisher,
    keywords: post.keywords.join(", ")
  };
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <article className="py-12 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <div className="container-wide">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted"><ArrowLeft size={16} /> All articles</Link>
        <Reveal>
          <header className="mx-auto mt-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[1.5px] text-forest">{post.category}</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-[-2px] sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 border-y border-ink/10 py-4 text-xs text-muted"><span className="inline-flex items-center gap-2"><Clock3 size={14} /> {post.readTime}</span><span>Prepared {new Date(`${post.publishedAt}T09:00:00+05:30`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span><span>MotionWell editorial content</span></div>
          </header>
        </Reveal>

        <div className="mx-auto mt-9 grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_270px] lg:gap-14">
          <div>
            <p className="border-l-4 border-lime pl-5 text-base leading-8 text-ink">{post.intro}</p>
            <div className="mt-8 space-y-9">
              {post.sections.map((section, index) => (
                <Reveal key={section.heading} delay={Math.min(index * 0.025, 0.1)}>
                  <section>
                    <h2 className="text-2xl font-bold leading-tight tracking-tight">{section.heading}</h2>
                    {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-8 text-muted">{paragraph}</p>)}
                    {section.bullets && <ul className="mt-4 space-y-3">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-7 text-muted"><CheckCircle2 size={17} className="mt-1 shrink-0 text-forest" />{bullet}</li>)}</ul>}
                  </section>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 rounded-2xl bg-mint p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[1.4px] text-forest">Key takeaway</p><p className="mt-3 text-base font-semibold leading-7 text-ink">{post.takeaway}</p></div>
            <p className="mt-7 text-xs leading-6 text-muted">Medical information note: This article is general education, not a diagnosis or an individual treatment plan. It must be reviewed by a qualified physiotherapist before public launch. Seek urgent medical care for emergency symptoms.</p>
          </div>

          <aside className="h-fit space-y-5 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-ink p-6 text-white"><p className="text-xs font-bold uppercase tracking-[1.3px] text-lime">Related service</p><h2 className="mt-3 text-xl font-bold">{post.relatedServiceTitle}</h2><p className="mt-3 text-sm leading-6 text-white/65">Explore the service and ask whether it is available in your area.</p><Link href={`/services/${post.relatedService}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-lime">View service <ArrowUpRight size={16} /></Link></div>
            <div className="rounded-3xl border border-ink/10 bg-white p-6"><h2 className="text-lg font-bold">Discuss your goals</h2><p className="mt-2 text-sm leading-6 text-muted">An enquiry can help you check service coverage and availability.</p><Link href="/#booking-form" className="btn-primary mt-5 w-full">Start an enquiry <ArrowUpRight size={16} /></Link></div>
          </aside>
        </div>

        <section className="mx-auto mt-16 max-w-5xl border-t border-ink/10 pt-10"><div className="flex items-end justify-between gap-4"><div><p className="eyebrow">Keep reading</p><h2 className="mt-3 text-2xl font-bold">Related guides</h2></div><Link href="/blog" className="text-sm font-bold text-forest">All articles ↗</Link></div><div className="mt-5 grid gap-4 sm:grid-cols-2">{related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="service-card"><span className="text-xs font-bold uppercase tracking-wide text-forest">{item.category} · {item.readTime}</span><h3 className="mt-4 text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{item.excerpt}</p></Link>)}</div></section>
      </div>
    </article>
  );
}
