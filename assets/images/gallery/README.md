# Gallery photographs

The gallery currently includes six photographs supplied for Tender Hearts Initiative. To add more:

1. Copy a photograph you own or have permission to publish into this folder.
2. Open `js/gallery.js` and add one object to the `galleryItems` array.
3. Set `src` to a path relative to the website root, plus the photo's `alt`, `title`, `category`, and `caption`.
4. Save and reload `gallery.html`. The filters and lightbox use the manifest automatically.

Example entry:

```js
{
  src: "assets/images/gallery/orphanage-outreach-2026-01.jpg",
  alt: "Volunteers sharing a moment during an orphanage visit",
  title: "A moment of care",
  category: "orphanage",
  caption: "A moment of connection and care"
}
```

Allowed categories are `school`, `orphanage`, and `community`. Use accurate descriptions and confirm informed consent and privacy protections—especially before publishing identifiable images of children or other vulnerable people. The gallery does not automatically scan this folder.
