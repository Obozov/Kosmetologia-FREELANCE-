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
	} else {
		items.forEach((e) => {
			e.classList.remove('_scrolled');
		})
	}
});

const TOKEN = "6770059344:AAF7OC3bBx8hvaI72ZpRd-FgGblGZqZPAJw";
const CHAT_ID = "-1002018859016";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
const checkBoxs = document.querySelectorAll('.checkbox');


document.getElementById('tg').addEventListener('submit', function (e) {
	e.preventDefault();

	let messege = `<u>Заявка с сайта</u>\n`;
	messege += `<b>Имя: </b>${this.name.value}\n`;
	messege += `<b>Телефон: </b>${this.tel.value}\n`;
	messege += `<code>Выбранные услуги: </code>\n`

	checkBoxs.forEach(function (e) {
		if (e.checked) {
			messege += `<i>  ${e.dataset.value}</i><tg-emoji emoji-id="5368324170671202286">👍</tg-emoji>\n`
		} else {

		}
	})
	axios.post(URI_API, {
		chat_id: CHAT_ID,
		parse_mode: 'html',
		text: messege
	})







});