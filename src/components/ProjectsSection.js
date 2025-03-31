import React from 'react';
import './ProjectsSection.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      id: 'jardin-plaza',
      title: 'El Jardín de la Plaza',
      description: 'Sitio web para una institución educativa con información sobre sus servicios, galerías de fotos y formulario de contacto.',
      tech: ['WordPress', 'Elementor', 'CSS', 'Responsive Design'],
      link: 'https://eljardindelaplaza.edu.ar/',
      year: '2023'
    },
    {
      id: 'sgastronomicas',
      title: 'SGastronomicas',
      description: 'Plataforma web para empresa de servicios gastronómicos, con catálogo de productos y sistema de cotización online.',
      tech: ['WordPress', 'WooCommerce', 'JavaScript', 'UI/UX Design'],
      link: 'https://sgastronomicas.com.ar/',
      year: '2022'
    },
    {
      id: 'neorelax',
      title: 'NeoRelax',
      description: 'E-commerce para empresa de productos de descanso, con catálogo completo y sistema de pagos integrado.',
      tech: ['WordPress', 'WooCommerce', 'CSS', 'Payment Gateway'],
      link: 'https://neorelax.com.ar/',
      year: '2022'
    },
    {
      id: 'bulgari',
      title: 'BULGARI HOTELS (Prototipo)',
      description: 'Diseño UX/UI para aplicación de reservas de la cadena de hoteles de lujo BULGARI.',
      tech: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
      link: 'https://www.figma.com/proto/trUqjo2lR2L4imHRq2zdxg/BULGARI?type=design&node-id=2-104&t=Njlt4884jBwx21Vo-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=4%3A2',
      year: '2023'
    },
    {
      id: 'burger-bots',
      title: 'BURGER BOTS (Prototipo)',
      description: 'Diseño de interfaz para app móvil de pedidos de comida rápida con temática de robots.',
      tech: ['Adobe XD', 'UI Design', 'Branding', 'Mobile App'],
      link: 'https://xd.adobe.com/view/5f9f6f8d-9cda-47aa-89fb-b1e02c8d84dd-0acc/?fullscreen&hints=off',
      year: '2022'
    }
  ];

  return (
    <div className="projects-section glass-card">
      <h2 className="section-title">Portfolio</h2>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card glass-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-year">{project.year}</div>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-footer">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Ver proyecto <FaExternalLinkAlt className="link-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection; 