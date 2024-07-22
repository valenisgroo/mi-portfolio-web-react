import React from 'react';
import './Contact.css' 

const Contact = () => {
    return (
        <section className="contacto" id="contact">
          <h2>Interesados En Trabajar</h2>
          <h2>Conmigo?</h2>
          <a href="#">Contactarme</a>
    
          <p>Estoy seguro de como puedo convertir tu idea en un diseño increbíle</p>
          <div className="contco">
            <div className="contco-item item 1">
              <h4>Seguime:</h4>
    
              <div className="contco2">
                <i className='bx bxl-instagram'></i>
                <i className='bx bxl-facebook'></i>
                <i className='bx bxl-tiktok'></i>
              </div>
            </div>
    
            <div className="contco-item item 2">
              <h4>Llamar</h4>
    
              <div className="contco2">
                <i className='bx bx-phone-call'></i>
                <p>(+54)2615653576</p>
              </div>
            </div>
    
            <div className="contco-item item 3">
              <h4>Mail</h4>
    
              <div className="contco2">
                <i className='bx bx-envelope'></i>
                <p>valentinoisgro@gmail.com</p>
              </div>
            </div>  
          </div>
        </section>
      );
}

export default Contact 