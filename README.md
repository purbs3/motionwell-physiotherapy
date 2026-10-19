# MotionWell Physiotherapy — Home Visits Only (Delhi NCR)

An original Next.js App Router website for a physiotherapy service that provides **home visits only**. Do not present the business as a clinic or centre. A website enquiry is not a confirmed appointment; actual coverage, clinician availability, clinical suitability and time must be confirmed.

MotionWell is a working brand name. Check domain, business-name and trademark availability before launch.

## Included
- Next.js App Router, TypeScript, Tailwind CSS and Framer Motion
- Responsive navigation menu and footer
- Home-visit-only homepage and individual service pages
- Interactive service-area network schematic (not a geographic map, not to scale, not live availability)
- Dedicated `/areas`, `/pricing`, `/faqs`, `/services`, `/about`, `/contact`, `/blog` and `/privacy` pages
- Blog index and individual SEO articles
- Page-specific title/description, canonical URLs and Open Graph metadata
- MedicalBusiness, Service, Article and FAQPage JSON-LD where appropriate
- Generated `robots.txt` and XML sitemap including service pages and blog articles
- WhatsApp enquiry form, loading screen, pointer cursor and analytics hooks

## Run locally
Requirements: Node.js 20.9+ and npm.

1. Extract the ZIP.
2. Open the `motionwell-delhi-physio` project folder in VS Code.
3. Copy `.env.example` to `.env.local` and replace the placeholders.
4. Run `npm install`, then `npm run dev`.
5. Open http://localhost:3000

## Configure before launch
- `NEXT_PUBLIC_SITE_URL`: the real canonical HTTPS domain.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: main WhatsApp number in international digits-only format. Default is `917644865116` (+91 76448 65116); set it to that number in your `.env.local` too if a previous placeholder exists. The alternate phone +91 77070 26215 is listed as a tap-to-call number in Contact and Footer.
- `NEXT_PUBLIC_GA_ID`: GA4 Measurement ID, if configured.
- `NEXT_PUBLIC_GOOGLE_ADS_ID` and `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`: only after a Google Ads conversion action exists and has been tested.
- Primary and alternate phone contacts are prefilled as +91 76448 65116 and +91 77070 26215. Confirm both numbers are correct and reachable before publishing. Replace placeholder email/service areas and other business details with verified information.
- **Update the logo:** replace `public/logo.svg` with your dark-text logo SVG, and `public/logo-light.svg` with a white/light-text version for the dark footer. Keep those filenames unchanged and retain SVG `width`/`height` or `viewBox`. If you only have a PNG, convert/export it as a transparent PNG and change `src/components/Header.tsx` and `src/components/Footer.tsx` image paths accordingly (and their width/height as needed).
- Confirm real fees, session duration, cancellation terms and payment methods. Pricing page intentionally avoids inventing prices.
- Add genuine clinician names, qualifications and reviewer details only after verification.
- Review the privacy notice and consent/analytics requirements for your use case.

## Update the logo
- Header logo: `public/logo.svg`
- Footer logo for the dark background: `public/logo-light.svg`
- To use your own logo, replace these files while keeping the exact filenames. Keep the background transparent and ensure the logo has readable contrast on the header/footer backgrounds.
- If you have PNG files instead, save a transparent dark-text version and a white/light-text version in `public/`, then update the corresponding `src` in `src/components/Header.tsx` and `src/components/Footer.tsx`.

## SEO checklist
1. Deploy to a public HTTPS domain and set `NEXT_PUBLIC_SITE_URL` to that exact domain.
2. Verify the domain in Google Search Console and submit `/sitemap.xml`.
3. Ensure every listed area is genuinely served. Create unique local landing pages only for real service coverage; avoid doorway pages and copied city pages.
4. Have a qualified physiotherapist review medical content. Use a real author/reviewer and review date only when verified.
5. Add original images with descriptive alt text and compress them for performance.
6. Test Core Web Vitals, mobile usability, indexability, canonical URLs, structured data and broken links before launch.
7. Configure GA4 and test enquiry events. A WhatsApp handoff is not a confirmed lead or sale; import qualified leads/bookings from a CRM for stronger ad optimisation.

## Production test
Run `npm run build`, then `npm run start`.

The form opens WhatsApp with a prefilled message; it does not store enquiries in a database or confirm bookings automatically. The current service-area network is a schematic selector only, not a live geographic map or guaranteed availability system.

## Responsive navigation update
- Added an explicit **Home** link to desktop and mobile navigation.
- Desktop navigation scales down to a mobile menu at smaller widths.
- Mobile navigation uses a smooth animated slide-in panel, staggered links, active-page styling, a backdrop blur, an enquiry CTA and both call numbers.
- Supports Escape-to-close, backdrop click-to-close, body-scroll lock and reduced-motion preferences.
- The menu is touch-friendly and includes accessible labels/expanded state.
