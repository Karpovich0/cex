const BURGER = document.querySelector(".burger");
const HEADER = document.querySelector(".header");

BURGER.addEventListener("click", function () {
	HEADER.classList.toggle("header--open");
});
