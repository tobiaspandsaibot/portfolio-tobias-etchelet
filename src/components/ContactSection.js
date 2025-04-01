import React, { useState } from 'react';
import './ContactSection.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-wrapper">
      <section className="contact-section">
        <h2>Contacto</h2>
        <p className="contact-description">
          ¿Tienes un proyecto en mente? ¡Me encantaría escucharlo! Contáctame a través de las siguientes opciones:
        </p>
        
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/tobias-blaksley-85b3b7287/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a 
            href="mailto:tobiasblaksley@gmail.com"
            className="social-link"
          >
            <FaEnvelope /> Email
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Enviar mensaje
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactSection; 