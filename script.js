"use script";
const openBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close__btn");
const openMenu = document.getElementById("button");

let openButton = function () {
  openMenu.style.display = "block";
};

openBtn.addEventListener("click", openButton);

let closeButton = function () {
  openMenu.style.display = "none";
};

closeBtn.addEventListener("click", closeButton);
