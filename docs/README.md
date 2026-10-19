# Centric Ltd website content (from centricltd.co.ke)

Content captured from https://centricltd.co.ke/ and used to build the new site in `../centricltd.co.ke/` (React + Vite + Tailwind CSS). All files below now exist and hold the real, exact copy fetched live from each page — the content has since been transcribed into `src/data/*.js` for the React app, with the defects listed below fixed along the way (not carried into the new site). Every image referenced in [assets.md](assets.md) has been downloaded into `../centricltd.co.ke/src/assets/`.

## Files

| File | Source page | What's in it |
|---|---|---|
| [site-wide.md](site-wide.md) | all pages | Navigation, footer, contact details, social links, newsletter block, company tagline |
| [home.md](home.md) | `/` | Hero, SAP product cards, Innovative Solutions cards, culture block, client logos |
| [sap.md](sap.md) | `/sap/` | SAP overview: S/4HANA, Business One, Analytics, Ariba, SAP Services |
| [sap-s4hana.md](sap-s4hana.md) | `/sap-s4hana/` | Intelligent ERP modules: sales, logistics, production, finance, HR, deployment |
| [sap-business-one.md](sap-business-one.md) | `/sap-business-one/` | Small-business ERP: finance, sales, purchasing & inventory features |
| [sap-analytics.md](sap-analytics.md) | `/sap-analytics/` | SAP Analytics Cloud: BI, planning, augmented analytics |
| [sap-ariba.md](sap-ariba.md) | `/sap-ariba/` | Procurement: direct spend, guided buying, spend analysis |
| [innovative-solutions.md](innovative-solutions.md) | `/more-solutions/` | Overview of Cloud, Queue, SMS, Banking, Revenue Management |
| [aws-cloud-services.md](aws-cloud-services.md) | `/aws-cloud-services/` | AWS managed services, backup & storage, QuickSight BI, WorkSpaces |
| [queue-management.md](queue-management.md) | `/queue-management/` | Queue management system (live page copy is very thin) |
| [sms-services.md](sms-services.md) | `/sms-services/` | Bulk SMS, short codes, USSD |
| [banking-systems.md](banking-systems.md) | `/banking-systems/` | Fern Software partnership: Abacus, Faasbank, Baytree, mobile apps |
| [about-us.md](about-us.md) | `/about-us/` | Culture, talent, ICT leadership, success story, testimonial |
| [contact-us.md](contact-us.md) | `/contact-us/` | Contact details, map location, form fields |
| [insights.md](insights.md) | `/insights/` + 2 posts | News and stories: AWS partnership, SAP Fiori UX |
| [privacy-policy.md](privacy-policy.md) | `/privacy-policy/` | Section outline of the privacy policy |
| [assets.md](assets.md) | all pages | Logo and every image URL, grouped by page |

## Defects on the live site — fixed in the new site, not carried over

- **Leadership Team / Clients / Testimonials were dead anchors on the live site**, not just empty pages (`/#sap-support`, `/about-us/#clients`, `/about-us/#LeadershipTeam`, `/about-us/#Testimonials` all matched no element). New site: Leadership Team dropped entirely (no content ever existed to port); Clients and Testimonials are now real, working `#clients`/`#testimonials` sections on `AboutPage`.
- **Phone number** was shown as `+2547 15 663 018`; now `+254 715 663 018` everywhere (`src/data/siteMeta.js`).
- **Email links were broken** relative paths; the new contact form builds real `mailto:` links client-side.
- **Copy errors fixed in `src/data/sapProducts.js` / `solutions.js`:** S/4HANA's "Bulgarian legislation" line dropped and its empty "four phases" list filled with the real SAP Activate phases; the Baytree section on Banking Systems retitled (was mislabeled "Basic processes in SAP S/4 HANA"); Business One's "Sales and opportunity management" no longer repeats the Accounting copy; AWS's "99% durability" corrected to the real 99.999999999% figure and "QuickSight" spelling fixed.
- **Privacy policy rewritten** (`src/data/privacyPolicy.js`) — no more wrong-domain reference or WordPress boilerplate; it now accurately describes the mailto-only contact form and the chat widget's real third-party processors (Pusher, Cloudflare Turnstile).
- **SAP Services** and **Revenue Management** now have real pages (`/sap-services/`, `/revenue-management/`) instead of a dead anchor / anchor-only section.
- Footer copyright is now dynamic (`{new Date().getFullYear()}`), not hardcoded.
- Unused WordPress pages (`/sample-page/`, `/blog/`, `/news/`, `/case-studies/`, `/healthy-company-profile/`, `/maintenance/`, `/sap-products/`, `/contact-us-2/`, `/not-found/`, `/industry-insights/`) were never recreated in the new site's router or `public/sitemap.xml`.
