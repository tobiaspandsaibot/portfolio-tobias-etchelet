import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section glass-card">
      <h2 className="section-title">Sobre Mí</h2>
      
      <div className="about-content">
        <p>
          Soy Diseñador/Desarrollador Web con más de 12 años de experiencia, especializado en:
        </p>
        <ul className="skills-list">
          <li>Diseño gráfico</li>
          <li>Diseño web</li>
          <li>Diseño UI – UX</li>
          <li>Desarrollo web</li>
        </ul>
        
        <p>
          Me especialicé en Paid Media creando anuncios en Meta Ads y Google Ads.
          Uso mis habilidades en más de 50 herramientas de Inteligencia Artificial (AI), y las aplico en el desarrollo de mi trabajo, mejorando la calidad, velocidad y automatización de mi trabajo.
        </p>
        
        <p>
          Amo lo que hago. Mi misión es ayudar a transformar negocios y empresas, 
          creando experiencias web únicas, utilizando herramientas y software de 
          vanguardia, siempre a favor de un mundo mejor.
        </p>
        
      </div>
    </div>
  );
};

export default AboutSection; 