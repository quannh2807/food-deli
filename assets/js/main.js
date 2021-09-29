/* let menu = new MmenuLight(document.querySelector('#menu'), 'all');

let navigator = menu.navigation({
	// selectedClass: 'Selected',
	// slidingSubmenus: true,
	// theme: 'dark',
	// title: 'Menu'
});

let drawer = menu.offcanvas({
	position: 'right',
});

//	Open the menu.
document.querySelector('button.btn-expand').addEventListener('click', (event) => {
	event.preventDefault();
	drawer.open();
}); */

window.onresize = function () {
	let windowWidth = window.innerWidth;
	document.querySelectorAll('.btn-collapse').forEach((element) => {
		let attr = element.getAttribute('data-bs-toggle');
		if (windowWidth > 768 && attr.length > 0) {
			element.setAttribute('data-bs-toggle', '');
			let listActiveE = document.querySelectorAll('.accordion-collapse');
			listActiveE.forEach((e) => e.classList.add('show'));
		} else if (windowWidth < 768 && !attr.length > 0) {
			element.setAttribute('data-bs-toggle', 'collapse');

			let listActiveE = document.querySelectorAll('.accordion-collapse');
			listActiveE.forEach((e) => e.classList.remove('show'));
		}
	});
};
window.onload = function () {
	let listActiveE = document.querySelectorAll('.accordion-collapse');
	listActiveE.forEach((e) => {
		let isContain = e.classList.contains('show');
		if (!isContain && window.innerWidth > 767) {
			e.classList.add('show');
		} else if (isContain && window.innerWidth < 768) {
			e.classList.remove('show');
		}
	});
};
