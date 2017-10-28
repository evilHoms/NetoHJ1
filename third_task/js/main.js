'use strict';

const slider = document.getElementById('currentPhoto');
const btnPrev = document.getElementById(`prevPhoto`);
const btnNext = document.getElementById(`nextPhoto`);
const images = [
  'i/breuer-building.jpg',
  'i/guggenheim-museum.jpg',
  'i/headquarters.jpg',
  'i/IAC.jpg',
  'i/new-museum.jpg'
];
const numberOfImages = images.length;
slider.src = images[0];
let currentImage = 1;

btnNext.onclick = e => {
  if (++currentImage >= numberOfImages)
    currentImage = 0;
  
  slider.src = images[currentImage];
};

btnPrev.onclick = e => {
  if (--currentImage < 0)
    currentImage = numberOfImages - 1;
  
  slider.src = images[currentImage];
};