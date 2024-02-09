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
