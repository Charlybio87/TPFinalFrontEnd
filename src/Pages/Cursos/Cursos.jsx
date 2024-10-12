import React from 'react'
import { Footer, Header } from '../../Components/Home'
import useProducts from '../../hooks/useProducts'

const Cursos = () => {
  
  const objeto = useProducts()
  console.log(objeto)
  

  return (
    <>
      <div>
        {/* <Header/> */}
        <main >
        {
          objeto.isLoading
            ? <h2>Cargando</h2>
            : <div> 
              {
                objeto.products.map((producto)=>{
                  return (
                    <div key={producto.id}>
                    <h3>{producto.titulo}</h3>
                    <div>
                      {
                        <div>
                        {
                          producto.curses.map( (curse)=>{
                          return (
                            <div key={curse.id}>
                              <div>
                                <img src={curse.img} alt={curse.img} />
                                <span>{curse.nombre}</span>
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