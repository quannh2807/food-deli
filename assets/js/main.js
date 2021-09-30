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

function removeAttr(selector, attrName) {
	let elements = document.querySelectorAll(selector);
	elements.forEach((element) => {
		let currentAttr = element.getAttribute(attrName);
		if (currentAttr.length > 0) {
			element.setAttribute(attrName, '');
		}
	});
}
function addAttr(selector, attrName, value) {
	let elements = document.querySelectorAll(selector);
	elements.forEach((element) => {
		let currentAttr = element.getAttribute(attrName);
		if (currentAttr.length <= 0) {
			element.setAttribute(attrName, value);
		}
	});
}
function removeClassName(selector, className) {
	let listSelector = document.querySelectorAll(selector);
	listSelector.forEach((element) => {
		let isContain = element.classList.contains(className);
		if (isContain) {
			element.classList.remove(className);
		}
	});
}
function addClassName(selector, className) {
	let listSelector = document.querySelectorAll(selector);
	listSelector.forEach((element) => {
		let isContain = element.classList.contains(className);
		if (!isContain) {
			element.classList.add(className);
		}
	});
}
window.onresize = function () {
	let windowWidth = window.innerWidth;

	if (windowWidth >= 768) {
		addClassName('.accordion-collapse', 'show');
		removeAttr('.btn-collapse', 'data-bs-toggle')
	} else if (windowWidth < 768) {
		removeClassName('.accordion-collapse', 'show');
		addAttr('.btn-collapse', 'data-bs-toggle', 'collapse')
	}
};
window.onload = function () {
	let windowWidth = window.innerWidth;
	if (windowWidth >= 768) {
		addClassName('.accordion-collapse', 'show');
		removeAttr('.btn-collapse', 'data-bs-toggle')
	} else if (windowWidth < 768) {
		removeClassName('.accordion-collapse', 'show');
		addAttr('.btn-collapse', 'data-bs-toggle')
	}
};
