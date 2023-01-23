const menuBtn = document.getElementById("menu_btn_id");
const menuBtnBars = menuBtn.querySelector(".fa-bars");
const menuBtnXMark = menuBtn.querySelector(".fa-xmark");
const mainMenu = document.querySelector('.main-menu');

menuBtn.addEventListener("click", () => {
	mainMenu.classList.toggle("open");
	menuBtnBars.classList.toggle("is-visible");
	menuBtnXMark.classList.toggle("is-visible");
});

