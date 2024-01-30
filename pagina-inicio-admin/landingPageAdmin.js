// Menú Hamburguesa

const selectNav = document.querySelector('.nav');
const selectButton = document.querySelector('.close-button');
const subMenu = document.querySelector('.deployment');

document.querySelector('#bars').addEventListener('click', () => {
	setTimeout(function() {
        selectNav.classList.toggle('visiblenav');
    }, 160);
});

document.querySelector('.close-button').addEventListener('click', () => {
    selectNav.classList.remove('visiblenav');
});

document.querySelector('.sub-menu-item').addEventListener('mouseover', () => {
    subMenu.classList.add('deployvisible');
});
