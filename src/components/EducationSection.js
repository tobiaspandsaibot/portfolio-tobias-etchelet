import React from 'react';
import './EducationSection.css';

const EducationSection = () => {
  return (
    <section className="education-section">
      <h2>Educación</h2>
      
      <div className="education-item glass-card">
        <div className="education-header">
          <h3>Técnico Superior en Diseño de Interfaces Digitales</h3>
          <span className="education-date">2018 – 2024</span>
        </div>
        <div className="education-details">
          <p><strong>Institución:</strong> ORT Argentina</p>
          <p>Actualmente completando las últimas materias, próximo a recibirse.</p>
        </div>
      </div>

      <div className="education-item glass-card">
        <div className="education-header">
          <h3>Diseñador Gráfico</h3>
          <span className="education-date">2018 – 2024</span>
        </div>
        <div className="education-details">
          <p><strong>Institución:</strong> ORT Argentina</p>
          <p>Especialización en creación de logotipos, isotipos y branding, incluyendo la creación de manual de identidad corporativo.</p>
        </div>
      </div>

      <div className="education-item glass-card">
        <div className="education-header">
          <h3>Diseñador Gráfico – UBA (FADU)</h3>
          <span className="education-date">2016 – 2018</span>
        </div>
        <div className="education-details">
          <p><strong>Institución:</strong> Universidad de Buenos Aires (FADU)</p>
          <p>Cursé la carrera durante 2 años antes de cambiar a ORT Argentina por su enfoque digital.</p>
        </div>
      </div>

      <div className="education-item glass-card">
        <div className="education-header">
          <h3>Diseñador Web</h3>
          <span className="education-date">2018 – 2024</span>
        </div>
        <div className="education-details">
          <p><strong>Institución:</strong> ORT Argentina</p>
          <p>Especialización en diseño y desarrollo de sitios web, abarcando desde la maquetación hasta el diseño final, ofreciendo soluciones de calidad profesional.</p>
        </div>
      </div>

      <div className="education-item glass-card">
        <div className="education-header">
          <h3>Ilustrador Digital – Puerta 18</h3>
          <span className="education-date">2015 – 2016</span>
        </div>
        <div className="education-details">
          <p>Espacio gratuito para jóvenes de 13 a 24 años, donde se fomentan habilidades y vocaciones a través del uso de herramientas tecnológicas.</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 