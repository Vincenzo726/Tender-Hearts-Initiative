// Add owned or approved local photographs to this list to update the gallery.
const galleryItems = [
  {
    src: "assets/images/gallery/orphanage-visit-01.jpg",
    alt: "A Tender Hearts Initiative team member at an orphanage",
    title: "An orphanage visit",
    category: "orphanage",
    caption: "A visit rooted in care and connection"
  },
  {
    src: "assets/images/gallery/orphanage-centre-01.jpg",
    alt: "Sign outside an orphanage centre",
    title: "A community centre",
    category: "orphanage",
    caption: "A place visited during outreach"
  },
  {
    src: "assets/images/gallery/outreach-team-01.jpg",
    alt: "Two members of the outreach team together",
    title: "Together in the work",
    category: "community",
    caption: "Team members during an outreach visit"
  },
  {
    src: "assets/images/gallery/children-visit-01.jpg",
    alt: "Visitors spending time with children indoors",
    title: "Time together",
    category: "orphanage",
    caption: "A moment during a visit"
  },
  {
    src: "assets/images/gallery/outreach-team-02.jpg",
    alt: "Two outreach team members standing together",
    title: "A shared moment",
    category: "community",
    caption: "Team members during community work"
  },
  {
    src: "assets/images/gallery/community-visit-01.jpg",
    alt: "A group of visitors gathered outside a community building",
    title: "Community visit",
    category: "community",
    caption: "A group together during a visit"
  }
];

const galleryGrid = document.querySelector("#gallery-grid");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
let previouslyFocusedElement = null;

function renderGallery(filter = "all") {
  if (!galleryGrid) return;
  const visibleItems = galleryItems.filter((item) => filter === "all" || item.category === filter);
  galleryGrid.replaceChildren();

  if (visibleItems.length === 0) {
    const empty = document.createElement("div");
    empty.className = "gallery-empty";
    empty.innerHTML = "<h2>No photos in this collection yet</h2><p>Choose another category or add approved photos to the gallery manifest.</p>";
    galleryGrid.append(empty);
    return;
  }

  visibleItems.forEach((item) => {
    const button = document.createElement("button");
    button.className = "gallery-item";
    button.type = "button";
    button.setAttribute("aria-label", `View ${item.title}`);
    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt;
    image.loading = "lazy";
    image.decoding = "async";
    const caption = document.createElement("span");
    caption.className = "gallery-caption";
    const title = document.createElement("strong");
    title.textContent = item.title;
    const text = document.createElement("span");
    text.textContent = item.caption;
    caption.append(title, text);
    button.append(image, caption);
    button.addEventListener("click", () => openLightbox(item, button));
    galleryGrid.append(button);
  });
}

function openLightbox(item, trigger) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  previouslyFocusedElement = trigger;
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxCaption.textContent = `${item.title} — ${item.caption}`;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lightbox.querySelector(".lightbox-close")?.focus();
}

function closeLightbox() {
  if (!lightbox || lightbox.hidden) return;
  lightbox.hidden = true;
  document.body.style.overflow = "";
  lightboxImage?.removeAttribute("src");
  previouslyFocusedElement?.focus();
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((filter) => filter.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    renderGallery(button.dataset.filter);
  });
});

lightbox?.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (lightbox && !lightbox.hidden && event.key === "Escape") closeLightbox();
});

renderGallery();
