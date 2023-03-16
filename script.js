"use script";

const currentDate = document.querySelector(".click__li");

currentDate.addEventListener("click", () => {
  currentDate.style.backgroundColor = "#0088F0";
  currentDate.style.color = "#fff";
  currentDate.style.borderRadius = "50%";
  currentDate.style.width = "20px";
  currentDate.style.height = "40px";
});
