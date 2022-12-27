// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



//============= DARK LIGHT THEME ===========================================================================================================================================
const themeButton = document.getElementById('js-theme-button');
const darkTheme = 'dark-theme'
const iconTheme = '_icon-sun' // ._icon-medapps:before

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? '_icon-moon' : '_icon-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === '_icon-moon' ? 'add' : 'remove'](iconTheme)
};

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
});
//========================================================================================================================================================



//=========== FILTERS =============================================================================================================================================
const list = document.querySelector('.list');
const items = document.querySelectorAll('.portfolio__item');

const listItems = document.querySelectorAll('.list__item');

if (list) {
	function filter() {
		list.addEventListener('click', event => {
			const targetId = event.target.dataset.id;
			const target = event.target;

			if (target.classList.contains('list__item')) {
				listItems.forEach(listItem => listItem.classList.remove('tab-active'));
				target.classList.add('tab-active')
			}

			console.log(targetId);

			switch (targetId) {
				case 'all':
					getItems('portfolio__item')
					break

				case 'corporate':
					getItems(targetId)
					break

				case 'landing':
					getItems(targetId)
					break

				case 'internet-shop':
					getItems(targetId)
					break

			}

		})
	};
	filter();

	function getItems(className) {
		items.forEach(item => {
			if (item.classList.contains(className)) {
				item.style.display = 'block'
			} else {
				item.style.display = 'none'
			}
		})
	}
}
//========================================================================================================================================================



//=========== RUBBER BAND Text Animation =============================================================================================================================================
const rubAnim = document.querySelectorAll('.label__pop');
if (rubAnim) {
	for (let i = 0; i < rubAnim.length; i++) {
		rubAnim[i].addEventListener('mouseenter', function () {
			rubAnim[i].classList.add('rubberBand');
			setTimeout(function () {
				rubAnim[i].classList.remove('rubberBand');
			}, 1000);
		})
	}
}
//========================================================================================================================================================

//=========== Marquee  like Content Scrolling =============================================================================================================================================
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee__content");
if (marqueeContent) {


	root.style.setProperty("--marquee-elements", marqueeContent.children.length);

	for (let i = 0; i < marqueeElementsDisplayed; i++) {
		marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
	}
}
//========================================================================================================================================================
const goTopBtn = document.querySelector('[data-go-top]');
window.addEventListener('scroll', function () {
	if (window.scrollY >= 120) {

		goTopBtn.classList.add('active');
	} else {

		goTopBtn.classList.remove('active');
	}
});
//========================================================================================================================================================
