
const openBtn = document.getElementById("menu");
// const openBtn = document.getElementById("menu");
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

// const currentDate = document.getElementsByTagName("li");
"use script"

"use script";


const currentDate = document.querySelector(".click__li");


currentDate.addEventListener("click", () => {
  currentDate.style.backgroundColor = "#0088F0";
  currentDate.style.color = "#fff";
  currentDate.style.borderRadius = "50%";
  currentDate.style.width = "20px";
  currentDate.style.height = "40px";
});


