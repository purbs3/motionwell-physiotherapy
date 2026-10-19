import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import ServiceAreaMap from "@/components/ServiceAreaMap";

export const metadata: Metadata = {
  title: "Home Physiotherapy Service Areas | Delhi NCR",
  description:
    "Enquire about home-visit physiotherapy in South Delhi, Gurugram, Noida and Ghaziabad. Contact MotionWell to check availability in your area.",
  alternates: {
    canonical: "/areas",
  },
};

export default function AreasPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-700">
            Service areas
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Home-visit physiotherapy in Delhi NCR
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Looking for physiotherapy at home? Explore the locations below
            and contact MotionWell Physiotherapy with your locality and PIN
            code. We will need to confirm home-visit availability for your
            exact address before an appointment can be accepted.
          </p>

          <a
            href={whatsappLink(
              "Hello MotionWell Physiotherapy, I would like to check home-visit availability in my area. My locality and PIN code are:"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-lime-600 px-6 py-3 font-semibold text-white transition hover:bg-lime-700"
          >
            Check my area on WhatsApp
          </a>
        </div>

        <div className="mt-12">
          <ServiceAreaMap areas={site.serviceAreas} />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.serviceAreas.map((area) => (
            <article
              key={area}
              className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-100 text-lime-800">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>

                <h2 className="text-lg font-bold">{area}</h2>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Contact us to check whether a home visit is available in
                your locality.
              </p>

              <a
                href={whatsappLink(
                  `Hello MotionWell Physiotherapy, please check home-visit availability in ${area}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-semibold text-lime-700 hover:text-lime-800"
              >
                Enquire about this area →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-slate-50 p-7 sm:p-10">
          <h2 className="text-2xl font-bold">
            Ready to enquire about a home visit?
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Share your location, preferred appointment time and
            physiotherapy requirements with our team.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full border border-slate-300 px-6 py-3 font-semibold transition hover:bg-white"
          >
            Contact MotionWell →
          </Link>
        </div>
      </section>
    </main>
  );
}