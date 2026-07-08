const hero = document.getElementById('hero');
const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');
const menuLinks = primaryNav ? primaryNav.getElementsByTagName('a') : [];

const setHeader = () => {
	if (!hero || !header) return;
	const heroOutOfView = hero.getBoundingClientRect().bottom < header.offsetHeight;
	if (heroOutOfView && !header.classList.contains('scrolled-header')) {
		header.classList.add('scrolled-header');
	} else if (!heroOutOfView && header.classList.contains('scrolled-header')) {
		header.classList.remove('scrolled-header');
	}
};

window.addEventListener('scroll', setHeader, { passive: true });
window.addEventListener('load', setHeader);

const setMenu = (open) => {
	if (!header || !menuToggle) return;
	header.classList.toggle('menu-open', open);
	menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
};

if (menuToggle && header) {
	menuToggle.addEventListener('click', (e) => {
		e.stopPropagation();
		setMenu(!header.classList.contains('menu-open'));
		if (header.classList.contains('menu-open') && menuLinks[0]) menuLinks[0].focus();
	});

	// close on nav link click
	for (let i = 0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener('click', () => setMenu(false));
	}

	// close on Escape (return focus to the toggle)
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && header.classList.contains('menu-open')) {
			setMenu(false);
			menuToggle.focus();
		}
	});

	// close on outside click
	document.addEventListener('click', (e) => {
		if (header.classList.contains('menu-open') && !header.contains(e.target)) {
			setMenu(false);
		}
	});
}
