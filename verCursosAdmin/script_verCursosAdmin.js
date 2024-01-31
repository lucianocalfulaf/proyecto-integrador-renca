/*NAVBAR*/
// Menú Hamburguesa

const selectNav = document.querySelector('.nav');
const selectButton = document.querySelector('.close-button');

document.querySelector('#bars').addEventListener('click', () => {
	setTimeout(function() {
        selectNav.classList.toggle('visiblenav');
    }, 160);
});

document.querySelector('.close-button').addEventListener('click', () => {
    selectNav.classList.remove('visiblenav');
});
/*FIN NAVBAR*/
