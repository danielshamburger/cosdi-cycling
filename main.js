const hero = document.getElementById('hero');
const header = document.getElementById('header');

const menuToggle = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');

const menuLinks = primaryNav.getElementsByTagName('a');

const setHeader = () => {
	const heroOutOfView = hero.getBoundingClientRect().bottom < header.offsetHeight;

    if ( heroOutOfView && !hero.classList.contains('scrolled-header') ) {
		header.classList.add('scrolled-header');
    } else if (!heroOutOfView && header.classList.contains('scrolled-header')) {
		header.classList.remove('scrolled-header');
	}
};

// TODO: debounce this
window.onscroll = () => {
	setHeader();
};

window.onload = () => {
	setHeader();
};

menuToggle.addEventListener('click', () => {
	if ( header.classList.contains('menu-open') ) {
		header.classList.remove('menu-open');
	} else {
		header.classList.add('menu-open');
	}
});

for (var i = 0; i < menuLinks.length; i++) {
	menuLinks[i].addEventListener('click', () => {
		header.classList.remove('menu-open');
	});
};