"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { trackAdsEnquiryHandoff, trackEvent } from "@/lib/analytics";
import { whatsappLink } from "@/lib/site";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    need: "Physiotherapy home visit",
    time: "Flexible"
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const areaFromLink = params.get("area");
    if (areaFromLink) {
      setForm((previous) => ({ ...previous, area: areaFromLink }));
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hello MotionWell, I'd like to enquire about a physiotherapy home visit.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Area: ${form.area}`,
      `Support needed: ${form.need}`,
      `Preferred time: ${form.time}`
    ].join("\n");

    trackEvent("booking_form_submit", { service: form.need, area: form.area });
    trackEvent("booking_whatsapp_click", { source: "booking_form" });
    trackAdsEnquiryHandoff();
    setSubmitted(true);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  const update = (key: keyof typeof form, value: string) =>
    setForm((previous) => ({ ...previous, [key]: value }));

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitted && (
        <div className="flex gap-2 rounded-2xl bg-mint p-3 text-sm text-forest" role="status">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
          WhatsApp is opening with your enquiry. Please send the message to complete your request.
        </div>
      )}
      <div>
        <label className="field-label" htmlFor="name">Your name</label>
        <input id="name" className="field" required autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Enter your name" />
      </div>
      <div>
        <label className="field-label" htmlFor="phone">Phone number</label>
        <input id="phone" className="field" required type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+() -]{8,18}" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 ..." />
      </div>
      <div>
        <label className="field-label" htmlFor="area">Where do you need the home visit?</label>
        <input id="area" className="field" required autoComplete="address-level2" value={form.area} onChange={(e) => update("area", e.target.value)} placeholder="e.g. Saket, Gurugram sector, Noida sector" />
      </div>
      <div>
        <label className="field-label" htmlFor="need">What kind of home-visit support do you need?</label>
        <select id="need" className="field" value={form.need} onChange={(e) => update("need", e.target.value)}>
          <option>Physiotherapy home visit</option>
          <option>Back & neck pain support at home</option>
          <option>Sports injury rehabilitation at home</option>
          <option>Post-surgery rehabilitation at home</option>
          <option>Senior mobility & balance at home</option>
          <option>Neurological rehabilitation at home</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div>
        <label className="field-label" htmlFor="time">Preferred time</label>
        <select id="time" className="field" value={form.time} onChange={(e) => update("time", e.target.value)}>
          <option>Flexible</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
      </div>
      <button className="btn-primary w-full" type="submit">
        Send home-visit enquiry on WhatsApp <ArrowUpRight size={18} />
      </button>
      <p className="text-xs leading-5 text-muted">Please do not include sensitive medical records in this form. MotionWell offers home visits only, not clinic appointments. Sending an enquiry does not confirm an appointment or create a clinician-patient relationship.</p>
    </form>
  );
}