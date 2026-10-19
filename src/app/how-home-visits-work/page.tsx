
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How Home Physiotherapy Visits Work | MotionWell",
    description:
        "Learn how to enquire about home physiotherapy with MotionWell, confirm Delhi NCR service availability, arrange a visit and discuss a personalised care plan.",
    alternates: {
        canonical: "/how-home-visits-work",
    },
};

const steps = [
    {
        number: "01",
        title: "Tell us what you need",
        description:
            "Share your locality, preferred time and the kind of physiotherapy support you are looking for.",
    },
    {
        number: "02",
        title: "Confirm your location",
        description:
            "We check whether home visits are available in your area and discuss suitable scheduling options.",
    },
    {
        number: "03",
        title: "Arrange your appointment",
        description:
            "Once availability and the appointment details are confirmed, we explain what to prepare for the visit.",
    },
    {
        number: "04",
        title: "Meet your physiotherapist",
        description:
            "The clinician assesses your needs, discusses your goals and explains an appropriate care plan.",
    },
];

export default function HomeVisitsWorkPage() {
    return (
        <main className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
            <section className="max-w-3xl">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-800">
                    A simple, thoughtful process
                </p>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#16332F] sm:text-5xl lg:text-6xl">
                    How home physiotherapy visits work
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Physiotherapy at home starts with understanding your needs and
                    confirming that a suitable clinician can visit your location.
                    Here is what to expect when you contact MotionWell.
                </p>

                <Link
                    href="/contact"
                    className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#174D43] px-6 py-3 font-semibold text-white transition hover:bg-[#103A33] focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                    Request a home visit <span aria-hidden="true">↗</span>
                </Link>
            </section>

            <section className="mt-16 grid gap-5 md:grid-cols-2">
                {steps.map((step) => (
                    <article
                        key={step.number}
                        className="rounded-3xl border border-gray-200 bg-white p-7 sm:p-9 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200 text-sm font-bold text-emerald-900">
                            {step.number}
                        </span>

                        <h2 className="mt-6 text-2xl font-bold text-[#16332F]">
                            {step.title}
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            {step.description}
                        </p>
                    </article>
                ))}
            </section>

            <section className="mt-12 rounded-3xl bg-[#E0F1E9] p-7 sm:p-10">
                <h2 className="text-2xl font-bold text-[#16332F]">
                    Before your appointment
                </h2>

                <ul className="mt-5 space-y-3 leading-7 text-gray-700">
                    <li>Keep any relevant medical reports or prescriptions available.</li>
                    <li>Tell us about mobility needs and any access requirements.</li>
                    <li>Share your goals and questions with your physiotherapist.</li>
                    <li>Confirm the visit time and applicable charges in advance.</li>
                </ul>

                <p className="mt-5 text-sm leading-6 text-gray-600">
                    Home visits depend on clinician availability and service coverage.
                    Physiotherapy is not a substitute for emergency medical care.
                </p>

                <Link
                    href="/areas"
                    className="mt-6 inline-flex items-center gap-2 font-bold text-[#174D43] underline-offset-4 hover:underline"
                >
                    Check service areas <span aria-hidden="true">↗</span>
                </Link>
            </section>
        </main>
    );
}
