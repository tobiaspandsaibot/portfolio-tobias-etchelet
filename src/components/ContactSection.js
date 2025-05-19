import React, { useEffect, useRef } from 'react';
import './ContactSection.css';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const { getTranslation } = useLanguage();
  const contactRef = useRef(null);
  const whatsappMessage = encodeURIComponent(getTranslation('whatsappMessage'));
  const whatsappLink = `https://wa.me/5491141775078?text=${whatsappMessage}`;

  useEffect(() => {
    gsap.to(contactRef.current, {
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top 12px',
        endTrigger: '.dashboard-container',
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false
      }
    });

    // Limpieza al desmontar el componente
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="contact-wrapper" ref={contactRef}>
      <section className="contact-section">
        <h2>{getTranslation('contactTitle')}</h2>
        <p className="contact-description">
          {getTranslation('contactDescription')}
        </p>
        
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/tob%C3%ADas-etchelet-66350575/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin /> {getTranslation('linkedin')}
          </a>
          <a 
            href="mailto:tobiasetchelet@gmail.com"
            className="social-link"
          >
            <FaEnvelope /> {getTranslation('email')}
          </a>
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link whatsapp-link"
          >
            <FaWhatsapp /> {getTranslation('whatsapp')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;