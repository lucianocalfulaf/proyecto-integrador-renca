import React from 'react';
import '/componentes/DetalleCurso/DetalleCurso.css';

import InfoGeneral from '/componentes/DetalleCurso/InfoGeneral/InfoGeneral.jsx';
import Acordeon from '/componentes/DetalleCurso/Acordeon/Acordeon.jsx';
import Footer from '/componentes/Footer/Footer'
import BotonAgregar from './BotonAgregar/BotonAgregar';


const DetalleCursoUsuario = () => {

    return (
        <>
            <div className="top-row">
                <InfoGeneral />
                <BotonAgregar/>
            </div>
            <div className="bottom-row">
                <Acordeon />
            </div>
                <Footer />
        </>
    );
}

export default DetalleCursoUsuario;