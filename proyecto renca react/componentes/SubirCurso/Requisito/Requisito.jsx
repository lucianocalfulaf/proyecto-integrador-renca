import './Requisito.css';
import React, { useState } from 'react';

function Requisito () {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
      const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
      };

    const opcionesRequisito = ['Ninguno', 'Enseñanza básica', 'Enseñanza media'];

    return(
    <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-button">
          {selectedOption ? selectedOption : 'Seleccione requisito'}
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {opcionesRequisito.map((option, index) => (
              <div key={index} className="dropdown-item" onClick={() => handleOptionClick(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
    </div>
    )
}

export default Requisito;