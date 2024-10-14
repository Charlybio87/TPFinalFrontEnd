import React from 'react'

const CoursePage = ({course}) => {
  // const image = '../../'+(course.img)  
  return (
    <>
    <div className="container">      
      <h1>{course.nombre}</h1>
      <img src={course.img} alt={course.nombre} className='styled-img' />
      <p>{course.precio}</p>
      <p>{course.descripcion}</p>
      <p>{course.duracion}</p>
      <p>{course.capaidad}</p>
      <p>{course.idioma}</p></div>
    </>
  )
}

export default CoursePage