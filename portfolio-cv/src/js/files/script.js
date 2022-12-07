// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



//============= DARK LIGHT THEME ===========================================================================================================================================
const themeButton = document.getElementById('js-theme-button');
const darkTheme = 'dark-theme'
const iconTheme = '_icon-medapps' // ._icon-medapps:before

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? '_icon-lightbulb' : '_icon-medapps'

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === '_icon-lightbulb' ? 'add' : 'remove'](iconTheme)
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
/*
const canvar = document.querySelector('.canvas');
if (canvar) {
	window.onload = function () {
		//get the canvas and conext and store in vars
		var canvas = document.getElementById("sky");
		var ctx = canvas.getContext("2d");

		var W = window.innerWidth;
		var H = window.innerHeight;
		canvas.width = W;
		canvas.height = H;

		var mf = 100;
		var flakes = [];

		for (var i = 0; i < mf; i++) {
			flakes.push({
				x: Math.random() * W,
				y: Math.random() * H,
				r: Math.random() * 0.5 + 0.5,
				d: Math.random() + 0.5
			});
		}

		function drawFlakes() {
			ctx.clearRect(0, 0, W, H);
			ctx.fillStyle = "white";
			ctx.beginPath();
			for (var i = 0; i < mf; i++) {
				var f = flakes[i];
				ctx.moveTo(f.x, f.y);
				ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
			}
			ctx.fill();
			moveFlakes();
		}

		var angle = 0;

		function moveFlakes() {
			angle += 0.01;
			for (var i = 0; i < mf; i++) {
				var f = flakes[i];

				f.y += Math.pow(f.d, 2) * 1;
				f.x += Math.sin(angle) * 2;

				if (f.y > H) {
					flakes[i] = {
						x: Math.random() * W,
						y: 0,
						r: f.r,
						d: f.d
					}
				}
			}

		}

		setInterval(drawFlakes, 25);
	}
}
*/
//========================================================================================================================================================

//========================================================================================================================================================
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
