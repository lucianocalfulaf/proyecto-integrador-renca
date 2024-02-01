/*navbar*/
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

/*fin navbar*/

/*acordeon*/
document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');
  
    accordions.forEach(function (accordion) {
        const btn = accordion.querySelector('.accordion-btn');
        const content = accordion.querySelector('.accordion-content');
  
        btn.addEventListener('click', function () {
            const isActive = accordion.classList.contains('active');
  
            accordions.forEach(function (otherAccordion) {
                if (otherAccordion !== accordion) {
                    otherAccordion.classList.remove('active');
                    otherAccordion.querySelector('.accordion-content').style.maxHeight = '0';
                }
            });
  
            if (!isActive) {
                accordion.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                accordion.classList.remove('active');
                content.style.maxHeight = '0';
            }
        });
    });
  });

  /*barra progreso carta 1 */
function updateProgressBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".progress__fill").style.width = `${value}%`;
    progressBar.querySelector(".progress__text").textContent = `${value}%`;
  }
  
  const myProgressBar = document.querySelector(".progress");
  
  /* Example */
  updateProgressBar(myProgressBar, 60)

/*boton continuar curso*/

  // Obtener el botón por su ID
var button = document.getElementById("continue-course-btn");

// Agregar un evento de clic al botón
button.addEventListener("click", function() {
    // Redirigir a otra página
    window.location.href = "Mis_cursos_a_detalle.html";
});

