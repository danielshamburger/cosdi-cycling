# cosdiracing.com — COSDI / GAOC Cycling

Website for the COSDI / Greenland Advanced Oral Care cycling team — Grand Rapids, MI.
Single-page static site (HTML/CSS/JS), hosted on **GitHub Pages** at **cosdiracing.com**.

## Structure
- `index.html`, `main.css`, `main.js` — the site
- `images/` — photos, logos, hero (`hero-grs.jpg` desktop / `hero-grs-mobile.jpg` mobile), `og-image.jpg` (social share)
- `CNAME` — custom domain (do **not** delete; it binds cosdiracing.com)
- `robots.txt`, `sitemap.xml`, `404.html`, `site.webmanifest`, favicons/app-icons
- `_handoff/` — internal notes (not part of the published site): **`GO-LIVE-CHECKLIST.md`** has the deploy manifest, launch gates, and step-by-step go-live sequence; `HANDOFF.md` is the full changelog

## Deploy (GitHub Pages)
Push to the default branch. In **Settings → Pages**, set the source to that branch (root) and the
custom domain to `cosdiracing.com` with **Enforce HTTPS** checked. The `CNAME` file must always ship.

## Before going live (see `_handoff/GO-LIVE-CHECKLIST.md`)
- **Hero photo permission** from PKA Photo (credited on the page; secure written OK for web use).
- Keep `CNAME` + the favicons/manifest/icons in every deploy.
- Open items: Cervélo logo, real photos + Strava for Jesse Kooistra & Michael Otenbaker,
  confirm the Bryce memorial with family, Debaets-Devos 2026 date.
