import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from '/componentes/Footer/Footer'
import SubirCurso from '/componentes/SubirCurso/SubirCurso'
{/*import DetalleCurso from '/componentes/DetalleCurso/DetalleCurso'*/}
{/*import DetalleCursoUsuario from '/componentes/DetalleCursoUsuario/DetalleCursoUsuario'*/}
{/*import AgregarCursoUsuario from '/componentes/AgregarCursoUsuario/AgregarCursoUsuario'*/}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<AgregarCursoUsuario />*/}
     {/*<DetalleCursoUsuario />*/}
     {/*<DetalleCurso />*/}
      <SubirCurso />
  
    </>
  )
}

export default App;