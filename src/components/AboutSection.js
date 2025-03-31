import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section glass-card">
      <h2 className="section-title">Sobre Mí</h2>
      
      <div className="about-content">
        <p>
          Soy Diseñador Web con más de 10 años de experiencia, especializado en:
        </p>
        <ul className="skills-list">
          <li>Diseño gráfico</li>
          <li>Diseño web</li>
          <li>Diseño UI – UX</li>
          <li>Desarrollo web</li>
        </ul>
        
        <p>
          Me especialicé en Paid Media creando anuncios en Meta Ads y Google Ads.
          Uso mis habilidades en diversas herramientas de Inteligencia Artificial (AI).
        </p>
        
        <p>
          Amo lo que hago. Mi misión es ayudar a transformar negocios y empresas, 
          creando experiencias web únicas, utilizando herramientas y software de 
          vanguardia, siempre a favor de un mundo mejor.
        </p>
        
        <div className="personal-projects">
          <h3>Trabajos Realizados</h3>
          <ul>
            <li>
              <a href="https://eljardindelaplaza.edu.ar/" target="_blank" rel="noopener noreferrer">
                El Jardín de la Plaza
              </a>
            </li>
            <li>
              <a href="https://sgastronomicas.com.ar/" target="_blank" rel="noopener noreferrer">
                SGastronomicas
              </a>
            </li>
            <li>
              <a href="https://neorelax.com.ar/" target="_blank" rel="noopener noreferrer">
                NeoRelax
              </a>
            </li>
          </ul>
        </div>
        
        <div className="ux-ui-designs">
          <h3>Diseños UX/UI</h3>
          <ul>
            <li>
              <a href="https://www.figma.com/proto/trUqjo2lR2L4imHRq2zdxg/BULGARI?type=design&node-id=2-104&t=Njlt4884jBwx21Vo-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=4%3A2" target="_blank" rel="noopener noreferrer">
                BULGARI HOTELS: Ver prototipo en Figma
              </a>
            </li>
            <li>
              <a href="https://xd.adobe.com/view/5f9f6f8d-9cda-47aa-89fb-b1e02c8d84dd-0acc/?fullscreen&hints=off" target="_blank" rel="noopener noreferrer">
                BURGER BOTS: Ver prototipo en Adobe XD
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 