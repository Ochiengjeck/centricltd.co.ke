# About Us — `/about-us/`

Captured live from https://centricltd.co.ke/about-us/ on 2026-10-16.

## Great Companies Thrive on Efficiency
"It is our culture and way of life. Listening to client's needs and developing efficient solutions is our mark of excellence."

## An Empowered Pool of Fresh Talent
"Dedicated young and talented personnel. Our team is recruited on the basis of their ability, experience, training, intelligence, and character."

## Committed to ICT Leadership
"Becoming the best in East Africa. The importance we attach to information technology and the realization that efficient ICT solutions should benefit the society, has made it our commitment to become the Best ICT Company in East Africa."

## Our Success Transformation Story
"Everyone defines success differently – as much as there are people, there are different opinions. Number one in our priority list is to make a better tomorrow by making every task simple. We know time is valuable thus, our aim is to reduce the time a customer spends performing a certain task. Imagine if your customers were not just numbers on a spreadsheet but real people who you engage with on an ongoing basis, collecting feedback that grows more meaningful over time. Real people, higher response rates, actionable insight — our software gives you the context you need to improve the entire customer lifecycle."

## Testimonial ("What do our clients say about us?")
> "Centric assists customers to find the subject and medium that best fits unique identity and then works with their teams to produce high quality systems, consistently reviewing systems and processes making sure it meets their objectives in this dynamic technological era."
— **Tourism Fund**

## Clients & Leadership Team & Testimonials anchors
Live page has `#clients`, `#LeadershipTeam`, `#Testimonials` anchors referenced by the footer, but **no actual section content exists at any of them** — confirmed empty.

**Decisions for the new site (per approved plan):**
- `#testimonials` → becomes a real section on the new `AboutPage`, using the one Tourism Fund quote above (`src/data/testimonials.js`, extensible for more later).
- `#clients` → becomes a real section on the new `AboutPage`, using the 10 client logos already captured from the home page (`src/data/clients.js`).
- Leadership Team → **dropped entirely.** No names, titles, bios, or photos exist anywhere on the live site (confirmed by also checking `/leadership-team/` directly — empty). There's nothing to port, unlike Clients/Testimonials. No page, no nav/footer link. A commented placeholder is left in `src/data/nav.js` for when real bios exist.
