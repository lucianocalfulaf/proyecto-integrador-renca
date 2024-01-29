// Menú Hamburguesa

// const line1__bars = document.querySelector('.line1__bars-menu');
// const line2__bars = document.querySelector('.line2__bars-menu');
// const line3__bars = document.querySelector('.line3__bars-menu');
const selectNav = document.querySelector('.nav');
const selectButton = document.querySelector('.close-button');

document.querySelector('#bars').addEventListener('click', () => {
	setTimeout(function() {
        selectNav.classList.toggle('visiblenav');
    }, 160);
    // line1__bars.classList.toggle('activeline1__bars-menu');
    // line2__bars.classList.toggle('activeline2__bars-menu');
    // line3__bars.classList.toggle('activeline3__bars-menu');
    // selectNav.classList.toggle('visiblenav');
});

document.querySelector('.close-button').addEventListener('click', () => {
    selectNav.classList.remove('visiblenav');
});