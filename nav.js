"use strict";

const showOpt = document.querySelector(".show-opt");
const menuOpts = document.querySelector(".options");

showOpt.addEventListener("click", () => {
  menuOpts.classList.toggle("m-menu-opt-active");
});
