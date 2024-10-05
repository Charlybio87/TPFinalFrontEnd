import React from 'react'

const Header = () => {
  return (
    <>
      <header className='box-container_header'>
        <div className='header_nav'>
          <div className='logo'>
            <img src="https://laescueladebaristas.com/wp-content/uploads/2021/10/logo-la-escuela-de-baristas-ok.png" alt="logo" />
          </div>
          <nav className='nav_sup'>
            <ul>
              <li><a href="#">La Escuela</a></li>
              <li><a href="#">Cursos</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
            <ul>
              <li><a href="http://"></a>UX</li>
              <li><a href="http://"></a>CA</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header