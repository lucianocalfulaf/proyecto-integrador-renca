let products = {
    data: [
      {
        productName: "Curso Desarrollo Web",
        category: "Tecnologia",
        duration: "20hrs",
        image: "img/curso.jpg",
      },
      {
        productName: "Curso Creative",
        category: "Tecnologia",
        duration: "10hrs",
        image: "img/aprendizaje.jpg",
      },
      {
        productName: "Curso Diseño Mockup",
        category: "Tecnologia",
        duration: "10hrs",
        image: "img/curso.jpg",
      },
      {
        productName: "Curso Metologias Agiles",
        category: "Metodologia",
        duration: "15hrs",
        image: "img/aprendizaje.jpg",
      },
      {
        productName: "Curso Diseño Web",
        category: "Diseño",
        duration: "20hrs",
        image: "img/curso.jpg",
      },
      {
        productName: "Curso Programacion",
        category: "Tecnologia",
        duration: "30hrs",
        image: "img/aprendizaje.jpg",
      },
    ],
  };  

// ...

for (let i of products.data) {
  // Create Card
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  // Image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  // Img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  // Container
  let container = document.createElement("div");
  container.classList.add("container");

  // Product name (wrapped in a link)
  let productNameLink = document.createElement("a");
  productNameLink.classList.add("product-name");
  productNameLink.innerText = i.productName.toUpperCase();

    // Reemplazar espacios por guiones y convertir a minúsculas
    const hrefValue = encodeURIComponent(i.productName.replace(/\s+/g, "-").toLowerCase()+ ".html");

    // Set the href attribute with the modified product name value
    productNameLink.href = "http://127.0.0.1:5500/proyecto-integrador-renca/cursos_usuarios/" + hrefValue;
    
    // Append the product name link to the container
    container.appendChild(productNameLink);


  // duration
  let duration = document.createElement("h6");
  duration.innerText = i.duration;
  container.appendChild(duration);

  // Category
  let category = document.createElement("h6");
  category.innerText = "Categoria: " + i.category;
  container.appendChild(category);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

// ...

  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };

            //Integracion Filtro por horas

// Añade un nuevo objeto con opciones de filtro por horas
let filters = {
  category: "all",
  hrs: [],
};

// Función para mostrar/ocultar el menú de opciones de filtro
function toggleFilterMenu(filterType) {
  const filterMenu = document.getElementById(`${filterType}FilterMenu`);
  filterMenu.style.display = filterMenu.style.display === 'none' ? 'block' : 'none';
}

// Función para aplicar los filtros, incluyendo horas
function applyFilters() {
  const elements = document.querySelectorAll(".card");

  elements.forEach((element) => {
    const cardCategory = element.classList[1];
    const cardHours = parseInt(element.getAttribute('duration'));

    // Verifica si la categoría y las horas coinciden con los filtros seleccionados
    const categoryFilter = filters.category === "all" || cardCategory === filters.category;
    const hoursFilter = filters.hours.length === 0 || filters.hours.includes(cardHours);

    // Muestra u oculta la tarjeta según los filtros
    if (categoryFilter && hoursFilter) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });
}

// Evento de cambio en las opciones de filtro por horas
document.querySelectorAll('.filterOption').forEach(option => {
  option.addEventListener('change', function() {
      if (this.checked) {
          filters.hours.push(parseInt(this.value));
      } else {
          const index = filters.hours.indexOf(parseInt(this.value));
          if (index !== -1) filters.hours.splice(index, 1);
      }

      // Aplica los filtros después de cada cambio
      applyFilters();
  });
});

// ...
