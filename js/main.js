const menuBtn = document.querySelector("#attribution-btn");
const menu = document.querySelector("#attribution-menu");
menu.classList.remove("attribution-menu--active");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("attribution-menu--active");
});