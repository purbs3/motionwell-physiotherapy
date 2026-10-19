import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Learn how MotionWell's enquiry form, WhatsApp links and analytics may handle information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true }
};

export default function PrivacyPage() {
  return <section className="py-16 md:py-24"><div className="container-wide max-w-3xl"><div className="eyebrow">Privacy</div><h1 className="display-title mt-5">Privacy notice</h1><p className="section-copy mt-6">This starter notice must be reviewed and customised by the business before launch. It is not legal advice.</p><div className="mt-10 space-y-8 text-sm leading-8 text-muted"><section><h2 className="text-xl font-bold text-ink">Information you provide</h2><p className="mt-3">The enquiry form uses information you enter to prepare a message for WhatsApp. The current website does not submit the form to a MotionWell database. If you send the message, WhatsApp processes it under its own terms and privacy policy.</p></section><section><h2 className="text-xl font-bold text-ink">Analytics and advertising</h2><p className="mt-3">If analytics or advertising IDs are configured, measurement scripts may collect technical and interaction information. Configure consent, disclosures, retention and advertising settings in accordance with applicable law and platform policies before enabling them.</p></section><section><h2 className="text-xl font-bold text-ink">Health information</h2><p className="mt-3">Do not send sensitive medical records through this enquiry form. Share only the minimum information needed to arrange an initial conversation, and use an appropriately secure channel for clinical information.</p></section><section><h2 className="text-xl font-bold text-ink">Contact and updates</h2><p className="mt-3">Replace this paragraph with the real legal business name, privacy contact, data-controller details, retention periods, user-rights process and effective date before publishing.</p></section></div></div></section>;
}