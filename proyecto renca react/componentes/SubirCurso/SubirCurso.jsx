import React, { useState } from 'react';
import './SubirCurso.css';
import Boton from '/componentes/Boton/Boton'; 
import Formulario from '/componentes/Formulario/Formulario';
import Miniatura from '/componentes/Miniatura/Miniatura';


function SubirCurso() {
    const [archivosSubidos, setArchivosSubidos] = useState([]);

    // Función para guardar los archivos subidos
    const guardarArchivosSubidos = (nuevosArchivos) => {
      setArchivosSubidos(nuevosArchivos);
    };

    return (
        <main className="container">
            <div className="grupo-2">
                <h2 style={{color: '#60BDB1'}}>Subir Curso</h2>
            </div>
            <div className="grupo-1">
                <div className="box-1">
                    <div className="zone">
                        <div id="dropZ">
                            <i className="fa fa-cloud-upload"></i>
                            <div>Arrastra y suelta el archivo aquí</div>
                            <span>o</span>
                            <div className="selectFile">
                                <label htmlFor="file">Seleccionar archivo</label>
                                <input type="file" name="files[]" id="file" />
                            </div>
                            <h4>Tamaño máximo: x MB</h4>
                        </div>
                    </div>
                    <h4>¡Revisa que el formato sea el correcto!</h4>
                </div>
                <div className="box-2">
                    <Formulario /> 
                </div>
                <div className="box-3">
                    <div className="red-social">
                        <Miniatura />
                        <h4 style={{ textAlign: 'left' }}>Info de tamaño y formato del archivo</h4>
                        <h4 style={{ textAlign: 'left' }}>Añadir subtítulos</h4>
                        <div className="selectFile">
                            <label htmlFor="file">Seleccionar archivo</label>
                            <input type="file" name="files[]" id="file" />
                        </div>
                        
                        <Boton /> 
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SubirCurso;
