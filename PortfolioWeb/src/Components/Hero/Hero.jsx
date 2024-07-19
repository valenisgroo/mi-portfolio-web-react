import React from 'react';
import './Hero.css' 

const Hero = () => {
  return (
    <section className="hero" id="inicio">
    <div className="hero-content">
        <h2>Hola, soy <span>PROGRAMADOR</span></h2>
        <h1>Valentino Isgro</h1>
        <p>
            En el front-end, disfruto crear interfaces atractivas y amigables, mientras que en el back-end, me sumerjo en la arquitectura y la lógica de la aplicación. Cada línea de código es una oportunidad para mejorar y/o aprender nuevas habilidades como programador.
        </p>
        <a href="#contacto">Contactarme</a>

        <div className="logros">
            <h5><span>6</span> Meses de experiencia</h5>
            <h5><span>10+</span> Proyectos hechos</h5>
            <h5><span>50+</span> Clientes</h5>
        </div>

        <div className="hero-icons">
            <a href="https://wa.me/2612453983"><i className="bx bxl-whatsapp"></i></a>
            <a href="https://www.instagram.com/valenisgroo_/"><i className="bx bxl-instagram"></i></a>
            <a href="https://www.facebook.com/valentino.isgro"><i className="bx bxl-facebook"></i></a>
            <a href="https://x.com/Valentinoisgro"><i className="bx bxl-twitter"></i></a>
            <a href="https://github.com/valenisgroo"><i className="bx bxl-github"></i></a>
        </div>
    </div>

    <img src="img/img1.jpeg" alt="Valentino Isgro" />
</section>

  )
}

export default Hero