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

## Add gallery images

Photo updates are managed from this README and the gallery manifest; the website does not display photo-editing instructions.

1. Add an approved image to `assets/images/gallery`.
2. Add its `src`, `alt`, `title`, `category`, and `caption` to the `galleryItems` list in `js/gallery.js`.
3. Preview `gallery.html` and check the category filter and image description.

The gallery uses consistent image crops so photos of different original dimensions display at equal card sizes. See [`assets/images/gallery/README.md`](assets/images/gallery/README.md) for a complete example. Six supplied outreach photographs are included. Confirm consent and protect the privacy of children and vulnerable people before publishing.

## Before launch

- The supplied official logo is used in the header, footer, favicon, and social preview image.
- Confirm the donation account details remain current before publishing or accepting transfers.
- Register a domain before adding canonical URLs, absolute social preview image URLs, or a sitemap.
- No official email address or biographies were supplied, so these are intentionally omitted.
- The fonts load from Google Fonts when online and fall back to system fonts if unavailable.

## Accessibility and behavior

The mobile navigation, gallery filters/lightbox, phone and WhatsApp links, keyboard focus styling, reduced-motion behavior, and copyright year are implemented in plain JavaScript. Content remains visible if JavaScript is unavailable. The supplied images should only be published with appropriate consent.
