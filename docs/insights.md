# Insights — `/insights/` + 2 posts

Captured live from https://centricltd.co.ke/insights/ and the two linked articles on 2026-10-16.

## Index page
Heading: "Insights". Lists 2 posts (both dated May 31, 2021, author "Paulalisa"):
1. "Centric Partners With AWS To Expand Their Cloud Portfolio In Kenya" — `/centric-partners-with-aws-to-expand-their-cloud-portfolio-in-kenya/`
2. "SAP Fiori UX: A Much Timely Design Innovation" — `/sap-fiori-ux-a-much-timely-design-innovation/`

New site route: `/insights/<slug>` with slugs `aws-partnership` and `sap-fiori-ux` (see `src/data/insightsPosts.js`).

## Post 1 — AWS partnership (slug `aws-partnership`)
**Title:** "Centric Partners With AWS To Expand Their Cloud Portfolio In Kenya"
**Date:** 2021-05-31

Live body is thin — one short announcement rather than a full article:

> Centric now joins the AWS Partner Network to sell AWS cloud offerings to the Kenyan market.

> Centric has entered into a partnership agreement with Amazon Web Services, becoming a member of the global AWS Partner Network (APN). Through this collaboration, the company aims to develop market presence and distribute AWS cloud solutions specifically targeting Kenya's business sector.

The live post notes it was originally based on reporting from CIO (no further source URL was exposed in the page markup).

## Post 2 — SAP Fiori UX (slug `sap-fiori-ux`)
**Title:** "SAP Fiori UX: A Much Timely Design Innovation"
**Date:** 2021-05-31

Full body (verbatim, 4 subheadings: Increased Productivity / Adaptability across devices / Timely Notifications and Analytics / Increased User Satisfaction) — includes a quote from Thomas Reiss (VP, SAP User Experience Product Management) and a stat about SKF's S/4HANA + Fiori rollout (70% reduction in system-related work time, error rate down from 23% to 0% in month one). See `src/data/insightsPosts.js` for the structured version used by `InsightsPostPage`.
