"use strict";

// Correctly select the form element
const form = document.querySelector("form");
const continueBttn = document.querySelector(".continue");

const handleSubmit = function (e) {
  e.preventDefault();
  document.querySelector(".overlay").classList.remove("hidden");
  document.querySelector(".submision-card").classList.add("active");
};

const handleContinue = function () {
  document.querySelector(".overlay").classList.add("hidden");
  document.querySelector(".submision-card").classList.remove("active");
  form.reset();
};
// Attach the event listener to the form
form.addEventListener("submit", handleSubmit);
continueBttn.addEventListener("click", handleContinue);
