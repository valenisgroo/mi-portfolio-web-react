import React from 'react';
import './Experience.css' 

const Experience = () => {
  return (
    <section className="experience" id="experience">
    <h2>Experiencia Laboral</h2>
    <p className="experience-p">
        En ésta sección puedes ver mi experiencia laboral, enfocándose en mis últimos trabajos realizados.
    </p>
    <div className="container-experience">
        <div className="container-experience-item">
            <p className="fecha">Año 0000- Mes 0000- Día 0000</p>
            <h3>Puesto de trabajo</h3>
            <h4>Nombre empresa</h4>
            <p>Descripción de las tareas realizadas en éste trabajo y el puesto.</p>
        </div>
        <div className="container-experience-item">
            <p className="fecha">Año 0000- Mes 0000- Día 0000</p>
            <h3>Puesto de trabajo</h3>
            <h4>Nombre empresa</h4>
            <p>Descripción de las tareas realizadas en éste trabajo y el puesto.</p>
        </div>
        <div className="container-experience-item">
            <p className="fecha">Año 0000- Mes 0000- Día 0000</p>
            <h3>Puesto de trabajo</h3>
            <h4>Nombre empresa</h4>
            <p>Descripción de las tareas realizadas en éste trabajo y el puesto.</p>
        </div>
    </div>
</section>

  )
}

export default Experience