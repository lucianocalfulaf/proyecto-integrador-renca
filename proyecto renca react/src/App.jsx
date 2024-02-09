import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from '/componentes/Footer/Footer'
import SubirCurso from '/componentes/SubirCurso/SubirCurso'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <SubirCurso />
      <Footer />
    </>
  )
}

export default App

