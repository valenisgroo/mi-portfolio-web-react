import React from 'react';
import './SobreMi.css' 

const SobreMi = () => {
  return (
    <section className="sobremi" id="about">
  <h2>Sobre <span>Mi</span></h2>
  <h4>Programador Full Stack</h4>
  <p>
    Hola, mi nombre es Valentino Isgro y soy estudiante de Ingeniería en Sistemas en la Universidad Tecnológica Nacional. Con 20 años de edad, me encuentro actualmente en el tercer año de mi carrera. Mi interés por la tecnología y la informática me ha llevado a inscribirme en un curso de Desarrollo Web FullStack, donde estoy aprendiendo nuevas tecnologías y perfeccionando mis habilidades en el desarrollo web.
  </p>
  
  <p>
    Al día de hoy estoy aprendiendo HTML, CSS y JS, que son las tecnologías básicas para la creación de sitios o páginas web. He utilizado estas habilidades para crear páginas web estáticas e interactivas. Además, he aprendido lenguajes de programación como Java y C++, lo que me ha dado una base sólida en programación orientada a objetos. También tengo experiencia en la gestión y administración de bases de datos tanto relacionales (SQL) como no relacionales (NoSQL), lo que me permite manejar y estructurar datos de manera eficiente en diversos contextos.
  </p>

  <p>
    Quiero ser parte de grandes proyectos que me desafíen y me ayuden a crecer como profesional. Mi objetivo es ser parte de proyectos que pueden marcar una gran diferencia y generar cambios positivos. También estoy entusiasmado con la oportunidad de trabajar con un equipo de personas talentosas que pueden inspirarme y desafiarme a convertirme en un mejor programador. Siempre estoy buscando nuevas formas de aprender y crecer, para poder estar al día con todas las cosas interesantes que suceden en el mundo de la tecnología.
  </p>

  <div className="cont-button">
    <a href='files/Valentino_Isgro_CV.pdf' download='Curriculum vitae.pdf' className="button-about">Descargar CV</a>
  </div>

</section>

  )
}

export default SobreMi