
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Patient Reviews | MotionWell Physiotherapy",
    description:
        "Learn what to consider when choosing a home physiotherapy service. Contact MotionWell to enquire about home visits in selected Delhi NCR locations.",
    alternates: {
        canonical: "/reviews",
    },
};

export default function ReviewsPage() {
    return (
        <main className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
            <section className="max-w-3xl">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-800">
                    Patient experiences
                </p>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#16332F] sm:text-5xl lg:text-6xl">
                    Trust begins with the right care.
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Choosing a physiotherapist for a home visit is a personal decision.
                    We believe patients should have clear information about the service,
                    clinician qualifications, appointment process and applicable fees.
                </p>
            </section>

            <section className="mt-12 grid gap-5 md:grid-cols-3">
                {[
                    {
                        title: "Clinician qualifications",
                        text: "Ask about relevant qualifications, registration and experience before arranging a visit.",
                    },
                    {
                        title: "Clear communication",
                        text: "Understand the proposed assessment, care plan, appointment duration and charges.",
                    },
                    {
                        title: "Your individual goals",
                        text: "Discuss your needs and ask how progress will be reviewed during your care.",
                    },
                ].map((item) => (
                    <article
                        key={item.title}
                        className="rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <h2 className="text-xl font-bold text-[#16332F]">
                            {item.title}
                        </h2>
                        <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
                    </article>
                ))}
            </section>

            <section className="mt-10 rounded-3xl bg-[#E0F1E9] p-7 sm:p-10">
                <h2 className="text-2xl font-bold text-[#16332F]">
                    Have you used our service?
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-gray-700">
                    We welcome honest feedback from patients who have actually used
                    our service. Reviews should be voluntary, shared with permission
                    and published without misleading medical claims.
                </p>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                    Patient testimonials will appear here once genuine, authorised
                    feedback is available. No sample or fictional reviews are presented
                    as real patient experiences.
                </p>

                <Link
                    href="/contact"
                    className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#174D43] px-6 py-3 font-semibold text-white transition hover:bg-[#103A33] focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                    Enquire about a home visit <span aria-hidden="true">↗</span>
                </Link>
            </section>
        </main>
    );
}
