// const currentDate = document.getElementsByTagName("li");
"use script"

const currentDate = document.querySelector(".click__li");


currentDate.addEventListener("click", () => {
  currentDate.style.backgroundColor = "#0088F0";
  calendarLi.style.color = "#fff";
  calendarLi.style.borderRadius = "50%";
  calendarLi.style.width = "20px";
  calendarLi.style.height = "40px";
});

