// Підключення функціоналу "Чертоги Фрілансера"

import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import { forEach } from "lodash";
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", () => {
		menuBody.classList.toggle('_active');
	});
}





const items = document.querySelectorAll('[data-translated]');
let translated;
let scrollTo;
let scrollPosition
items.forEach((item) => {

	translated = -item.dataset.translated - (item.dataset.translated * 0.3);
	item.style.cssText = `transform:translate(${translated}px,0);opacity:0.1;`;

});
window.addEventListener('scroll', () => {
	scrollPosition = window.scrollY - (window.scrollY * 0.3);
	items.forEach((item) => {
		let translated = parseInt(item.dataset.translated, 10);
		if (translated > 0) {
			scrollTo = (translated - scrollPosition) >= 0 ? scrollPosition - translated : 0;
		} else {
			scrollTo = (translated + scrollPosition) >= 0 ? 0 : -scrollPosition - translated;
		}
		item.style.cssText = `transform:translate(${scrollTo}px,0); `;

	});
	if (scrollPosition > 1154) {
		items.forEach((e) => {
			e.classList.add('_scrolled');
		})
	}else{
		items.forEach((e) => {
			e.classList.remove('_scrolled');
		})
	}
});
