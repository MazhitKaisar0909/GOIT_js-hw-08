
import { galleryItems } from './gallery-items';

import "simplelightbox/dist/simple-lightbox.min.css";
import simpleLightbox from 'simplelightbox';
// import * as basicLightbox from 'basiclightbox';


console.log(galleryItems);
console.log(simpleLightbox);


const galleryContainer = document.querySelector('div.gallery');
galleryContainer.insertAdjacentHTML(
    'beforeend',
    createGalleryCard(galleryItems),
);

function createGalleryCard(obj = {}) {
    let galleryCards = '';
    obj.forEach(({ preview, original, description }) => {
        const galleryCard = `
            <a class="gallery__item" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                data-source="${original}"
              />
            </a>`;
        galleryCards += galleryCard;
    });
    return galleryCards;
}

let gallery = new simpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom', captionDelay: 250
});