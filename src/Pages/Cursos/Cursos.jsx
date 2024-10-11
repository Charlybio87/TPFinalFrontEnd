import React from 'react'
import { Footer, Header, Main } from '../../Components/Home'
import { Link } from 'react-router-dom'

const Cursos = () => {
  return (
    <>
      <div className='container'>
      <Header/>
      <Main/>
      {/* <div className='box-container_main container_main-cursos'>
        <h1>Cursos</h1>
      </div> */}
      <Footer/>
      </div>
    </>
  )
}

export default Cursos