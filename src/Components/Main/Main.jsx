import React from 'react'
import slider1 from '../../img/Slider-1-la-escuela-de-baristas.jpg'
import fondo from '../../img/fondo-la-escuela.svg'
import Sponsors from './Sponsors'

const Main = () => {
  return (
    <>
      <main className='box-container_main'>
        <article className='article-carrusel'>
          <img src={slider1} alt="1" />
          {/* <img src={slider1} alt="2" />
          <img src={slider1} alt="3" />
          <img src={slider1} alt="4" />
          <img src={slider1} alt="5" /> */}
        </article>
        <article className='article-info'>
          <h2>Fórmate como Barista profesional</h2>
          <p>Los cursos y talleres de formación de La Escuela de Baristas proponen una formación práctica profesional y muy específica, centrada en el conocimiento profundo del café y su preparación.</p>
          <a href="http://">Certificación oficial de la Specialty Coffee Association</a>
          <a href="http://">Certificación oficial de la Specialty Coffee Association</a>
          <a href="http://">Talleres personalizados para profesionales de la hostelería</a>
        </article>
        <Sponsors/>
      </main>
    </>
  )
}

export default Main