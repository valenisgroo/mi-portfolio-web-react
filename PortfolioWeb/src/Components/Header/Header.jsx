import React from 'react';
import './Header.css' 

const Header = () => {
  return (
  <header className="header">
    <nav className="navbar">
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#about">Sobre Mi</a></li>
            <li><a href="#experience">Experiencia</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#project">Proyectos</a></li>
            <li><a href="#testimonial">Testimonios</a></li>
            <li><a href="#contact">Contacto</a></li>
        </ul>
    </nav>
  </header>
  )
}

export default Header