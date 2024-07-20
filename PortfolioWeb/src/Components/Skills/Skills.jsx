import React from 'react';
import './Skills.css' 

const Skills = () => {
    return (
        <section className="habilidades" id="skills">
            <h2>Soy experto en</h2>
            <p>En ésta sección puedes ver mis habilidades como programador, enfocándome principalmente en back-end.</p>
            <div className="contenedor">
                <div className="contenedor-item item1">
                    <i className='bx bxl-html5'></i>
                    <h2>95%</h2>
                    <h4>HTML5</h4>
                </div>
                <div className="contenedor-item item2">
                    <i className='bx bxl-css3'></i>
                    <h2>95%</h2>
                    <h4>CSS3</h4>
                </div>
                <div className="contenedor-item item3">
                    <i className='bx bx-git-branch'></i>
                    <h2>95%</h2>
                    <h4>Git</h4>
                </div>
                <div className="contenedor-item item4">
                    <i className='bx bxl-postgresql'></i>
                    <h2>95%</h2>
                    <h4>SQL</h4>
                </div>
            </div>
        </section>
    );
}

export default Skills