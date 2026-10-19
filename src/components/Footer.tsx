import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-wide grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
        <div>
          <Link href="/" className="inline-flex" aria-label="MotionWell home">
            <img
              src="/logo-light.png"
              alt="MotionWell logo"
              className="brand-image"
            />

            <span className="brand-text">
              <strong>MotionWell</strong>
              <small>HOME PHYSIOTHERAPY · DELHI NCR</small>
            </span>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">Home-visit-only physiotherapy enquiries, shaped around your goals and daily routine. Sessions take place at the patient's home when suitability and location coverage are confirmed.</p>
          <Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lime" href={whatsappLink("Hello MotionWell, I would like to enquire about a physiotherapy home visit.")} target="_blank" rel="noreferrer">Enquire for a home visit <ArrowUpRight size={16} /></Link>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <div className="grid gap-3 text-sm text-white/70">
            <Link href="/services">Home visit services</Link><Link href="/areas">Areas we serve</Link><Link href="/pricing">Pricing & fees</Link><Link href="/blog">Home care guides</Link><Link href="/faqs">FAQs</Link><Link href="/about">Our approach</Link><Link href="/contact">Enquiry & booking</Link><Link href="/privacy">Privacy notice</Link>
          </div>
        </div>
        <div>
          <p className="footer-heading">Call us</p>
          <div className="grid gap-2 text-sm text-white/80">
            {site.contactNumbers.map((number) => (
              <a key={number.href} href={number.href} className="w-fit underline-offset-4 hover:text-lime hover:underline">
                {number.display} <span className="ml-1 text-xs text-white/45">({number.label})</span>
              </a>
            ))}
          </div>
          <p className="footer-heading mt-7">Home visit coverage</p>
          <p className="text-sm leading-7 text-white/70">{site.serviceAreas.join(" · ")}<br />These are starter coverage zones. Confirm the actual service areas and exact locality availability before publishing.</p>
          <p className="mt-5 text-xs leading-5 text-white/45">No clinic appointments are offered through this website. The enquiry form is not a confirmed appointment. This site provides general information, not a diagnosis or emergency service.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col justify-between gap-3 py-5 text-xs text-white/45 sm:flex-row">
          <span>© {new Date().getFullYear()} MotionWell Physiotherapy. All rights reserved.</span>

        </div>
      </div>
    </footer>
  );
}
