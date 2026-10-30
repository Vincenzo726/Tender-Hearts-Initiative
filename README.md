# Tender Hearts Initiative

A static, seven-page foundation website built with HTML, CSS, and vanilla JavaScript. It has no build step, backend, payment processing, or form submission. Open `index.html` locally or deploy the project directory to a static host.

## Pages

- `index.html` — home
- `about.html` — story, mission, vision, and values
- `leadership.html` — leadership profiles
- `programs.html` — programs and outreach
- `gallery.html` — local photo gallery, filters, and accessible lightbox
- `get-involved.html` — WhatsApp, telephone, donation, and partnership enquiries
- `contact.html` — contact details, WhatsApp, and telephone links

## Branding

The website uses a temporary text-based wordmark instead of a non-official logo. When the foundation supplies an official logo, replace the wordmark in the shared header/footer and update the social metadata by editing the relevant `meta property="og:image"` and `link rel="icon"` values in each HTML file.

Default path for the official image:

- `assets/images/brand/tender-hearts-logo.jpg`

If the design is later supplied, place it in `assets/images/brand/` with the exact filename above and update the relevant HTML references.

## Leadership and team updates

Use the following confirmed team data when replacing profiles:

- `Taiwo-Amusan Boluwajoko` — Founder / President
- `Adelowo Oluwatunmise` — Vice President
- `Fagbiye Oluwagbotemi` — Media Personnel
- `Akinade Victoria` — Social Media Manager
- `Mrs Clement Mary` — Additional team member; matron

Portrait placeholders should live in `assets/images/leadership/` and can be updated by replacing the file names referenced in the profile cards. Do not display unfinished placeholders publicly when a confirmed portrait is unavailable; use a neutral local placeholder instead.

## Gallery updates

Photo updates are managed from this README and the gallery manifest; the website does not display photo-editing instructions.

1. Add an approved image to `assets/images/gallery`.
2. Add its `src`, `alt`, `title`, `category`, and `caption` to the `galleryItems` list in `js/gallery.js`.
3. Preview `gallery.html` and check the category filter and image description.

Approved categories currently displayed are:

- `orphanage`
- `foundation`

Do not publish community-outreach claims unless the foundation confirms the activity has actually happened. The website should remain factual and privacy-aware.

## Before launch

- Confirm the donation account details remain current before publishing or accepting transfers.
- Register a domain before adding canonical URLs, absolute social preview image URLs, or a sitemap.
- No official email address was supplied, so it remains intentionally omitted.
- The fonts load from Google Fonts when online and fall back to system fonts if unavailable.

## Accessibility and behavior

The mobile navigation, gallery filters/lightbox, phone and WhatsApp links, keyboard focus styling, reduced-motion behavior, and copyright year are implemented in plain JavaScript. Content remains visible if JavaScript is unavailable. The supplied images should only be published with appropriate consent.
