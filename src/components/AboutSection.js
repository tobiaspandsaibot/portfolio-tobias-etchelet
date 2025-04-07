import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section glass-card">
      <h2 className="section-title">Sobre Mí</h2>
      
      <div className="about-content">
        
        <ul className="skills-list">
          <li>Diseño gráfico</li>
          <li>Diseño web</li>
          <li>Diseño UI – UX</li>
          <li>Desarrollo web</li>
        </ul>
        
        <p>
         Tengo experiencia dando soluciones de Diseño y Desarrollo Web a problemas de negocios reales, tratanto con clientes y equipos, a nivel nacional e internacional, para  clientes de Argentina, Estados unidos, Uruguay y España.  Me especialicé en Paid Media creando anuncios en Meta Ads y Google Ads.
          Uso mis habilidades en más de 50 herramientas de Inteligencia Artificial (AI), y las aplico en el desarrollo de mi trabajo, mejorando la calidad, velocidad y automatización de mi trabajo.
        </p>
        
        <p>
          Amo lo que hago! 
          Mi misión es ayudar a transformar la vida de muchas personas, negocios y empresas, 
          creando soluciones y experiencias web únicas y de alta calidad.
        </p>
        
      </div>
    </div>
  );
};

export default AboutSection; 