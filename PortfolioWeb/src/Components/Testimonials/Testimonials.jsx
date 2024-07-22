import React from 'react';
import './Testimonials.css' 

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonial">
          <h3>Testimonios</h3>
          <h2>Clientes Felices</h2>
          
          <div className="contcli">
            <div className="cliente c1">
              <img src="img/cliente1.jpg" alt="Martha Sandoval" />
              <div className="cliente-info">
                <h5>Martha Sandoval</h5>
                <h6>Product Designer</h6>
                <p>We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth asset management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuously.</p>
              </div>
            </div>
    
            <div className="cliente c2">
              <img src="img/cliente2.jpg" alt="Stevin Smith" />
              <div className="cliente-info">
                <h5>Stevin Smith</h5>
                <h6>UX Designer</h6>
                <p>We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth asset management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuously.</p>
              </div>
            </div> 
          </div>
        </section>
      );
}

export default Testimonials