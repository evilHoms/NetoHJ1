'use strict';
console.log(`Без носков мазольки будут :(`);
const slider = document.getElementById('slider');
const images = [
  'i/airmax.png',
  'i/airmax-jump.png',
  'i/airmax-on-foot.png',
  'i/airmax-playground.png',
  'i/airmax-top-view.png'
];
const numberOfImages = images.length;
slider.src = images[0];
let currentImage = 1;


setInterval(() => {
  slider.src = images[currentImage];
  
  if (++currentImage >= numberOfImages) 
    currentImage = 0;
}, 5000);