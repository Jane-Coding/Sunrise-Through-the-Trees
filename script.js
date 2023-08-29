const dropButton = document.querySelector(".drop_button");
const menu = document.querySelector("#menu");
const dropMenu = document.querySelector(".drop-menu");

dropButton.addEventListener("click", function () {
  dropMenu.classList.toggle("down");
});
