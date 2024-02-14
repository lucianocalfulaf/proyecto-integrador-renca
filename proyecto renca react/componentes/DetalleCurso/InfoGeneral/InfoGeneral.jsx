import React from 'react';
import './InfoGeneral.css';


function InfoGeneral () {
    return (
    <><div className="column-1">
            <img src="/componentes/DetalleCurso/InfoGeneral/img-1.jpg" alt="Curso" />
        </div><div className="column-2">
                <h3><strong>Curso B</strong></h3>
                <h5>Descripción del curso</h5><br /><br />
                <h5>Profesor:</h5><br />
                <h5>Duración estimada: 4 horas</h5>
            </div></>
    )
}

export default InfoGeneral;