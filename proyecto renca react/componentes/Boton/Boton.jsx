import './Boton.css';
import React, { useState } from 'react';


function Boton({ guardarArchivosSubidos }) {
  // Función que maneja el clic del botón
  const handleClick = () => {
    // Simulando archivos subidos (puedes obtenerlos de alguna fuente real)
    const nuevosArchivos = ['archivo1.pdf', 'archivo2.png', 'archivo3.docx'];
    // Llamar a la función de guardarArchivosSubidos proporcionada por el componente padre
    guardarArchivosSubidos(nuevosArchivos);
    // Mostrar una alerta cuando se haga clic en el botón
    window.alert('¡Se han guardado los archivos subidos en la lista del formulario!');
  };

  return (
    <div>
      <button className="custom-button" onClick={handleClick}>
        Subir curso
      </button>
    </div>
  );
}

export default Boton;
