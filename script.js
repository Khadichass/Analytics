
"use script";
const openBtn = document.getElementById("menu");
// const openBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close__btn");
const openMenu = document.getElementById("button");

// const currentDate = document.getElementsByTagName("li");

const currentDate = document.getElementsByTagName("li");

let hiii = document.getElementById("hiii");

const calendarLi = document.getElementsByClassName("click__li");

currentDate.addEventListener("click", function () {
  calendarLi.style.backgroundColor = "#0088F0";
  calendarLi.style.color = "#fff";
  calendarLi.style.borderRadius = "50%";
  calendarLi.style.width = "20px";
  calendarLi.style.height = "40px";

  console.log("hello");
});

hiii.addEventListener("click", function () {
  alert("hoooooo");
});
