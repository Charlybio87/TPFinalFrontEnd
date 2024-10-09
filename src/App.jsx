import React from "react"
import Home from "./Pages/Home/Home"
import { Route, Routes } from "react-router-dom"
import Cursos from "./Pages/Cursos/Cursos"


function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cursos' element={<Cursos/>}/>
      </Routes>
    </>
  )
}

export default App
