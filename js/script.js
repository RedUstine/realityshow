// SLIDE OR CAROUSEL CODE
let slideWrap = document.querySelector(".slide-wrap");
let slideCards = document.querySelectorAll(".slide-card");
let totalSlides = slideCards.length; //concatenation
slideWrap.style.width = totalSlides + "00vw";
let slideIndex = 0;
// camelCase - everyNewWordBeginsWithItsFirstLetterInUpperCase
// add: +, subtract: -, divide: /, mutiply: *, modulus (remainder): %
window.setInterval(function () {
  slideIndex = slideIndex % totalSlides;
  // slideWrap.style.transform = "translateX(-" + slideIndex + "00vw)";
  slideWrap.style.transform = `translateX(-${slideIndex}00vw)`;
  slideIndex = slideIndex + 1;
}, 2000);


// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}