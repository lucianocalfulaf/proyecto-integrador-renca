import React from 'react';
import LeftSide from './components/LeftSide';
import FormularioInicioSesion from './components/FormularioInicioSesion';
import './styles/styleAdmin.css';

function App() {
  return (
    <div className="container">
        <LeftSide className="left-side" />
        <FormularioInicioSesion className="formulario" />
    </div>
  );
}

export default App;