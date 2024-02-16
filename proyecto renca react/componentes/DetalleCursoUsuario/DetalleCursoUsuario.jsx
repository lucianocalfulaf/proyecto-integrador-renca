import React from 'react';
import '/componentes/DetalleCurso/DetalleCurso.css';

import InfoGeneral from '/componentes/DetalleCurso/InfoGeneral/InfoGeneral.jsx';
import BotonContinuar from '/componentes/DetalleCursoUsuario/BotonContinuar/BotonContinuar.jsx';
import Acordeon from '/componentes/DetalleCurso/Acordeon/Acordeon.jsx';
import Footer from '/componentes/Footer/Footer'


const DetalleCursoUsuario = () => {

    return (
        <>
            <div className="top-row">
                <InfoGeneral />
                <BotonContinuar/>
            </div>
            <div className="bottom-row">
                <Acordeon />
               
            </div>
                <Footer />
        </>
    );
}

export default DetalleCursoUsuario;