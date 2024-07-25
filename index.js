"use strict";

const slides = document.querySelectorAll(".slide");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const cardSection = document.querySelector(".card-section");

const sliderCntrl = function () {
  let currentSlide = 0;

  const updateSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const goNext = function () {
    if (currentSlide === slides.length - 1) {
      currentSlide = 0;
      updateSlide(currentSlide);
    } else {
      currentSlide++;
      updateSlide(currentSlide);
    }
  };

  const goPrev = function () {
    if (currentSlide === 0) {
      currentSlide = slides.length - 1;
      updateSlide(currentSlide);
    } else {
      currentSlide--;
      updateSlide(currentSlide);
    }
  };

  const init = function () {
    updateSlide(currentSlide);
  };

  init();

  //event hnadlers
  btnNext.addEventListener("click", goNext);
  btnPrev.addEventListener("click", goPrev);
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") goPrev();
    e.key === "ArrowRight" && goNext();
  });
};

const activeCntrl = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  sliderCntrl();
};

const options = {
  root: null,
  threshold: 0,
};
const slideObserver = new IntersectionObserver(activeCntrl, options);
slideObserver.observe(document.querySelector(".slider"));

// main section

const place = [
  "Delhi",
  "Mumbai",
  "Kolkota",
  "Kerla",
  "Sikkim",
  "Puri",
  "Kashmir",
  "Ladakh",
  "Amritsar",
];

place.forEach((place) => {
  const html = `<div class="card">
            <img src="./images/${place}.jpg" alt="Product 1">
            <div class="card-content">
                <h3>${place}</h3>
                <p>$100</p>
            </div>`;
  cardSection.insertAdjacentHTML("beforeend", html);
});
