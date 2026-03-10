lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileMenuBtn && mobileMenu) {
mobileMenuBtn.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});
}

mobileLinks.forEach(link => {
link.addEventListener('click', () => {
mobileMenu.classList.add('hidden');
});
});

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
if (window.scrollY > 10) {
header.classList.add('shadow-sm');
} else {
header.classList.remove('shadow-sm');
}
});


// LIGHTBOX

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

const nextBtn = document.getElementById('lightbox-next');
const prevBtn = document.getElementById('lightbox-prev');

const images = document.querySelectorAll('.lightbox-img');

let currentIndex = 0;
let gallery = [];


images.forEach((img, index) => {

img.addEventListener('click', () => {

const parentGallery = img.closest('.grid, .flex');

gallery = Array.from(parentGallery.querySelectorAll('.lightbox-img'));

currentIndex = gallery.indexOf(img);

showImage();

lightbox.classList.remove('hidden');
lightbox.classList.add('flex');

document.body.classList.add('overflow-hidden');

});

});


function showImage(){

lightboxImg.src = gallery[currentIndex].src;
lightboxImg.alt = gallery[currentIndex].alt;

}


function nextImage(){

currentIndex++;

if(currentIndex >= gallery.length){
currentIndex = 0;
}

showImage();

}


function prevImage(){

currentIndex--;

if(currentIndex < 0){
currentIndex = gallery.length - 1;
}

showImage();

}


// BUTTONS

if(nextBtn){
nextBtn.addEventListener('click', nextImage);
}

if(prevBtn){
prevBtn.addEventListener('click', prevImage);
}


// CLOSE

if (lightboxClose) {

lightboxClose.addEventListener('click', closeLightbox);

}

function closeLightbox(){

lightbox.classList.add('hidden');
lightbox.classList.remove('flex');
document.body.classList.remove('overflow-hidden');

}


// CLICK OUTSIDE

if (lightbox) {

lightbox.addEventListener('click', (e) => {

if (e.target === lightbox) {
closeLightbox();
}

});

}


// KEYBOARD CONTROL

document.addEventListener('keydown', (e) => {

if(lightbox.classList.contains('hidden')) return;

if(e.key === 'Escape'){
closeLightbox();
}

if(e.key === 'ArrowRight'){
nextImage();
}

if(e.key === 'ArrowLeft'){
prevImage();
}

});

});