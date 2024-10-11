import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Cursos from "./Pages/Cursos/Cursos"


function App() {
  
  return (
    <>
      {/* <Home/>
      <Cursos/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cursos' element={<Cursos/>}/>
      </Routes>
    </>
  )
}

export default App
