import React, { useState, useEffect } from 'react';

const [cursoEstado, setCurso] = useState([]);
const [search, setSearch] = useState('');

function Filtro() {
  const curso = {
    data: [
      {
        cursoName: "Curso Desarrollo Web",
        category: "Tecnologia",
        duration: "20hrs",
        image: "./src/assets/curso.jpg",
      },
      {
        cursoName: "Curso Creative",
        category: "Tecnologia",
        duration: "10hrs",
        image: "./src/assets/aprendizaje.jpg",
      },
      {
        cursoName: "Curso Diseño Mockup",
        category: "Tecnologia",
        duration: "10hrs",
        image: "./src/assets/curso.jpg",
      },
      {
        cursoName: "Curso Metologias Agiles",
        category: "Metodologia",
        duration: "15hrs",
        image: "./src/assets/aprendizaje.jpg",
      },
      {
        cursoName: "Curso Diseño Web",
        category: "Diseño",
        duration: "20hrs",
        image: "./src/assets/curso.jpg",
      },
      {
        cursoName: "Curso Programacion",
        category: "Tecnologia",
        duration: "30hrs",
        image: "./src/assets/aprendizaje.jpg",
      },
    ],
    
  };
  setCurso(curso);

  return (
    <div className="container">
    <div className='row'>
        <input  value={search} onChange={searcher} type='text' className='form-control' placeholder='Buscar'></input>
    </div>
      <div className="row">
      {curso.data.map((curso, index) => (
          <div key={index} className={`col-md-4 mb-4 ${curso.category}`}>
            <div className="card">
              <img src={curso.image} className="card-img-top" alt={curso.cursoName} />
              <div className="card-body">
                <h5 className="card-title">{curso.cursoName}</h5>
                <p className="card-text">Duración: {curso.duration}</p>
                <p className="card-text">Categoría: {curso.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Filtro;
