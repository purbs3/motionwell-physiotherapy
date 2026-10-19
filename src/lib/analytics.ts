export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {}
) {
  if (typeof window === "undefined") return;
  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };
  if (typeof w.gtag === "function") {
    w.gtag("event", eventName, params);
  }
}

/**
 * Optional Google Ads micro-conversion for a WhatsApp enquiry handoff.
 * This measures a click/handoff, NOT a confirmed lead, appointment or sale.
 * For stronger measurement, import qualified leads/bookings from a CRM.
 */
export function trackAdsEnquiryHandoff() {
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (!adsId || !conversionLabel || typeof window === "undefined") return;

  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") {
    w.gtag("event", "conversion", {
      send_to: `${adsId}/${conversionLabel}`
    });
  }
}