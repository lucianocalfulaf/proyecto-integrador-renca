import React, { useState, useEffect } from 'react';

const BusquedaCursos = ({ cursos }) => {
  const [search, setSearch] = useState('');
  const [filteredCursos, setFilteredCursos] = useState([]);

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const results = cursos.filter((curso) =>
      curso.productName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCursos(results);
  }, [search, cursos]);

  return (
    <div>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Buscar por nombre del curso..."
        className="form-control"
      />
      <div className="table-responsive">
        <table className="table table-striped table-hover mt-5 shadow-lg">
          <thead>
            <tr className="bg-curso text-white">
              <th>NOMBRE DEL CURSO</th>
              <th>CATEGORÍA</th>
              <th>DURACIÓN</th>
              {/* Agrega aquí más encabezados según sea necesario */}
            </tr>
          </thead>
          <tbody>
            {filteredCursos.map((curso) => (
              <tr key={curso.productName}>
                <td>{curso.productName}</td>
                <td>{curso.category}</td>
                <td>{curso.duration}</td>
                {/* Agrega aquí más celdas según sea necesario */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusquedaCursos;
