// image carousel
var carousel = document.querySelector('.carousel-background');
var slides = carousel.querySelectorAll('.slide');
var radioButtons = document.querySelectorAll('.page-indicator');
var indexNow = 0;
const slideInterval = 3000;

function displaySlide(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active-slide');
  }
  
  slides[index].classList.add('active-slide');
}

function changeSlide() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      indexNow = i;
      displaySlide(indexNow);
      break;
    }
  }
}

function nextSlide(){ 
  radioButtons[indexNow].checked = false;
  indexNow++;
  if (indexNow >= slides.length) {
    indexNow = 0; 
  }
  radioButtons[indexNow].checked = true;
  changeSlide(indexNow);
}


function startCarousel() {
  setInterval(nextSlide, slideInterval);
}


displaySlide(indexNow);

startCarousel();
