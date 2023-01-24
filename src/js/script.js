const hamburger = document.querySelector(".menu__hamburger");
const menuList = document.querySelector(".menu__list");

hamburger.addEventListener("click", () => {
  menuList.classList.toggle("menu__list--active");
});
