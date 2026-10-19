# Home — `/`

Captured live from https://centricltd.co.ke/ on 2026-10-16 (network confirmed reachable this session).

## Header & nav
Phone shown as "+2547 15 663 018" — **wrong format, corrected site-wide to `+254 715 663 018`** (see `docs/site-wide.md`).

Main nav: Home · SAP Products & Services (SAP S/4 HANA, SAP Business One, SAP Analytics, SAP Ariba, SAP Services) · Innovative Solutions (Cloud Services, Queue Management, SMS Services, Banking Systems, Revenue Management System) · Insights · About Us · Contact Us.

## Hero
**Heading:** "Experience Simple & Innovative Technology"

**Subheading:** "Centric Limited is a leading Software and Services Solutions provider in East Africa. We enable our customers to adapt and leverage technology to drive and scale their business."

## "Agile, Smart and Intelligent Technologies"
"We have partnered with SAP, the world's leading software provider to offer a complete portfolio of SAP solutions."

## SAP product cards
- **SAP S/4 HANA** — "Discover a truly modern intelligent ERP system with embedded AI and machine learning – available in a public or private cloud, or in a hybrid environment."
- **SAP Business One** — "Gain greater control over your business or subsidiary with SAP Business One. This small business management software connects and streamlines your processes — and grows with you."
- **SAP Analytics** — "Get all the cloud analytics features you need – business intelligence (BI), augmented analytics, predictive analytics, and enterprise planning – in a single solution."
- **SAP Ariba** — "SAP Ariba provides cloud-based solutions to make it easier for businesses to collaborate and compete. Installation requires no costly hardware or software, and no upgrades are expected on the user's behalf."

## Innovative Solutions cards
- **Cloud Services** — "Increase efficiency, security and speed in your day to day operations with centrics cloud services offering reduced costs, scaling and increased information systems responsiveness."
- **Queue Management** — "Make your customers happier with our smart queue management systems and user friendly apps for an innovative customer journey."
- **SMS Services** — "Build a wide mass presence by engaging with your target audience, partners, and more in a short time through our effective customizable SMS solutions."
- **Banking Systems** — "Embrace technology by going online, managing loan portfolios, client tracking, business transactions and more with our secure systems for financial institutions."
- **Revenue Management Systems** — "Our Revenue Management solution is composed of an electronic payment gateway for Revenue collection which is used for managing collections for Businesses"

## Culture block
**"Great Companies Thrive on Efficiency"** / "It is our culture and way of life." — "Listening to client's needs and developing efficient solutions is our mark of excellence." (live site has a typo "exellence" — corrected here)

## Client logos — "Who have we worked with?"
Acorn · Betika · EPRA · Kenya Power · KRA · NHIF · NTSA · TBC · TF (Tourism Fund) · Wärtsilä

## Newsletter block ("Stay Up-to-date")
"Gain Insights that keep modern organizations ahead of the competition with our reports, technology updates, and newsletters right in your email."
**Decision (per approved plan): dropped from the new site** — no ESP/backend exists to make this functional; shipping another non-working form box is worse than omitting it.

## Footer
3 columns — SAP Products & Services / Innovative Solutions / Company (About Us, Clients, Leadership Team, Testimonials, Contact Us).
**Decision (per approved plan):** Leadership Team dropped entirely (no content anywhere); Clients and Testimonials folded into About Us as real in-page sections (`#clients`, `#testimonials`) instead of the dead anchors the live footer currently points at (`/about-us/#clients`, `/about-us/#LeadershipTeam`, `/about-us/#Testimonials` — none of which exist on the live About page).

Contact block: Westpark Towers, Mpesi Lane Off Parklands Road, Nairobi · info@centricltd.co.ke · Office hours Monday–Friday 9:00am–5:00pm (EAT) · Mailing address: Centric Limited, P.O. BOX 53652-00200, Westpark Towers, Mpesi Lane Off Parklands Road, Nairobi.

Social: LinkedIn, Twitter, Facebook — **exact URLs not exposed in the page markup**, left as `"#"` placeholders in `src/data/siteMeta.js` until the real profile URLs are supplied.

Copyright: "©2021 Centric Limited. All rights reserved." — **corrected to a dynamically-computed current year** in the new `Footer` component (not hardcoded).

Footer also links to Privacy Policy.
