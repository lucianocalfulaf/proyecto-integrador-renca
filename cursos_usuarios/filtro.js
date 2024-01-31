//Busqueda Filtro
document.getElementById('searchInput').addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  const courseList = document.getElementsByClassName('course-link');

  // Itera sobre los elementos y muestra/oculta según la coincidencia con el filtro
  Array.from(courseList).forEach(function (course) {
      const titleText = course.innerText.toLowerCase();
      const card = course.closest('.card');

      if (titleText.includes(filter)) {
          card.classList.remove('hidden');
      } else {
          card.classList.add('hidden');
      }
  });
});
//Boton filtro
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}

//FILTROOO
document.getElementById('filterButton').addEventListener('click', function () {
  const filterSection = document.getElementById('filterSection');

  // Si la sección de filtros está visible, la oculta; de lo contrario, la muestra
  filterSection.style.display = filterSection.style.display === 'none' ? 'block' : 'none';
});

