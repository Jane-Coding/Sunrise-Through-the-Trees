const dropButton = document.querySelector(".drop_button");
const menu = document.querySelector("#menu");

dropButton.addEventListener("click", function () {
  menu.classList.toggle("menu_down");
});
