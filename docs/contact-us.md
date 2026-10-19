# Contact Us — `/contact-us/`

Captured live from https://centricltd.co.ke/contact-us/ on 2026-10-16.

**Heading:** "Contact Us"

**Intro:** "Please contact us for detailed discussions, demo booking, and a free review of your business to establish the most suitable solutions for you."

## Contact details (corrected)
- Phone: `+2547 15 663 018` on live site → **corrected to `+254 715 663 018`**
- Emails: `sales@centricltd.co.ke`, `info@centricltd.co.ke` — live site's mailto links are broken relative paths; **new site uses real `mailto:` hrefs**.
- Office address: Westpark Towers, Mpesi Lane Off Parklands Road, Nairobi
- Mailing address: Centric Limited, P.O. BOX 53652-00200, Westpark Towers, Mpesi Lane Off Parklands Road, Nairobi
- Office hours: Monday to Friday, 9:00 am – 5:00 pm (EAT)

## Contact form (fields in order, all required)
1. Your Name
2. Your Email
3. How Can We help?
4. Message

Submit button text: "Send"

**Decision (per approved plan):** no backend/server — submitting builds a `mailto:` link client-side (see `src/lib/mailto.js`, built by the sibling component task) addressed to `sales@centricltd.co.ke`, with the form fields assembled into the subject/body. No map embed exists on the live page; none added.
