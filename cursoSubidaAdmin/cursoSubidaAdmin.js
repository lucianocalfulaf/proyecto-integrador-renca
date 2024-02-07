lang="es"
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

//Validacion JS
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("botonSubirCurso").addEventListener("click", function(event) {
      // Obtener los valores de los campos del formulario
      var tituloCurso = document.getElementById("inputTituloNuevoCurso").value;
      var descripcionCurso = document.getElementById("inputDescripcion").value;
      var rutaAprendizaje = document.getElementById("inputRuta").value;
      var moduloHoras = document.getElementById("inputModuloHoras").value;

      // Verificar si los campos requeridos están vacíos
      if (tituloCurso.trim() === "" || descripcionCurso.trim() === "" || rutaAprendizaje === "" || moduloHoras.trim() === "") {
          // Mostrar una alerta indicando que se deben completar todos los campos
          alert("Por favor completa todos los campos para subir el curso.");
          // Evitar que el formulario se envíe
          event.preventDefault();
      }
  });
});
