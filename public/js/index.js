// Entamaños de pantalla pequeños se activa y desactiva el menú de navegación
const navegationButton = document.querySelector('.header__navegation-button');
const navegationMenu = document.querySelector('.header__navegation-menu');

navegationButton.addEventListener('click', function () {
	navegationMenu.classList.toggle('active');
});

// Evitamos que se active el menú en un tamaño de pantalla grande
const mediaQuery = window.matchMedia('(min-width: 992px)');

mediaQuery.addEventListener('change', function () {
	navegationMenu.classList.toggle('active', false);
});
