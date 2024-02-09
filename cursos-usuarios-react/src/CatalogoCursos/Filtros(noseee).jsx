import React, { useState } from 'react';

function Filtros() {
  const [filterOptions, setFilterOptions] = useState({
    modalidad: 'Todos',
    seccion: 'Todos',
    horas: [],
  });

  const filterProduct = (value) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      seccion: value,
    }));
  };

  const toggleFilterMenu = (filterType) => {
    const filterMenu = document.getElementById(`${filterType}FilterMenu`);
    filterMenu.style.display =
      filterMenu.style.display === 'none' ? 'block' : 'none';
  };

  const applyFilters = () => {
    const elements = document.querySelectorAll('.card');

    elements.forEach((element) => {
      const cardCategory = element.classList[1];
      const cardHours = parseInt(element.getAttribute('duration'));

      const categoryFilter =
        filterOptions.seccion === 'Todos' || cardCategory === filterOptions.seccion;
      const hoursFilter =
        filterOptions.horas.length === 0 ||
        filterOptions.horas.includes(cardHours);

      if (categoryFilter && hoursFilter) {
        element.classList.remove('hide');
      } else {
        element.classList.add('hide');
      }
    });
  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: '10px' }}>
        Cursos
      </h1>
      <div className="container text-center">
        <div className="app">
          <div className="row">
            <div className="col-10"></div>

            <div className="col-2">
              <button id="filterButton">Filtros</button>

              <div
                id="overlay"
                style={{
                  position: 'fixed',
                  width: '100%',
                  height: '100%',
                  display: 'none',
                }}
              ></div>
              <div
                id="filterSection"
                style={{
                  position: 'fixed',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '20px',
                  display: 'none',
                }}
              >
                <div className="filterOption">
                  <span className="filter">Modalidad:</span>
                  <select
                    className="filterDropdown"
                    id="modalidadDropdown"
                    onChange={(e) =>
                      setFilterOptions((prevOptions) => ({
                        ...prevOptions,
                        modalidad: e.target.value,
                      }))
                    }
                  >
                    <option value="Todos" className="option">
                      Todos
                    </option>
                    <option value="Remoto" className="option">
                      Remoto
                    </option>
                    <option value="Hibrido" className="option">
                      Hibrido
                    </option>
                  </select>
                </div>

                <div className="filterOption">
                  <span className="filter">Sección:</span>
                  <select
                    className="filterDropdown"
                    id="seccionDropdown"
                    onChange={(e) =>
                      setFilterOptions((prevOptions) => ({
                        ...prevOptions,
                        seccion: e.target.value,
                      }))
                    }
                  >
                    <option value="Todos" className="option">
                      Todos
                    </option>
                    <option value="Tecnologia" className="option">
                      Tecnologia
                    </option>
                    <option value="Metodologias" className="option">
                      Metodologias
                    </option>
                  </select>
                </div>
                <button id="limpiarFiltros">Limpiar Filtros</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div id="search-container">
          <input
            type="search"
            id="search-input"
            placeholder="Search product name here.."
          />
          <button id="search">Search</button>
        </div>
        <div id="buttons">
          <button className="button-value" onClick={() => filterProduct('all')}>
            All
          </button>
          <button
            className="button-value"
            onClick={() => filterProduct('Tecnologia')}
          >
            Tecnologia
          </button>
          <button className="button-value" onClick={() => filterProduct('Diseño')}>
            Diseño
          </button>
          <button
            className="button-value"
            onClick={() => filterProduct('Metodologia')}
          >
            Metodologia
          </button>
          <button
            id="filterHoursButton"
            onClick={() => toggleFilterMenu('hours')}
          >
            Filter by Hours
          </button>
          <div id="hoursFilterMenu" style={{ display: 'none' }}>
            <label>
              <input type="checkbox" className="filterOption" value="10" /> 10hrs
            </label>
            <label>
              <input type="checkbox" className="filterOption" value="20" /> 20hrs
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filtros;
