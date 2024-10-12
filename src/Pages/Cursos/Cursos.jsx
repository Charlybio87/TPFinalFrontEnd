import React from 'react'
import { Footer, Header } from '../../Components/Home'
import useProducts from '../../hooks/useProducts'
import '../../style/css/curses.css'

const Cursos = () => {
  
  const objeto = useProducts()
  console.log(objeto)
  

  return (
    <>
      <div>
        <Header/>
        <main className='container-curses'>
        {
          objeto.isLoading
            ? <h2>Cargando</h2>
            : <div> 
              {
                objeto.products.map((producto)=>{
                  return (
                    <div key={producto.id} className='titulo-curses'>
                    <h3 className='style-titulo'>{producto.titulo}</h3>
                    <div>
                      {
                        <div className='flex-curses'>
                        {
                          producto.curses.map( (curse)=>{
                          return (
                            <div key={curse.id}  className='curse-container'>
                              <div className='img-container'>
                                <img src={curse.img} alt={curse.img} className='styled-img'/>
                                <p className='styled-p'>{curse.nombre} – <strong>{curse.precio}</strong></p>
                              </div>
                            </div>
                            )
                          } 
                          )
                        }
                        </div>
                      }
                      </div>
                    </div>
                  )
                } 
              )}
            </div>
        }
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default Cursos