import React from 'react';
import './ContactCard.css';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const ContactCard = () => {
  return (
    <div className="contact-card glass-card">
      <h2 className="section-title">Contacto</h2>
      
      <div className="contact-items">
        <div className="contact-item">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <div className="contact-info">
            <span className="contact-label">Email</span>
            <a href="mailto:tobiasetchelet@gmail.com" className="contact-value">
              tobiasetchelet@gmail.com
            </a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <FaLinkedin />
          </div>
          <div className="contact-info">
            <span className="contact-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/tob%C3%ADas-etchelet-66350575/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="contact-value">
              Tobías Etchelet
            </a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="contact-info">
            <span className="contact-label">Ubicación</span>
            <span className="contact-value">Buenos Aires, Argentina</span>
          </div>
        </div>
      </div>
      
      <div className="contact-cta">
        <a href="#" className="download-cv">
          <FaDownload /> Descargar CV
        </a>
      </div>
    </div>
  );
};

export default ContactCard; 