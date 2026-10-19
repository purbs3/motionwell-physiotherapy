export const site = {
  name: "MotionWell Physiotherapy",
  shortName: "MotionWell",
  tagline: "Physiotherapy, brought to your home.",
  description:
    "Physiotherapy home-visit enquiries across selected Delhi NCR locations. Share your goals and locality to discuss clinical suitability, clinician availability and a visit at your home.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.your-domain.example").replace(/\/$/, ""),
  // Primary contact is also the default WhatsApp recipient. Override it in .env.local if needed.
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917644865116",
  phoneDisplay: "+91 76448 65116",
  phoneHref: "tel:+917644865116",
  contactNumbers: [
    { label: "Main contact", display: "+91 76448 65116", href: "tel:+917644865116" },
    { label: "Alternate contact", display: "+91 77070 26215", href: "tel:+917707026215" }
  ],
  email: "hello@your-domain.example",
  // Starter coverage zones only. Replace with the real areas served before launch.
  serviceAreas: ["South Delhi", "Gurugram", "Noida", "Ghaziabad"],
  services: [
    {
      slug: "back-neck-pain",
      title: "Back & neck pain at home",
      short: "Movement-focused physiotherapy visits for back or neck discomfort and everyday mobility goals.",
      detail: "A physiotherapist visits your home to discuss your symptoms, daily activities and movement goals. Following an individual assessment, support may include education, mobility work and a suitable exercise plan. The right approach depends on the assessment and your wider medical needs.",
      icon: "spine"
    },
    {
      slug: "sports-injury",
      title: "Sports injury rehabilitation at home",
      short: "Home-based rehabilitation planning around your activity goals and recovery stage.",
      detail: "Home visits can be used to assess relevant movement goals and build an appropriate progression plan where clinically suitable. Rehabilitation may include strength, balance, mobility and activity-specific exercises. Return-to-sport decisions should be individual and may require coordination with your treating team.",
      icon: "activity"
    },
    {
      slug: "post-surgery-rehab",
      title: "Post-surgery rehabilitation at home",
      short: "Movement support at home, aligned with instructions from your surgeon or treating team.",
      detail: "A home physiotherapy visit can help review mobility goals and work within restrictions set by your surgeon or treating team. Recovery plans differ by procedure and person; relevant medical instructions must be followed, and a home visit may not be suitable for every stage of recovery.",
      icon: "heart"
    },
    {
      slug: "senior-mobility",
      title: "Senior mobility & balance at home",
      short: "Practical support at home for everyday movement, safe transfers and balance goals.",
      detail: "A home visit allows the clinician to consider the spaces and tasks that matter in everyday life. Depending on an individual assessment, sessions may focus on balance, strength, transfers and activity confidence. Home setup, supervision and safety needs should be discussed before starting.",
      icon: "users"
    },
    {
      slug: "neurological-rehab",
      title: "Neurological rehabilitation at home",
      short: "Individual, goal-led movement practice in the home environment when appropriate.",
      detail: "Neurological rehabilitation needs careful individual assessment and may need input from a multidisciplinary team. A home visit enquiry can discuss goals, home setup and caregiver support, then establish whether a home-based physiotherapy plan is appropriate and available.",
      icon: "brain"
    },
    {
      slug: "home-physiotherapy",
      title: "Physiotherapy home visits",
      short: "A physiotherapist comes to your home, with each visit planned around your needs and routine.",
      detail: "MotionWell is designed as a home-visit-only physiotherapy service: enquiries are for care delivered at the patient's home, not appointments at a MotionWell clinic. The clinician, timing and suitability of care must be confirmed before an appointment is accepted. Availability depends on your exact location and the team's coverage.",
      icon: "house"
    }
  ]
};

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function whatsappLink(message: string) {
  const raw = site.whatsapp.trim();
  const digits = raw.replace(/\D/g, "");
  // Avoid malformed wa.me URLs when an old .env.local still contains the example Xs.
  const validNumber = !/[xX]/.test(raw) && digits.length >= 10;
  const recipient = validNumber ? digits : "917644865116";
  return `https://wa.me/${recipient}?text=${encodeURIComponent(message)}`;
}
