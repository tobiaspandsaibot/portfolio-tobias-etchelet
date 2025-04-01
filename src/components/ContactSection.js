import React from 'react';
import './ContactSection.css';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  const whatsappMessage = encodeURIComponent("Hola Tobias Etchelet, mi nombre es ");
  const whatsappLink = `https://wa.me/5491141775078?text=${whatsappMessage}`;

  return (
    <div className="contact-wrapper">
      <section className="contact-section">
        <h2>Contacto</h2>
        <p className="contact-description">
          ¿Tienes un proyecto en mente? ¡Me encantaría escucharlo! Contáctame a través de las siguientes opciones:
        </p>
        
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/tob%C3%ADas-etchelet-66350575/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a 
            href="mailto:tobiasetchelet@gmail.com"
            className="social-link"
          >
            <FaEnvelope /> Email
          </a>
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link whatsapp-link"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactSection; 