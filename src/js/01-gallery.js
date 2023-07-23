// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from 'simplelightbox'
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryListEl = document.querySelector(".gallery");

gallerySetToHtml(createGalleryMarkup2(galleryItems));

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

function createGalleryMarkup2(galleryItems) {
  return galleryItems
    .map(
      ({ description, preview, original }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
       </li>`
    )
    .join("");
}

function gallerySetToHtml(gallery) {
  galleryListEl.innerHTML = gallery;
}
