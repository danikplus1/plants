export const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".navbar__menu");
const welcome = document.querySelector(".welcome");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
  welcome.classList.toggle("top150");
});
