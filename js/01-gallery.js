import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEL = document.querySelector('.gallery');

const imgListTemplate = ({preview, original, description}) => {
    return `  <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
            </a>`;
};

const addImg = galleryItems.map(imgListTemplate).join('');
galleryEL.insertAdjacentHTML("afterbegin", addImg);



galleryEL.addEventListener('click', oneGalleryImgClick );

function oneGalleryImgClick (evt){
    const imageSelected = evt.target.getAttribute("data-source");


    evt.preventDefault();

    if (!imageSelected){return;}


    const openModulWindow = basicLightbox.create(
        `<img src="${imageSelected}" width="800" height="600">`,
    {
        
        onShow: () => {document.addEventListener("keydown", closeModal);},
        
        onClose: () => {document.removeEventListener("keydown", closeModal);},
    }
    );

    openModulWindow.show();

function closeModal(evt) {
    if (evt.key === "Escape") {
        openModulWindow.close();
    }
}
};
