"use strict";

const cardSection = document.querySelector(".card-section");

const place = ["Delhi", "Mumbai", "Kolkota", "Kerla", "Sikkim"];

place.forEach((place) => {
  const html = `<div class="card">
            <img src="./images/${place}.jpg" alt="Image 1">
            <div class="card-content">
                <h3>${place}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>`;
  cardSection.insertAdjacentHTML("beforeend", html);
});
