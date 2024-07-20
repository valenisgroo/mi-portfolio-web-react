import React from 'react';
import './Projects.css' 

const Projects = () => {
  return (
    <section className="proyects" id="project">
    <h2>Mis últimos proyectos</h2>
    <div className="project">
        <div className="text-content">
            <h3>Login</h3>
            <p>
                El proyecto consiste en desarrollar un sistema de inicio de sesión seguro para una aplicación web, permitiendo a los usuarios registrarse, iniciar sesión y cerrar sesión de manera eficiente y segura. El sistema incluirá un formulario de registro con validación de datos para correo electrónico y contraseña, con encriptación de contraseñas antes de su almacenamiento en la base de datos.
            </p>
        </div>    
        <img src='img/login.png'  alt='Login Project' />
    </div>
    
    <div className="project">
        <img src='img/services.png' alt='Services Project' />
        
        <div className="text-content">
            <h3>Services</h3>
            <p>
                El proyecto consiste en desarrollar una página web para una empresa de servicios, ofreciendo información clara y accesible sobre los servicios disponibles, con funcionalidades que faciliten la interacción con los clientes. La sección de servicios detallará las diferentes ofertas con descripciones completas, precios, y testimonios de clientes para aumentar la confianza.
            </p>
        </div>
    </div>
</section>


  )
}

export default Projects