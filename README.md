# WA WorkFit Medical website

Public website for WA WorkFit Medical, a pharmacist-led, doctor-supervised workplace and pre-employment medicals provider in Perth, WA.

- **Stack:** React 19 + Vite, React Router. No backend. The Book or enquire form posts JSON to an n8n webhook (`VITE_ENQUIRY_ENDPOINT` in `.env.production`).
- **Hosting:** DigitalOcean App Platform static site (region `syd`). Build command `npm run build`, output `dist`, catch-all document `index.html`.
- **Automations:** n8n Cloud.
  - *WAWFM – Website enquiries to HubSpot*: stores each enquiry in the `wawfm_website_enquiries` data table, upserts a HubSpot contact and creates a follow-up task (1 hour for employers and candidates, 48 hours for partner pharmacy EOIs).
  - *WAWFM – Publish website (GitHub + DigitalOcean)*: commits files to this repo and triggers App Platform deployments.
- **Brand:** blue #0575BC, lime #AACB18, mist #EDEDED, graphite #434343, navy #12203A. Montserrat (headings, logo) and Nunito (body).

## Pages

`/` home · `/services` · `/industries` · `/how-it-works` · `/employers` (incl. account terms) · `/candidates` · `/quote` (estimator; sends the estimate to `/book` pre-filled) · `/partners` (partner pharmacy pilot, EOI form posts `kind: "partner"`) · `/book` · `/privacy`.

SEO: per-page titles, descriptions and canonical URLs are set in `src/App.jsx`; `public/sitemap.xml`, `public/robots.txt` and MedicalBusiness JSON-LD in `index.html` assume the final domain https://wawfm.com.au.

## Editing content

Prices, services and service levels are defined once in `src/data.js`. Keep them in step with the Operations Manual (F04) and the financial model.

All copy must comply with Ahpra/Pharmacy Board advertising rules (no testimonials; never describe pharmacist-signed reports as medical certificates). See Policy P14.

## Local development

```bash
npm install
npm run dev
npm run build
```
