# WA WorkFit Medical website

Public website for WA WorkFit Medical, a pharmacist-led, doctor-supervised workplace and pre-employment medicals provider in Perth, WA.

- **Stack:** React 19 + Vite, React Router. No backend. The Book or enquire form posts JSON to an n8n webhook (`VITE_ENQUIRY_ENDPOINT` in `.env.production`).
- **Hosting:** DigitalOcean App Platform static site (region `syd`). Build command `npm run build`, output `dist`, catch-all document `index.html`.
- **Automations:** n8n Cloud.
  - *WAWFM – Website enquiries to HubSpot*: stores each enquiry in the `wawfm_website_enquiries` data table, upserts a HubSpot contact and creates a 1-hour follow-up task.
  - *WAWFM – Publish website (GitHub + DigitalOcean)*: commits files to this repo and triggers App Platform deployments.
- **Brand:** blue #0575BC, lime #AACB18, mist #EDEDED, graphite #434343, navy #12203A. Montserrat (headings, logo) and Nunito (body).

## Editing content

Prices, services and service levels are defined once in `src/data.js`. Keep them in step with the Operations Manual (F04) and the financial model.

All copy must comply with Ahpra/Pharmacy Board advertising rules (no testimonials; never describe pharmacist-signed reports as medical certificates). See Policy P14.

## Local development

```bash
npm install
npm run dev
npm run build
```
