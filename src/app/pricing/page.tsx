import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Physiotherapy Home Visit Pricing | MotionWell",
  description:
    "Understand home-visit physiotherapy fees, session duration, packages and cancellation terms. Contact MotionWell for current pricing.",
  alternates: {
    canonical: "/pricing",
  },
};

const pricingItems = [
  {
    title: "Single Session",
    description: "For an individual home-visit appointment.",
    price: "Confirm price",
    details: [
      "Session duration confirmed before booking",
      "Treatment plan based on individual assessment",
      "Travel and location charges confirmed in advance, if applicable",
    ],
  },
  {
    title: "Multi-Session Package",
    description: "For patients considering multiple visits.",
    price: "Confirm package price",
    details: [
      "Number of sessions confirmed before purchase",
      "Package validity disclosed before payment",
      "Any savings or additional terms explained in advance",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-700">
            Transparent pricing
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Know the costs before your home visit
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We want you to understand the session fee, duration, package
            terms and cancellation policy before confirming an appointment.
            Contact us for current rates and availability.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pricingItems.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 p-7 sm:p-9"
            >
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="mt-3 text-slate-600">{item.description}</p>

              <p className="mt-7 text-2xl font-bold text-lime-700">
                {item.price}
              </p>

              <ul className="mt-6 space-y-3">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-slate-600">
                    <span className="font-bold text-lime-700">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-slate-50 p-7 sm:p-9">
          <h2 className="text-2xl font-bold">Cancellation policy</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Cancellation, rescheduling, refund and late-cancellation terms
            should be shared with you before the appointment is confirmed.
            Please ask our team for the current policy before booking.
          </p>

          <h2 className="mt-7 text-xl font-bold">
            What should you confirm?
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Final session fee and session duration</li>
            <li>Any travel or location-related charges</li>
            <li>Package price, number of sessions and validity</li>
            <li>Cancellation, rescheduling and refund terms</li>
          </ul>

          <a
            href={whatsappLink(
              "Hello MotionWell Physiotherapy, please share your current home-visit session fees, duration, package options and cancellation policy."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full bg-lime-600 px-6 py-3 font-semibold text-white hover:bg-lime-700"
          >
            Ask for pricing on WhatsApp
          </a>

          <p className="mt-5 text-sm text-slate-500">
            Physiotherapy home visits only. Final fees and appointment
            availability must be confirmed before booking.
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-block font-semibold text-lime-700"
          >
            Contact us →
          </Link>
        </div>
      </section>
    </main>
  );
}