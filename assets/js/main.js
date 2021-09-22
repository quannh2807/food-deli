let menu = new MmenuLight(document.querySelector('#menu'), 'all');

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
});
