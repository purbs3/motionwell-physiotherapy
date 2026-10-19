import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import PageLoader from "@/components/PageLoader";
import { absoluteUrl, site } from "@/lib/site";
import "leaflet/dist/leaflet.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MotionWell | Physiotherapy Home Visits in Delhi NCR",
    template: "%s | MotionWell Physiotherapy"
  },
  description: site.description,
  applicationName: site.shortName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: absoluteUrl("/"),
    siteName: site.name,
    title: "MotionWell | Physiotherapy Home Visits",
    description: site.description
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "MotionWell | Physiotherapy Home Visits in Delhi NCR",
    description: site.description
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#174D43"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.name,
    url: site.url,
    description: site.description,
    areaServed: site.serviceAreas.map((name) => ({ "@type": "City", name })),
    medicalSpecialty: "Physiotherapy",
    slogan: "Physiotherapy home visits across selected Delhi NCR locations",
    availableChannel: { "@type": "ServiceChannel", serviceType: "Home visit", serviceUrl: absoluteUrl("/contact") },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "appointments",
      url: absoluteUrl("/contact")
    }
  };

  return (
    <html lang="en-IN">
      <body>
        <Analytics />
        <PageLoader />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}