# Site-wide facts (final, corrected) — synthesis, not a live fetch

Used by `src/data/siteMeta.js` and `src/data/nav.js`.

## Navigation
Home · SAP Products & Services (dropdown: SAP S/4HANA, SAP Business One, SAP Analytics, SAP Ariba, **SAP Services** [new real page]) · Innovative Solutions (dropdown: Cloud Services, Queue Management, SMS Services, Banking Systems, **Revenue Management** [new real page, route `/revenue-management/` — NOT `/revenue-management-systems/`, which 301s to an image on the live site]) · Insights · About Us · Contact Us.

## Footer
Same 3 columns as live (SAP Products & Services / Innovative Solutions / Company), **except**:
- Company column: About Us, Our Clients (→ `/about-us/#clients`), Testimonials (→ `/about-us/#testimonials`), Contact Us. **Leadership Team removed** — no content exists anywhere on the live site (checked `/leadership-team/` directly: empty). Nothing to port; add back once real bios exist.
- Newsletter "Stay Up-to-date" block: **dropped** — no ESP/backend wired up; a non-functional-looking signup box is worse than omitting it. Revisit if/when an email service provider is chosen.
- Copyright: dynamic current year (`{new Date().getFullYear()}`), not hardcoded "©2021".

## Corrected contact details
- Phone: `+254 715 663 018` (live site shows the wrong format `+2547 15 663 018`)
- Emails: `sales@centricltd.co.ke`, `info@centricltd.co.ke` — real `mailto:` links (live site's are broken relative paths)
- Address: Westpark Towers, Mpesi Lane Off Parklands Road, Nairobi
- Mailing: Centric Limited, P.O. BOX 53652-00200, Westpark Towers, Mpesi Lane Off Parklands Road, Nairobi
- Hours: Monday to Friday, 9:00 am – 5:00 pm (EAT)

## Social links
LinkedIn, Twitter, Facebook icons exist in the live header/footer, but their actual target URLs are not exposed anywhere in the page markup (no confirmable handle/URL found). `src/data/siteMeta.js` ships these as `"#"` placeholders rather than inventing URLs — swap in the real profile links when available.

## Orphan WordPress routes — confirmed to exist on the live site but linked from no navigation; never recreate on the new site
`/sample-page/`, `/blog/`, `/news/`, `/case-studies/`, `/healthy-company-profile/`, `/maintenance/`, `/sap-products/` (duplicate of `/sap/`), `/contact-us-2/`, `/not-found/`, `/industry-insights/`, `/leadership-team/`, `/clients/`, `/testimonials/`.
