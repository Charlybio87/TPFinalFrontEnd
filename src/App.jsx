import React from "react"
import { Route, Routes } from "react-router-dom"
import { Cursos, Home } from "./Pages"
import './style/css/App.css'

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
